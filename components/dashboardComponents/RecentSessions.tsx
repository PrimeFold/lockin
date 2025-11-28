import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { type FocusSession, formatDuration } from "@/app/types/lockin";

interface RecentSessionsProps {
  className?: string;
  sessions: FocusSession[];
}

const sessionTypeLabels: Record<string, string> = {
  deep_work: "Deep Work",
  study: "Study",
  break: "Break",
  custom: "Custom"
};

export const RecentSessions = ({ className, sessions }: RecentSessionsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Card className={cn("bg-zinc-900 border-zinc-800", className)}>
      <CardHeader>
        <CardTitle>Recent Sessions</CardTitle>
        <CardDescription className="text-zinc-400">
          Your latest focus sessions
        </CardDescription>
      </CardHeader>
      <CardContent>
        {sessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Timer className="h-12 w-12 text-zinc-700 mb-3" />
            <p className="text-zinc-500">No sessions yet</p>
            <p className="text-sm text-zinc-600 mt-1">Start your first focus session to see it here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sessions.map((session) => (
              <div 
                key={session.id} 
                className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-zinc-700/50">
                    <Timer className="h-4 w-4 text-zinc-300" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-100">
                      {sessionTypeLabels[session.session_type] || session.session_type}
                    </p>
                    {session.goal && (
                      <p className="text-sm text-zinc-400">{session.goal}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-zinc-300">
                    <Clock className="h-3 w-3" />
                    <span className="text-sm font-medium">
                      {session.duration_minutes ? formatDuration(session.duration_minutes) : 'In progress'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    {formatDate(session.started_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};