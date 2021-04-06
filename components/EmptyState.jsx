import React from 'react'
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import { AddSiteModal } from './AddSiteModal';

export const EmptyState = () => {
  return (
    <Flex
      bg="white"
      width="100%"
      p={16}
      borderRadius="md"
      flexDirection="column"
      alignItems="center"
    >
      <Heading size="lg" mb={2}>You haven't added any sites.</Heading>
      <Text mb={6}>Welcom 👋🏻 let's get started</Text>
      <AddSiteModal>Add your first site</AddSiteModal>
    </Flex>
  )
}
