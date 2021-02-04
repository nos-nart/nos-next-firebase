import React from 'react';
import { mutate } from 'swr';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';

import { deleteFeedback } from '@/lib/firestore';
import { useAuth } from '@/lib/auth';
import { DeleteIcon } from '@chakra-ui/icons';

export const DeleteFeedbackButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = React.useState();
  const cancelRef = React.useRef();
  const { user } = useAuth();

  const onClose = () => setIsOpen(false);
  const onDelete = () => {
    deleteFeedback(feedbackId);
    mutate(
      ['/api/feedbacks', user._lat],
      async (data) => {
        return {
          feedbacks: data.feedbacks.filter(
            (feedback) => feedback.id !== feedbackId
          )
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        aria-label="Delete feedback"
        variant="ghost"
        size="sm"
        colorScheme="red"
        onClick={() => setIsOpen(true)}
      >
        <DeleteIcon w={5} h={5} />
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Feedback
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button fontWeight="bold" colorScheme="red" onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
