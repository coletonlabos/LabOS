import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome to your dashboard</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your account today.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Today&apos;s Tasks</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Upcoming Events</h3>
          <p className="text-2xl font-bold">3</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Active Projects</h3>
          <p className="text-2xl font-bold">5</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Recent Notes</h3>
          <p className="text-2xl font-bold">8</p>
        </Card>
      </div>
    </div>
  );
}
