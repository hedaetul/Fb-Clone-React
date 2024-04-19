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
import Register from '../register/Register';

const LoginCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card px='1rem' pt='1rem' pb='2rem' w='390px' h='350px'>
        <Stack spacing={4}>
          <FormControl>
            <Input placeholder='Email address or phone number' h='50px' />
          </FormControl>
          <FormControl>
            <Input type='password' placeholder='Password' h='50px' />
          </FormControl>
          <Button w='full' h='50px' bg='blue.50' _hover={{ bg: 'blue.40' }}>
            Login
          </Button>
          <Stack align='center'>
            <Link color='blue.50'>Forgotten password</Link>
          </Stack>
          <Divider onClick={onOpen} size='2px' color='black' />
          <Button onClick={onOpen} bg='green.50' h='50px' _hover={{ bg: 'green.60' }}>
            Create new account
          </Button>
        </Stack>
      </Card>
      <Register isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default LoginCard;
