import { Flex, Stack, Text } from '@chakra-ui/react';
import LoginCard from './components/LoginCard';

const Login = () => {
  return (
    <Flex h='100vh' gap={24} justifyContent='center' alignItems='center'>
      <Stack maxW='510px'>
        <Text textStyle='logo'>facebook</Text>
        <Text textStyle='h07'>
          Facebook helps you connect and share with the people in your life.
        </Text>
      </Stack>
      <Stack>
        <LoginCard />
      </Stack>
    </Flex>
  );
};

export default Login;
