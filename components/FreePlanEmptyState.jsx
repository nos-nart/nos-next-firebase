import React from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import { DashboardLayout } from './DashboardLayout';

export const FreePlanEmptyState = () => {
  return (
    <DashboardLayout>
      <Flex
        bg="white"
        width="100%"
        p={8}
        borderRadius="md"
        flexDirection="column"
        alignItems="center"
      >
        <Heading size="lg" mb={2}>Get feedback on your site instantly</Heading>
        <Text>Start today, the grow with us 🌱</Text>
        <Button mt={4}>Upgrade to Starter</Button>
      </Flex>
    </DashboardLayout>
  )
}
