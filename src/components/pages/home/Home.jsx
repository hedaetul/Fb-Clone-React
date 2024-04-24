import { Box, Button, Grid } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import LeftNav from './components/LeftNav';
import PostCards from './components/PostCards';
import RightNav from './components/RightNav';
import TopNav from './components/TopNav';

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
      <TopNav />
      <Grid w='100vw' h='100vh' bg='#E3F4F4' gridTemplateColumns='1fr 1fr 1fr'>
        <LeftNav />
        <PostCards />
        <RightNav />
      </Grid>
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
