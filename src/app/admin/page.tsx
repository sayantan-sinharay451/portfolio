"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GitGraph, PenSquare, Settings, Shapes } from "lucide-react";
import PageHeading from "./_components/PageHeading";

const cardData = [
  {
    title: "Total Projects",
    amount: "12",
    icon: <GitGraph className="text-primary-text" />,
    color: "text-emerald-500",
  },
  {
    title: "Total Skills",
    amount: "30",
    icon: <Shapes className="text-primary-text" />,
    color: "text-blue-500",
  },
  {
    title: "Total Experience",
    amount: "4",
    icon: <PenSquare className="text-primary-text" />,
    color: "text-amber-500",
  },
  {
    title: "Settings",
    amount: "8",
    icon: <Settings className="text-primary-text" />,
    color: "text-indigo-500",
  },
];

const DashboardHomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto"
    >
      <PageHeading
        title="Welcome back, Sayantan!"
        subtitle="Manage your portfolio content and stats below."
      />
      <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-lg border border-border bg-surface-elevated/60 shadow-sm"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-text">
                {card.title}
              </CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${card.color}`}>
                {card.amount}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 px-4">
        <Card className="rounded-lg border border-border bg-surface-elevated/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-primary-text">
              Activity Graph
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-lg bg-surface text-muted-foreground">
              <p>Activity graph placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default DashboardHomePage;
