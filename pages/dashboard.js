import React from 'react';
import { EmptyState, DashboardLayout, SiteTableSkeleton, SiteTable, SiteTableHeader } from '@/components/index';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr'

const Dashboard = () => {
  const { data } = useSWR('/api/sites', fetcher);

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
