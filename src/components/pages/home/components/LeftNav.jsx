import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { FaUserFriends } from 'react-icons/fa';
import {
  MdOutlineGroups,
  MdOutlineOndemandVideo,
  MdOutlineSave,
} from 'react-icons/md';
import { RiMemoriesFill } from 'react-icons/ri';

const leftNavItems = [
  {
    name: 'Friends',
    icon: FaUserFriends,
  },
  {
    name: 'Memories',
    icon: RiMemoriesFill,
  },
  {
    name: 'Video',
    icon: MdOutlineOndemandVideo,
  },
  {
    name: 'Saved',
    icon: MdOutlineSave,
  },
  {
    name: 'Groups',
    icon: MdOutlineGroups,
  },
];

const LeftNav = () => {
  return (
    <Box>
      {leftNavItems.map((item) => (
        <Stack
          rounded='md'
          bg='#E3F4F4'
          _hover={{ bg: 'blackAlpha.50' }}
          key={item.name}
          ml='0.5rem'
          w='340px'
          px='0.5rem'
          py='0.5rem'
        >
          <HStack>
            <Icon as={item.icon} />
            <Text>{item.name}</Text>
          </HStack>
        </Stack>
      ))}
    </Box>
  );
};

export default LeftNav;
