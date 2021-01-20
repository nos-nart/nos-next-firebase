import React from 'react';
import {
  Flex,
  Avatar,
  Stack,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';
import { Logo } from './svgs';
import { useAuth } from '@/lib/auth';

export const DashboardLayout = ({ children }) => {
  const auth = useAuth();

  return (
    <>
      <Flex
        bg="white"
        justifyContent="space-between"
        alignItems="center"
        px={8}
        py={4}
      >
        <Stack isInline spacing={6} alignItems="center">
          <Logo />
          <Link href="/">Feedback</Link>
          <Link href="/">Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link mr="4">Account</Link>
          <Avatar size="sm" src={auth?.user?.photoURL} />
        </Flex>
      </Flex>
      <Flex
        bg="gray.100"
        p={8}
        justifyContent="center"
      >
        <Flex
          maxWidth="800px"
          w="100%"
          flexDirection="column"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="black">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color="black" mb={4}>Sites</Heading>
          { children }
        </Flex>
      </Flex>
    </>
  )
}
