import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import {
  DashboardLayout,
  FeedbackEmptyState,
  FeedbackTableHeader,
  FeedbackTableSkeleton,
  FeedbackTable
} from '@/components/index';

const AllFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedbacks', user.ya] : null, fetcher);

  if (!data) {
    return (
      <DashboardLayout>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <FeedbackTableHeader />
      {data?.feedbacks?.length ? (
        <FeedbackTable feedback={data.feedbacks} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardLayout>
  );
}

const AllFeedbackPage = () => {
  return (
    <AllFeedback />
  )
}

export default AllFeedbackPage;
