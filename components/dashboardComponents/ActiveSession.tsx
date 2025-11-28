import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, StopCircle } from "lucide-react";
import { type FocusSession } from "@/app/types/lockin";
import StarBorder from "@/components/StarBorder";

interface ActiveSessionProps {
  session: FocusSession;
  elapsedTime: number; // in seconds
  onStop: () => void;
}

export const ActiveSession = ({ session, elapsedTime, onStop }: ActiveSessionProps) => {
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <StarBorder as="div" className="w-full" color="#10b981" speed="4s">
      <Card className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-700/50 border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-full">
                <Timer className="h-6 w-6 text-emerald-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-100 capitalize">
                  {session.session_type.replace('_', ' ')} Session
                </h3>
                {session.goal && (
                  <p className="text-sm text-emerald-300/80">{session.goal}</p>
                )}
                <p className="text-xs text-emerald-400/60 mt-1">Session in progress...</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-4xl font-bold text-emerald-100 font-mono">
                  {formatTime(elapsedTime)}
                </div>
                <p className="text-xs text-emerald-400/60 mt-1">Elapsed time</p>
              </div>
              
              <Button
                onClick={onStop}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <StopCircle className="mr-2 h-5 w-5" />
                Stop Session
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </StarBorder>
  );
};
