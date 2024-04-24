import { Flex, Stack, Text } from '@chakra-ui/react';
import LoginCard from './LoginCard';

const Login = () => {
  return (
    <Flex 
      h='100vh'
      gap={{
        base: 12,
        lg: 24,
      }}
      justifyContent='center'
      alignItems='center'
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
    >
      <Stack maxW='510px'>
        <Text textStyle='logo'>konohabook</Text>
        <Text textStyle='h07'>
          konohabook helps you connect and share with the people in your life.
        </Text>
      </Stack>
      <Stack>
        <LoginCard />
      </Stack>
    </Flex>
  );
};

export default Login;
