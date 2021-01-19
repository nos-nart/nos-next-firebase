import React from 'react';
import {
  Flex,
  Avatar,
  Stack,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import { Logo } from './svgs';

export const Dashboard = ({ children }) => {
  return (
    <>
      <Flex
        backgroundColor="ưhite"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Stack isInline spacing={4}>
          <Logo />
          <Link href="/">Feedback</Link>
          <Link href="/">Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link>Account</Link>
          <Avatar size="sm" />
        </Flex>
      </Flex>
      <Flex
        backgroundColor="gray.100"
        p={8}
      >
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        { children }
      </Flex>
    </>
  )
}
