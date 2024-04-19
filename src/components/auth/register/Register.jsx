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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import auth from '/src/config/firebase.js';

const Register = ({ isOpen, onOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userCredentials, setUserCredentials] = useState({});

  console.log(auth);

  const handleCredentials = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    console.log(userCredentials);
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

          <ModalFooter>
            <Button bg='green.50' _hover={{ bg: 'green.60' }} mr={3}>
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
