"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import PageHeading from "../_components/PageHeading";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto"
    >
      <PageHeading
        title="About Section"
        subtitle="Edit your biography, tagline, and personal details."
      />
      <div className="mt-8 px-4">
        <Card className="rounded-lg border-border bg-secondary shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary-text">
              Edit Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-primary-text">Name</label>
              <Input id="name" defaultValue="Sayantan" className="bg-surface" />
            </div>
            <div className="space-y-2">
              <label htmlFor="tagline" className="text-sm font-medium text-primary-text">Tagline</label>
              <Input id="tagline" defaultValue="Full-Stack Developer & AI Enthusiast" className="bg-surface" />
            </div>
            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-medium text-primary-text">Biography</label>
              <Textarea
                id="bio"
                defaultValue="Passionate about building modern web applications and exploring the world of AI."
                className="min-h-[150px] bg-surface"
              />
            </div>
            <div className="flex justify-end">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default AboutPage;
