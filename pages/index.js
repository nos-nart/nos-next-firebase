import React from 'react';
import { useAuth } from '@/lib/auth';
import { Logo } from '@/components/svgs';
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" py direction="column" maxW="700px" margin="0 auto">
          <Logo />
        </Flex>
        <div className="app">
          { 
            auth?.user
              ? <button onClick={() => auth.signout()}>sign out</button>
              : <button onClick={() => auth.signinWithGithub()}>log in</button>
          }
          <p>{auth?.user?.email}</p>
        </div>
      </Box>
    </>
  )
}
