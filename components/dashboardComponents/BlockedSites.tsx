'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { type BlockedWebsite, addBlockedWebsite, removeBlockedWebsite } from "@/app/types/lockin";

interface BlockedSitesProps {
  className?: string;
  websites: BlockedWebsite[];
  userId: string | null;
  onUpdate: () => void;
}

export const BlockedSites = ({ className, websites, userId, onUpdate }: BlockedSitesProps) => {
  const [newDomain, setNewDomain] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddWebsite = async () => {
    if (!userId || !newDomain.trim()) return;
    
    setIsAdding(true);
    const { error } = await addBlockedWebsite(userId, newDomain.trim());
    if (!error) {
      setNewDomain("");
      onUpdate();
    } else {
      console.error('Error adding website:', error);
    }
    setIsAdding(false);
  };

  const handleRemoveWebsite = async (websiteId: string) => {
    if (!userId) return;
    
    const { error } = await removeBlockedWebsite(userId, websiteId);
    if (!error) {
      onUpdate();
    } else {
      console.error('Error removing website:', error);
    }
  };

  return (
    <Card className={cn("bg-zinc-900 border-zinc-800", className)}>
      <CardHeader>
        <CardTitle>Blocked Sites</CardTitle>
        <CardDescription className="text-zinc-400">
          Manage your blocked websites
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add new website */}
        <div className="flex gap-2">
          <Input
            placeholder="example.com"
            value={newDomain}
            onChange={(e) => setNewDomain(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddWebsite()}
            className="bg-zinc-800 border-zinc-700 text-zinc-100"
          />
          <Button
            size="sm"
            onClick={handleAddWebsite}
            disabled={isAdding || !newDomain.trim()}
            className="bg-zinc-700 hover:bg-zinc-600"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Blocked websites list */}
        {websites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Shield className="h-12 w-12 text-zinc-700 mb-3" />
            <p className="text-zinc-500">No blocked sites</p>
            <p className="text-sm text-zinc-600 mt-1">Add sites to block them</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {websites.map((website) => (
              <div
                key={website.id}
                className="flex items-center justify-between p-2 bg-zinc-800 rounded border border-zinc-700"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-zinc-400" />
                  <span className="text-sm text-zinc-300">{website.domain}</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleRemoveWebsite(website.id)}
                  className="h-6 w-6 p-0 hover:bg-zinc-700"
                >
                  <X className="h-3 w-3 text-zinc-400" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};