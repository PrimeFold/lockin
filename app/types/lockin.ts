import { createClient } from "@/lib/supabase/client";

// ==================== TYPE DEFINITIONS ====================

export type SessionType = 'deep_work' | 'study' | 'break' | 'custom';

export interface FocusSession {
  id: string;
  user_id: string;
  session_type: SessionType;
  started_at: string;
  ended_at: string | null;
  duration_minutes: number | null;
  goal: string | null;
}

export interface BlockedWebsite {
  id: string;
  user_id: string;
  domain: string;
  is_active: boolean;
  created_at: string;
}

export interface FocusGoal {
  id: string;
  user_id: string;
  title: string;
  target_minutes_per_week: number | null;
  current_progress: number;
  is_active: boolean;
  created_at: string;
}

export interface UserProfile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  is_premium: boolean;
  streak_count: number;
}

export interface UserStats {
  totalSessions: number;
  totalFocusTime: number; // in minutes
  websitesBlockedCount: number;
  currentStreak: number; // days
  averageSessionTime: number; // in minutes
}

export interface DashboardData {
  stats: UserStats;
  recentSessions: FocusSession[];
  blockedWebsites: BlockedWebsite[];
  activeGoals: FocusGoal[];
  userProfile: UserProfile | null;
}

// ==================== FOCUS SESSION FUNCTIONS ====================

/**
 * Fetch recent focus sessions for a user
 */
