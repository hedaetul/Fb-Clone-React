import {
  Button,
  Card,
  Divider,
  FormControl,
  Input,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from '../register/Register';
import { auth } from '/src/config/firebase.js';

const LoginCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCredentials = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleResetPassword = () => {
    const email = prompt('pleas enter your email');
    sendPasswordResetEmail(auth, email);
    alert('Email sent! Check your inbox for password reset instructions.');
  };

  return (
    <>
      <Card px='1rem' pt='1rem' pb='2rem' w='390px' h='350px'>
        <Stack spacing={4}>
          <FormControl >
            <Input
              onChange={(e) => handleCredentials(e)}
              type='email'
              name='email'
              placeholder='Email address or phone number'
              h='50px'
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={(e) => handleCredentials(e)}
              type='password'
              name='password'
              placeholder='Password'
              h='50px'
            />
          </FormControl>
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
          <Button
            onClick={(e) => handleSignIn(e)}
            w='full'
            h='50px'
            bg='blue.50'
            _hover={{ bg: 'blue.40' }}
          >
            Login
          </Button>
          <Stack align='center'>
            <Text
              cursor='pointer'
              onClick={handleResetPassword}
              color='blue.50'
            >
              Forgotten password
            </Text>
          </Stack>
          <Divider size='2px' color='black' />
          <Button
            onClick={onOpen}
            bg='green.50'
            h='50px'
            _hover={{ bg: 'green.60' }}
          >
            Create new account
          </Button>
        </Stack>
      </Card>
      <Register isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default LoginCard;
