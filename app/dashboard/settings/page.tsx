"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <div className="p-6 space-y-6 text-white">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>

      {/* Profile Settings */}
      <Card className="bg-white/5 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-white/70 mb-5">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="bg-white/10 border-white/10 text-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white/70 mb-5">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/10 text-white"
              />
            </div>
          </div>
          <Button className="bg-white/10 hover:bg-white/20 text-white">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="bg-white/5 backdrop-blur-md border-white/10">
        <CardHeader>
          <CardTitle className="text-white/90">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-white/70">Dark Mode</Label>
            {/* if you ever want to add both light/dark mode, then remove this ```checked``` attribute */}
            <Switch checked /> 
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-white/70">Email Notifications</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-red-500/10 backdrop-blur-md border-red-500/20">
        <CardHeader>
          <CardTitle className="text-red-400">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-white/70">
            Once you delete your account, all data will be permanently removed.
            This action cannot be undone.
          </p>
          <Button
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
