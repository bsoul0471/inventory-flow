import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Settings() {
  const [analyticsId, setAnalyticsId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const handleConnect = () => {
    if (analyticsId.trim()) {
      setIsConnected(true);
      toast({
        title: 'Analytics Connected',
        description: 'Google Analytics has been successfully integrated.',
      });
    } else {
      toast({
        title: 'Error',
        description: 'Please enter a valid Google Analytics ID.',
        variant: 'destructive',
      });
    }
  };

  const handleDisconnect = () => {
    setAnalyticsId('');
    setIsConnected(false);
    toast({
      title: 'Analytics Disconnected',
      description: 'Google Analytics integration has been removed.',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application settings</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Google Analytics Integration</CardTitle>
              <CardDescription>Connect your Google Analytics account to track website metrics</CardDescription>
            </div>
            {isConnected ? (
              <Badge className="bg-success text-success-foreground">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Connected
              </Badge>
            ) : (
              <Badge variant="secondary">
                <XCircle className="mr-1 h-3 w-3" />
                Not Connected
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="analytics-id">Google Analytics Tracking ID</Label>
            <div className="flex gap-3">
              <Input
                id="analytics-id"
                placeholder="G-XXXXXXXXXX or UA-XXXXXXXXX-X"
                value={analyticsId}
                onChange={(e) => setAnalyticsId(e.target.value)}
                disabled={isConnected}
              />
              {!isConnected ? (
                <Button onClick={handleConnect}>Connect</Button>
              ) : (
                <Button variant="destructive" onClick={handleDisconnect}>
                  Disconnect
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Enter your Google Analytics tracking ID to start collecting data
            </p>
          </div>

          {isConnected && (
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-medium">Analytics Overview</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm text-muted-foreground">Page Views (30d)</p>
                  <p className="text-2xl font-bold">12,543</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Unique Visitors (30d)</p>
                  <p className="text-2xl font-bold">8,421</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
                  <p className="text-2xl font-bold">4m 32s</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                * This is placeholder data. Connect to see real analytics.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Configure application preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" placeholder="Enter your company name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="contact@company.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Default Currency</Label>
            <Input id="currency" placeholder="USD" />
          </div>
          <Button>Save Settings</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Low Stock Alerts</p>
              <p className="text-sm text-muted-foreground">
                Get notified when products reach minimum stock level
              </p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Invoice Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive alerts for new invoices and payments
              </p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Monthly Reports</p>
              <p className="text-sm text-muted-foreground">
                Automated monthly summary reports via email
              </p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
