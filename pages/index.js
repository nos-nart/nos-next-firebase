import React from 'react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import { Logo, GoogleIcon, GithubIcon } from '@/components/svgs';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" py direction="column" maxW="700px" margin="0 auto">
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              if (document.cookie && document.cookie.includes('next-firebase-auth')) {
                window.location.href = "/sites"
              }
            `
              }}
            />
          </Head>
          <Flex alignItems="center">
            <Logo />
            <Text ml={4} fontWeight="bold">
              {`Fast feedback`}
            </Text>
          </Flex>
          <Text my={6}>{`It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}</Text>
          { 
            auth?.user ? (
              <Button
                as="a"
                href="/sites"
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                mt={4}
                maxW="200px"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}
              >
                View Dashboard
              </Button>
            ) : (
              <Flex direction={['column', 'row']}>
                <Button
                  onClick={() => auth.signinWithGithub()}
                  backgroundColor="gray.900"
                  color="white"
                  fontWeight="medium"
                  mt={4}
                  mr={2}
                  _hover={{ bg: 'gray.700' }}
                  _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                  }}
                >
                  <GithubIcon width={20} /> <Text ml={3}>Continue with GitHub</Text>
                </Button>
              </Flex>
            )
          }
        </Flex>
      </Box>
    </>
  )
}