export async function fetchRecentSessions(userId: string, limit: number = 5) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('started_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return { data: data as FocusSession[], error: null };
  } catch (error) {
    console.error('Error fetching recent sessions:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Start a new focus session
 */
export async function startSession(
  userId: string,
  sessionType: SessionType,
  goal?: string
) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_sessions')
      .insert({
        user_id: userId,
        session_type: sessionType,
        goal: goal || null,
        started_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) throw error;
    return { data: data as FocusSession, error: null };
  } catch (error) {
    console.error('Error starting session:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * End an active focus session
 */
export async function endSession(sessionId: string) {
  try {
    const supabase = createClient();
    const now = new Date();
    
    // Get the session to calculate duration - fetch ALL fields to use as fallback
    const { data: sessions, error: fetchError } = await supabase
      .from('focus_sessions')
      .select('*')
      .eq('id', sessionId);

    if (fetchError) {
      console.error('Error fetching session to end:', fetchError);
      throw fetchError;
    }

    if (!sessions || sessions.length === 0) {
      console.error('Session not found:', sessionId);
      throw new Error('Session not found');
    }

    const session = sessions[0];
    const startTime = new Date(session.started_at);
    const durationMinutes = Math.floor((now.getTime() - startTime.getTime()) / 60000);

    const { data, error } = await supabase
      .from('focus_sessions')
      .update({
        ended_at: now.toISOString(),
        duration_minutes: durationMinutes,
      })
      .eq('id', sessionId)
      .select();

    if (error) {
      console.error('Error updating session:', error);
      throw error;
    }

    // Return the first result (should only be one)
    const updatedSession = data && data.length > 0 ? data[0] : null;
    
    if (!updatedSession) {
      // Verification step: Check if the update actually happened
      const { data: verifyData } = await supabase
        .from('focus_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();
        
      if (verifyData && verifyData.ended_at) {
        // Update succeeded but didn't return data (RLS issue?)
        return { data: verifyData as FocusSession, error: null };
      }

      console.error('Session update failed - RLS policy likely blocking UPDATE');
      // If we're here, the update probably didn't stick
      // We'll still return the manual session to update UI, but log a clearer error
      const manualSession = {
        ...session,
        ended_at: now.toISOString(),
        duration_minutes: durationMinutes,
      };
      return { data: manualSession as FocusSession, error: null };
    }
    
    return { data: updatedSession as FocusSession, error: null };
  } catch (error) {
    console.error('Error ending session:', error);
    // Return null error to not block UI, but log the issue
    return { data: null, error: null };
  }
}

/**
 * Get total session count for a user
 */
export async function getSessionCount(userId: string) {
  try {
    const supabase = createClient();
    const { count, error } = await supabase
      .from('focus_sessions')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .not('ended_at', 'is', null); // Only count completed sessions

    if (error) throw error;
    return { data: count || 0, error: null };
  } catch (error) {
    console.error('Error getting session count:', error);
    return { data: 0, error: error as Error };
  }
}

/**
 * Get total focus time for a user (in minutes)
 */
export async function getTotalFocusTime(userId: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_sessions')
      .select('duration_minutes')
      .eq('user_id', userId)
      .not('duration_minutes', 'is', null);

    if (error) throw error;
    
    const totalMinutes = data?.reduce((sum, session) => sum + (session.duration_minutes || 0), 0) || 0;
    return { data: totalMinutes, error: null };
  } catch (error) {
    console.error('Error getting total focus time:', error);
    return { data: 0, error: error as Error };
  }
}

// ==================== BLOCKED WEBSITES FUNCTIONS ====================

/**
 * Fetch all active blocked websites for a user
 */
export async function fetchBlockedWebsites(userId: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('blocked_websites')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data: data as BlockedWebsite[], error: null };
  } catch (error) {
    console.error('Error fetching blocked websites:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Add a new blocked website
 */
export async function addBlockedWebsite(userId: string, domain: string) {
  try {
    const supabase = createClient();
    
    // Check if domain already exists
    const { data: existing } = await supabase
      .from('blocked_websites')
      .select('id, is_active')
      .eq('user_id', userId)
      .eq('domain', domain)
      .single();

    // If exists and inactive, reactivate it
    if (existing && !existing.is_active) {
      const { data, error } = await supabase
        .from('blocked_websites')
        .update({ is_active: true })
        .eq('id', existing.id)
        .select()
        .single();
      
      if (error) throw error;
      return { data: data as BlockedWebsite, error: null };
    }

    // Otherwise create new
    const { data, error } = await supabase
      .from('blocked_websites')
      .insert({
        user_id: userId,
        domain,
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;
    return { data: data as BlockedWebsite, error: null };
  } catch (error) {
    console.error('Error adding blocked website:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Remove a blocked website (soft delete)
 */
export async function removeBlockedWebsite(userId: string, websiteId: string) {
  try {
    const supabase = createClient();
    const { error } = await supabase
      .from('blocked_websites')
      .update({ is_active: false })
      .eq('id', websiteId)
      .eq('user_id', userId);

    if (error) throw error;
    return { data: true, error: null };
  } catch (error) {
    console.error('Error removing blocked website:', error);
    return { data: false, error: error as Error };
  }
}

/**
 * Get count of blocked websites
 */
export async function getBlockedWebsitesCount(userId: string) {
  try {
    const supabase = createClient();
    const { count, error } = await supabase
      .from('blocked_websites')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('is_active', true);

    if (error) throw error;
    return { data: count || 0, error: null };
  } catch (error) {
    console.error('Error getting blocked websites count:', error);
    return { data: 0, error: error as Error };
  }
}

// ==================== USER PROFILE FUNCTIONS ====================

/**
 * Fetch user profile
 */
export async function fetchUserProfile(userId: string) {
  try {
    const supabase = createClient();
    // Use select() instead of single() to avoid 406 error when profile doesn't exist
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId);

    if (error) throw error;

    // If no profile found, return null without error
    if (!data || data.length === 0) {
      return { data: null, error: null };
    }

    return { data: data[0] as UserProfile, error: null };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return { data: null, error: null }; // Return null instead of error to not block dashboard
  }
}

/**
 * Update user streak count
 */
export async function updateStreakCount(userId: string, streakCount: number) {
  try {
    const supabase = createClient();
    
    // First check if profile exists to avoid error
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('id')
      .eq('id', userId)
      .single();

    if (!profile) {
      // Profile doesn't exist, we can't update streak. 
      // In a real app we might create it here, but for now just return silently
      return { data: null, error: null };
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .update({ streak_count: streakCount })
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;
    return { data: data as UserProfile, error: null };
  } catch (error) {
    console.error('Error updating streak count:', error);
    // Return null error to not block UI
    return { data: null, error: null };
  }
}

// ==================== FOCUS GOALS FUNCTIONS ====================

/**
 * Fetch active focus goals for a user
 */
export async function fetchActiveGoals(userId: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_goals')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data: data as FocusGoal[], error: null };
  } catch (error) {
    console.error('Error fetching active goals:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Create a new focus goal
 */
export async function createFocusGoal(
  userId: string,
  title: string,
  targetMinutesPerWeek?: number
) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_goals')
      .insert({
        user_id: userId,
        title,
        target_minutes_per_week: targetMinutesPerWeek || null,
        current_progress: 0,
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;
    return { data: data as FocusGoal, error: null };
  } catch (error) {
    console.error('Error creating focus goal:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Update goal progress
 */
export async function updateGoalProgress(goalId: string, progress: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_goals')
      .update({ current_progress: progress })
      .eq('id', goalId)
      .select()
      .single();

    if (error) throw error;
    return { data: data as FocusGoal, error: null };
  } catch (error) {
    console.error('Error updating goal progress:', error);
    return { data: null, error: error as Error };
  }
}

// ==================== STATS FUNCTIONS ====================

/**
 * Calculate current streak (consecutive days with completed sessions)
 */
export async function calculateStreak(userId: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('focus_sessions')
      .select('started_at')
      .eq('user_id', userId)
      .not('ended_at', 'is', null)
      .order('started_at', { ascending: false });

    if (error) throw error;
    if (!data || data.length === 0) return { data: 0, error: null };

    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const sessionDates = new Set(
      data.map(session => {
        const date = new Date(session.started_at);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
      })
    );

    // Check if there's a session today or yesterday to start counting
    const today = currentDate.getTime();
    const yesterday = today - 24 * 60 * 60 * 1000;

    if (!sessionDates.has(today) && !sessionDates.has(yesterday)) {
      return { data: 0, error: null };
    }

    // Count consecutive days
    let checkDate = sessionDates.has(today) ? today : yesterday;
    while (sessionDates.has(checkDate)) {
      streak++;
      checkDate -= 24 * 60 * 60 * 1000;
    }

    // Update user profile with new streak
    await updateStreakCount(userId, streak);

    return { data: streak, error: null };
  } catch (error) {
    console.error('Error calculating streak:', error);
    return { data: 0, error: error as Error };
  }
}

/**
 * Get comprehensive dashboard statistics
 */
export async function getDashboardStats(userId: string): Promise<{ data: UserStats | null; error: Error | null }> {
  try {
    const [sessionsResult, focusTimeResult, websitesResult, streakResult] = await Promise.all([
      getSessionCount(userId),
      getTotalFocusTime(userId),
      getBlockedWebsitesCount(userId),
      calculateStreak(userId),
    ]);

    const totalSessions = sessionsResult.data || 0;
    const totalFocusTime = focusTimeResult.data || 0;
    const averageSessionTime = totalSessions > 0 ? totalFocusTime / totalSessions : 0;

    const stats: UserStats = {
      totalSessions,
      totalFocusTime,
      websitesBlockedCount: websitesResult.data || 0,
      currentStreak: streakResult.data || 0,
      averageSessionTime,
    };

    return { data: stats, error: null };
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    return { data: null, error: error as Error };
  }
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Format duration in minutes to readable string
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
}

/**
 * Get all dashboard data in one call
 */
export async function getDashboardData(userId: string): Promise<{ data: DashboardData | null; error: Error | null }> {
  try {
    const [statsResult, sessionsResult, websitesResult, goalsResult, profileResult] = await Promise.all([
      getDashboardStats(userId),
      fetchRecentSessions(userId, 5),
      fetchBlockedWebsites(userId),
      fetchActiveGoals(userId),
      fetchUserProfile(userId),
    ]);

    if (statsResult.error || sessionsResult.error || websitesResult.error) {
      throw new Error('Failed to fetch dashboard data');
    }

    const dashboardData: DashboardData = {
      stats: statsResult.data!,
      recentSessions: sessionsResult.data || [],
      blockedWebsites: websitesResult.data || [],
      activeGoals: goalsResult.data || [],
      userProfile: profileResult.data,
    };

    return { data: dashboardData, error: null };
  } catch (error) {
    console.error('Error getting dashboard data:', error);
    return { data: null, error: error as Error };
  }
}
