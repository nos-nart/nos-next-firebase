import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box
} from '@chakra-ui/react';

import { AddSiteModal } from './AddSiteModal';

export const SiteTableHeader = ({ }) => (
  <Box>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink>Sites</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>My Sites</Heading>
      <AddSiteModal>+ Add Site</AddSiteModal>
    </Flex>
  </Box>
);
