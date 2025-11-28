'use client';

import { useEffect, useState } from "react";
import { DashboardHeader } from "@/components/dashboardComponents/Header";
import { StatsGrid } from "@/components/dashboardComponents/StatsGrid";
import { WeeklyGoal } from "@/components/dashboardComponents/WeeklyGoal";
import { QuickStart } from "@/components/dashboardComponents/QuickStart";
import { RecentSessions } from "@/components/dashboardComponents/RecentSessions";
import { BlockedSites } from "@/components/dashboardComponents/BlockedSites";

import { AddGoalDialog } from "@/components/dashboardComponents/AddGoalDialog";
import ProductivityAccents from "@/components/ProductivityAccents";
import { createClient } from "@/lib/supabase/client";
import { 
  getDashboardData, 
  startSession,
  endSession,
  createFocusGoal,
  type DashboardData,
  type SessionType,
  type FocusSession
} from "@/app/types/lockin";
import { ActiveSession } from "@/components/dashboardComponents/ActiveSession";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [activeSession, setActiveSession] = useState<FocusSession | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);

  // Fetch user ID and dashboard data
  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        setUserId(user.id);
        const { data, error } = await getDashboardData(user.id);
        if (data) {
          setDashboardData(data);
          // Check if there's an active session (no ended_at)
          const active = data.recentSessions.find(s => !s.ended_at);
          if (active) {
            setActiveSession(active);
          }
        }
        if (error) {
          console.error('Error fetching dashboard data:', error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Timer for active session
  useEffect(() => {
    if (!activeSession) {
      setElapsedTime(0);
      return;
    }

    const startTime = new Date(activeSession.started_at).getTime();
    
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [activeSession]);

  // Refresh dashboard data
  const refreshData = async () => {
    if (!userId) return;
    const { data } = await getDashboardData(userId);
    if (data) {
      setDashboardData(data);
      // Update active session
      const active = data.recentSessions.find(s => !s.ended_at);
      setActiveSession(active || null);
    }
  };

  // Handle session start
  const handleStartSession = async (sessionType: SessionType, goal?: string) => {
    if (!userId) return;
    
    // Check if user has at least one blocked website
    const blockedCount = dashboardData?.blockedWebsites?.length || 0;
    if (blockedCount === 0) {
      alert('Please add at least one website to block before starting a session!');
      return;
    }
    
    const { data, error } = await startSession(userId, sessionType, goal);
    if (data) {
      setActiveSession(data);
      // Refresh data after starting session
      await refreshData();
    }
    if (error) {
      console.error('Error starting session:', error);
    }
  };

  // Handle session stop
  const handleStopSession = async () => {
    if (!activeSession) return;
    
    const { data, error } = await endSession(activeSession.id);
    
    // If there's no error, consider it a success even if data is null (though we fixed that too)
    if (!error) {
      setActiveSession(null);
      setElapsedTime(0);
      // Refresh data after ending session
      await refreshData();
    } else {
      console.error('Error ending session:', error);
    }
  };

  // Handle adding a new goal
  const handleAddGoal = async (title: string, targetMinutes: number) => {
    if (!userId) return;
    // targetMinutes is now passed directly from the dialog
    
    const { data, error } = await createFocusGoal(userId, title, targetMinutes);
    
    if (error) {
      console.error('Error creating goal:', error);
      alert('Failed to create goal. Please try again.');
      return;
    }
    
    await refreshData();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-100 mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 relative overflow-hidden">
      <ProductivityAccents />
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        <DashboardHeader 
          onStartSession={() => handleStartSession('deep_work')}
          hasActiveSession={!!activeSession}
        />
        
        {/* Active Session Display */}
        {activeSession && (
          <ActiveSession
            session={activeSession}
            elapsedTime={elapsedTime}
            onStop={handleStopSession}
          />
        )}

        <StatsGrid stats={dashboardData?.stats} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <WeeklyGoal 
            className="lg:col-span-2" 
            goals={dashboardData?.activeGoals || []}
            onAddGoal={() => setIsAddGoalOpen(true)}
          />
          <QuickStart 
            onShortSession={() => handleStartSession('study', '25 min Pomodoro')}
            onLongSession={() => handleStartSession('deep_work', '50 min Deep Work')}
            onCustomSession={() => handleStartSession('custom')}
            disabled={!!activeSession}
          />
          <RecentSessions 
            className="lg:col-span-2" 
            sessions={dashboardData?.recentSessions || []}
          />
          <BlockedSites 
            websites={dashboardData?.blockedWebsites || []}
            userId={userId}
            onUpdate={refreshData}
          />
        </div>

        <AddGoalDialog 
          open={isAddGoalOpen} 
          onOpenChange={setIsAddGoalOpen}
          onAddGoal={handleAddGoal}
        />
      </div>
    </div>
  );
}