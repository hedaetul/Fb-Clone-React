import {
  Button,
  Card,
  Divider,
  FormControl,
  Input,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Register from '../register/Register';

const LoginCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userCredentials, setUserCredentials] = useState({});

  const handleCredentials = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
    console.log(userCredentials);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(auth);

    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Card px='1rem' pt='1rem' pb='2rem' w='390px' h='350px'>
        <Stack spacing={4}>
          <FormControl>
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
            <Link color='blue.50'>Forgotten password</Link>
          </Stack>
          <Divider onClick={onOpen} size='2px' color='black' />
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
