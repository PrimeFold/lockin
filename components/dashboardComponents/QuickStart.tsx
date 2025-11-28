import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickStartProps {
  onShortSession?: () => void;
  onLongSession?: () => void;
  onCustomSession?: () => void;
  disabled?: boolean;
  className?: string;
}

export const QuickStart = ({
  onShortSession,
  onLongSession,
  onCustomSession,
  disabled = false,
  className
}: QuickStartProps) => {
  return (
    <Card className={cn("bg-zinc-900 border-zinc-800", className)}>
      <CardHeader>
        <CardTitle>Quick Start</CardTitle>
        <CardDescription className="text-zinc-400">
          {disabled ? 'Session in progress' : 'Start a focus session'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
          variant="outline"
          onClick={onShortSession}
          disabled={disabled}
        >
          <Timer className="mr-2 h-4 w-4" />
          25 minutes
        </Button>
        <Button
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
          variant="outline"
          onClick={onLongSession}
          disabled={disabled}
        >
          <Timer className="mr-2 h-4 w-4" />
          50 minutes
        </Button>
        <Button
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
          variant="outline"
          onClick={onCustomSession}
          disabled={disabled}
        >
          <Plus className="mr-2 h-4 w-4" />
          Custom
        </Button>
      </CardContent>
    </Card>
  );
};