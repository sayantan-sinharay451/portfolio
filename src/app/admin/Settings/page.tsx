"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import PageHeading from "../_components/PageHeading";

const SettingsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto"
    >
      <PageHeading
        title="Settings"
        subtitle="Manage profile, social links, and general preferences."
      />
      <div className="mt-8 flex flex-col gap-8 px-4">
        {/* Profile Info Card */}
        <Card className="rounded-lg border border-border bg-surface-elevated/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary-text">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-text">Name</label>
              <Input defaultValue="Sayantan" className="bg-surface/80" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-text">Tagline</label>
              <Input defaultValue="Full-Stack Developer & AI Enthusiast" className="bg-surface/80" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-primary-text">Biography</label>
              <Textarea
                defaultValue="Passionate about building modern web applications and exploring the world of AI."
                className="min-h-[120px] bg-surface/80"
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Links & Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 rounded-lg border border-border bg-surface-elevated/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary-text">Social & Site Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-text">GitHub</label>
                <Input defaultValue="https://github.com/sayantan-dev" className="bg-surface/80" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-text">LinkedIn</label>
                <Input defaultValue="https://linkedin.com/in/sayantan-dev" className="bg-surface/80" />
              </div>
               <div className="space-y-2">
                <label className="text-sm font-medium text-primary-text">Twitter / X</label>
                <Input defaultValue="https://twitter.com/sayantan_dev" className="bg-surface/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border border-border bg-surface-elevated/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary-text">Theme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <span className="font-medium text-primary-text">Dark Mode</span>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end mt-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Save All Settings
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;