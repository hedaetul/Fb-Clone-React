import { Box, Button } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';

const Home = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      Welcome to Home
      <Button
        onClick={() => {
          handleSignOut();
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Home;
