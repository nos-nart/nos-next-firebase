import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Box, FormControl, Textarea, Button } from '@chakra-ui/react';

import fetcher from '@/utils/fetcher';
import { DashboardLayout, Feedback } from '@/components/index';

const SiteFeedback = () => {
  const router = useRouter();
  const { sId } = router.query || null;

  const {data} = useSWR(`/api/feedback/${sId}`, fetcher);
  const allFeedback = data?.feedback;

  return (
    <DashboardLayout>
      <Box>
        {
          allFeedback && allFeedback.map((feedback, index) => (
            <Feedback
              key={feedback.id}
              settings={site?.settings}
              isLast={index === allFeedback.length - 1}
              {...feedback}
            />
          ))
        }
      </Box>
    </DashboardLayout>
  )
}

export default SiteFeedback;
