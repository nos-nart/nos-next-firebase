import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';
import { mutate } from 'swr';

import { Td } from './Table';
import { DeleteFeedbackButton } from './DeleteFeedbackButton';
import { useAuth } from '@/lib/auth';
import { updateFeedback } from '@/lib/firestore';

export const FeedbackRow = ({ id, author, text, route, status }) => {
  const { user } = useAuth();
  const isChecked = status === 'active';

  const onToggleStatus = async () => {
    await updateFeedback(id, { status: isChecked ? 'pending' : 'active' });
    mutate(['/api/feedbacks', user.ya]);
  };

  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code
          maxW="150px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
          display="inherit"
        >
          {route || '/'}
        </Code>
      </Td>
      <Td>
        <Switch colorScheme="green" onChange={onToggleStatus} isChecked={isChecked} />
      </Td>
      <Td>
        <DeleteFeedbackButton feedbackId={id} />
      </Td>
    </Box>
  )
}
