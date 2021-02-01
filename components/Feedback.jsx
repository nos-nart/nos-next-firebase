import React from 'react';
import { Box, Heading, Text, Divider, Icon, Flex, Code } from '@chakra-ui/react';
import dayjs from 'dayjs';

export const Feedback = ({ author, text, createdAt, isLast }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align="center">
        <Heading
          size="sm"
          as="h3"
          mb={0}
          fontWeight="medium"
        >
          {author}
        </Heading>
      </Flex>
      <Text color="gray.500" my={2} fontSize="xs">
        {dayjs(createdAt).format('MMM D, YYYY h:mm A')}
      </Text>
      <Text color="gray.800">{text}</Text>
      {!isLast && (
        <Divider borderColor="gray.200" mt={6} mb={6} />
      )}
    </Box>
  );
};
