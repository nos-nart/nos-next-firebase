import React from 'react';
import NextLink from 'next/link';
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
    <Flex direction="column" minH="100vh">
      <Flex
        bg="white"
        justifyContent="space-between"
        alignItems="center"
        px={8}
        py={4}
      >
        <Stack isInline spacing={6} alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <Logo />
            </Link>
          </NextLink>
          <NextLink href="/sites" passHref>
            <Link mr={4}>Sites</Link>
          </NextLink>
          <NextLink href="/feedbacks" passHref>
            <Link>Feedbacks</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          <NextLink href="/account" passHref>
            <Link>
              <Avatar size="sm" src={auth?.user?.photoURL} />
            </Link>
          </NextLink>
        </Flex>
      </Flex>
      <Flex
        bg="gray.100"
        p={8}
        justifyContent="center"
        flexGrow={1}
      >
        <Flex margin="0 auto" direction="column" maxW="1250px" w="full" px={[0, 8, 8]} alignItems="center">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
