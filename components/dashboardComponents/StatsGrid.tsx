import { StatsCard } from "./StatsCard";
import { formatDuration, type UserStats } from "@/app/types/lockin";

interface StatsGridProps {
  stats?: UserStats;
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatsCard 
        title="Focus Time" 
        value={stats ? formatDuration(stats.totalFocusTime) : "0m"} 
        subtitle="Total time" 
        icon="clock" 
      />
      <StatsCard 
        title="Streak" 
        value={stats ? `${stats.currentStreak} days` : "0 days"} 
        subtitle="Current streak" 
        icon="trending" 
      />
      <StatsCard 
        title="Sites Blocked" 
        value={stats ? stats.websitesBlockedCount.toString() : "0"} 
        subtitle="Active blocks" 
        icon="shield" 
      />
      <StatsCard 
        title="Sessions" 
        value={stats ? stats.totalSessions.toString() : "0"} 
        subtitle="Total sessions" 
        icon="timer" 
      />
    </div>
  );
};