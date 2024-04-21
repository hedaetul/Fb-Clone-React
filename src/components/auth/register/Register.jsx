import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '/src/config/firebase.js';

const Register = ({ isOpen, onOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [error, setError] = useState('');
  const [userCredentials, setUserCredentials] = useState({});
  const toast = useToast();

  const handleCredentials = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
    setError('');
    console.log(userCredentials);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
    onClose();
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top-right'
    });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                type='email'
                name='email'
                ref={initialRef}
                placeholder='Enter Your Email...'
                onChange={(e) => handleCredentials(e)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                name='password'
                placeholder='New Password'
                onChange={(e) => handleCredentials(e)}
              />
            </FormControl>
          </ModalBody>
          {error && (
            <Text
              color='red'
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              {error}
            </Text>
          )}
          <ModalFooter>
            <Button
              onClick={(e) => handleSignup(e)}
              bg='green.50'
              _hover={{ bg: 'green.60' }}
              mr={3}
            >
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
