import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
  useDisclosure 
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/firestore';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';

export const AddSiteModal = ({ children }) => {
  const auth = useAuth();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleSubmit, register } = useForm();
  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createAt: new Date().toISOString(),
      name,
      url
    }
    const { id } = createSite(newSite);
    onClose();
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    mutate(
      '/api/sites',
      async (data) => ({
        sites: [{ id, ...newSite }, ...data.sites]
      }),
      false
    )
  };

  return (
    <>
      <Button onClick={onOpen}>{ children }</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My site"
                name="name"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button
              colorScheme="teal"
              type="submit"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
