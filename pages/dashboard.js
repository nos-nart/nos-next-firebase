import React from 'react';
import { useAuth } from '@/lib/auth';
import { EmptyState, DashboardLayout, SiteTableSkeleton } from '@/components/index';
import { useSites } from '@/hooks/useSites';

const Dashboard = () => {
  const auth = useAuth();
  const siteQuery = useSites();
  console.log('siteQuery: ', siteQuery);

  if (!auth.user) {
    return (
      <DashboardLayout>
        <SiteTableSkeleton />
      </DashboardLayout>
    )
  }
  return (
    <DashboardLayout>
      <EmptyState />
    </DashboardLayout>
  );
}

export default Dashboard;
