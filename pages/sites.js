import React from 'react';
import useSWR from 'swr';

import { EmptyState, DashboardLayout, SiteTableSkeleton, SiteTable, SiteTableHeader } from '@/components/index';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';

const Dashboard = () => {
  const { user } = useAuth();
  console.log('user: ', user);
  const { data } = useSWR(user ? ['/api/sites', user.ya] : null, fetcher);

  if (!data) {
    return (
      <DashboardLayout>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardLayout>
    )
  }
  return (
    <DashboardLayout>
      <SiteTableHeader />
      {data ? <SiteTable sites={data.sites}/> : <EmptyState />}
    </DashboardLayout>
  );
}

export default Dashboard;
