import React from 'react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import { Logo, GoogleIcon, GithubIcon } from '@/components/svgs';
import { getAllFeedback, getSite } from '@/lib/firestore-admin';

export async function getStaticProps(context) {
  const { feedbacks } = await getAllFeedback('zuJjYqFFh2psUQyl8tTc');
  const { site } = await getSite('zuJjYqFFh2psUQyl8tTc');

  return {
    props: {
      allFeedback: feedbacks,
      site
    },
    revalidate: 1
  }
}

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
          <Flex alignItems="center" px={3}>
            <Logo />
            <Text ml={4} fontWeight="bold">
              {`Fast feedback`}
            </Text>
          </Flex>
          <Text my={6} px={3}>{`It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}</Text>
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
                  onClick={() => auth.signinWithGithub('/sites')}
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
                  <GithubIcon width={20} /> <Text ml={3}>Sign In with GitHub</Text>
                </Button>
                <Button
                  onClick={() => auth.signinWithGoogle('/sites')}
                  backgroundColor="white"
                  color="gray.900"
                  variant="outline"
                  fontWeight="medium"
                  mt={4}
                  _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                  }}
                >
                  <GoogleIcon width={20} /> <Text ml={3}>Sign In with Google</Text>
                </Button>
              </Flex>
            )
          }
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
        px={4}
      >
        
      </Box>
    </>
  )
}
