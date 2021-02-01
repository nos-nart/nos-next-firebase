import React from 'react';
import useSWR, { mutate } from 'swr';
import { useRouter } from 'next/router';
import { Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

import { DashboardLayout, Feedback } from '@/components/index';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { createFeedback } from '@/lib/firestore';

const SiteFeedback = () => {
  const router = useRouter();
  const inputRef = React.useRef(null);
  const { user } = useAuth();
  const { sId } = router.query || null;

  const {data} = useSWR(`/api/feedback/${sId}`, fetcher);
  const allFeedback = data?.feedbacks;

  const onSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: user.displayName,
      authorId: user.uid,
      siteId: sId,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      provider: user.providerData[0].providerId,
      status: 'pending',
      rating: 4
    }

    createFeedback(newFeedback);
    mutate(
      `/api/feedback/${sId}`,
      async (data) => ({
        feedbacks: [newFeedback, ...data.feedbacks]
      }),
      false
    )
  }

  return (
    <DashboardLayout>
      <Box
        display="flex"
        mx={4}
        flexDirection="column"
        width="full"
        maxWidth="700px"
      >
        <Box as="form" onSubmit={onSubmit}>
          <FormControl my={8}>
            <FormLabel htmlFor="comment">Comment</FormLabel>
            <Input ref={inputRef} type="comment" id="comment" />
            <Button mt={2} type="submit" fontWeight="medium">Add comment</Button>
          </FormControl>
        </Box>
        {
          allFeedback && allFeedback.map((feedback, index) => (
            <Feedback
              key={index}
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
