'use client';

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Timer } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import ShinyText from "@/components/ShinyText";

interface DashboardHeaderProps {
  onStartSession?: () => void;
  hasActiveSession?: boolean;
}

interface User {
  email?: string;
  user_metadata: {
    full_name?: string;
  };
}

export const DashboardHeader = ({ onStartSession, hasActiveSession = false }: DashboardHeaderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user as User | null);
      setLoading(false);
    };
    
    fetchUser();
  }, []);

  const displayName = !loading && user
    ? user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'
    : 'User';

    

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-zinc-800">
          <AvatarFallback className="bg-zinc-800 text-zinc-100 font-semibold">
            {displayName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            Welcome, <ShinyText text={displayName} speed={3} className="font-bold" />!
          </h1>
          <p className="text-zinc-400 text-sm">Track your focus sessions</p>
        </div>
      </div>
      <Button
        size="lg"
        className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
        onClick={onStartSession}
        disabled={hasActiveSession}
      >
        <Timer className="mr-2 h-4 w-4" />
        {hasActiveSession ? 'Session Active' : 'Start Session'}
      </Button>
    </div>
  );
};