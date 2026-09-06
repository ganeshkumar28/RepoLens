"use client";

import { RequireAuth } from "@/components/providers/require-auth";
import { AppShell } from "@/components/layout/app-shell";
// import { RepoDashboard } from "@/components/dashboard/repo-dashboard";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <AppShell hideHeader>
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        </div>
      </AppShell>
    </RequireAuth>
  );
}
    
