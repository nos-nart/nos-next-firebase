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
          <NextLink href="/" passHref>
            <Link>
              <Logo />
            </Link>
          </NextLink>
          <NextLink href="/sites" passHref>
            <Link mr={4}>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
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
        <Flex margin="0 auto" direction="column" maxW="1250px" w="full" px={[0, 8, 8]} alignItems="center">
          {children}
        </Flex>
      </Flex>
    </>
  )
}
