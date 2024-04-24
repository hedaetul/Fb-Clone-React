import {
  Box,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageDots, BiSearch } from 'react-icons/bi';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { MdOutlineGroups, MdOutlineOndemandVideo } from 'react-icons/md';

const Navbar = () => {
  return (
    <Box bg='#C4DFDF' px='0.25rem' py='0.5rem' boxShadow='lg'>
      <Grid gridTemplateColumns='1fr 1fr 1fr' justify='space-between'>
        <HStack maxW='455px'>
          <Image src='/konoha_icon.png' w='50px' />
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <BiSearch color='gray.300' />
            </InputLeftElement>
            <Input
              bg='#F8F6F4'
              type='text'
              placeholder='Search KonohaBook'
              rounded='full'
              maxW='220px'
            />
          </InputGroup>
        </HStack>
        <HStack w='455px' justify='space-between'>
          <Icon as={AiOutlineHome} />
          <Icon as={LiaUserFriendsSolid} />
          <Icon as={MdOutlineOndemandVideo} />
          <Icon as={MdOutlineGroups} />
        </HStack>
        <HStack justify='end' spacing='0.75rem'>
          <Box
            p='0.5rem'
            bg='#E3F4F4'
            rounded='full'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Icon as={BsFillGrid3X3GapFill} boxSize='1.5rem' />
          </Box>
          <Box
            p='0.5rem'
            bg='#E3F4F4'
            rounded='full'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Icon as={BiMessageDots} boxSize='1.5rem' />
          </Box>
          <Box
            p='0.5rem'
            bg='#E3F4F4'
            rounded='full'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Icon as={IoIosNotificationsOutline} boxSize='1.5rem' />
          </Box>
          <Image src='' />
        </HStack>
      </Grid>
    </Box>
  );
};

export default Navbar;
