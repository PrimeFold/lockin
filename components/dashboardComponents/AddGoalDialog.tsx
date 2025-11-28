'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface AddGoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddGoal: (title: string, targetHours: number) => Promise<void>;
}

export function AddGoalDialog({ open, onOpenChange, onAddGoal }: AddGoalDialogProps) {
  const [title, setTitle] = useState("");
  const [targetMinutes, setTargetMinutes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !targetMinutes) return;

    setLoading(true);
    try {
      await onAddGoal(title, parseFloat(targetMinutes));
      setTitle("");
      setTargetMinutes("");
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to add goal:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-zinc-800 text-zinc-100">
        <DialogHeader>
          <DialogTitle>Set Weekly Goal</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Define your focus goal for this week.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-zinc-200">Goal Title</Label>
            <Input
              id="title"
              placeholder="e.g., Learn React, Read 50 pages"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500"
              autoFocus
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hours" className="text-zinc-200">Target Minutes</Label>
            <Input
              id="hours"
              type="number"
              min="0.5"
              step="0.5"
              placeholder="e.g., 10"
              value={targetMinutes}
              onChange={(e) => setTargetMinutes(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500"
            />
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!title || !targetMinutes || loading}
              className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Goal
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
