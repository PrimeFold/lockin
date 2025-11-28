'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { type FocusGoal } from "@/app/types/lockin";

interface WeeklyGoalProps {
  className?: string;
  goals: FocusGoal[];
  onAddGoal?: () => void;
}

export const WeeklyGoal = ({ className, goals, onAddGoal }: WeeklyGoalProps) => {
  
  // Get the first active goal (you can enhance this to show multiple goals)
  const primaryGoal = goals.find(g => g.is_active) || goals[0];

  if (!primaryGoal) {
    return (
      <Card className={cn("bg-zinc-900 border-zinc-800", className)}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-zinc-400" />
            Weekly Goal
          </CardTitle>
          <CardDescription className="text-zinc-400">
            No active goals set for this week.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={onAddGoal}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 border-dashed h-24 flex flex-col gap-2"
          >
            <Plus className="h-6 w-6" />
            <span>Set a Weekly Goal</span>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const progress = primaryGoal.target_minutes_per_week 
    ? Math.min(100, Math.round((primaryGoal.current_progress / primaryGoal.target_minutes_per_week) * 100))
    : 0;

  const remainingMinutes = primaryGoal.target_minutes_per_week 
    ? Math.max(0, primaryGoal.target_minutes_per_week - primaryGoal.current_progress)
    : 0;
    
  const remainingHours = Math.floor(remainingMinutes / 60);
  const remainingMins = remainingMinutes % 60;

  return (
    <Card className={cn("bg-zinc-900 border-zinc-800", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg font-medium">
            <Target className="h-5 w-5 text-emerald-500" />
            {primaryGoal.title}
          </CardTitle>
          <span className="text-2xl font-bold">{progress}%</span>
        </div>
        <CardDescription className="text-zinc-400">
          {Math.floor(primaryGoal.current_progress / 60)}h {primaryGoal.current_progress % 60}m of {Math.floor(primaryGoal.target_minutes_per_week! / 60)}h target
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-3 bg-zinc-800" indicatorClassName="bg-emerald-500" />
        <p className="text-xs text-zinc-500 mt-3 text-right">
          {progress >= 100 ? (
            <span className="text-emerald-400 font-medium">Goal completed! 🎉</span>
          ) : (
            `${remainingHours}h ${remainingMins}m remaining this week`
          )}
        </p>
      </CardContent>
    </Card>
  );
};