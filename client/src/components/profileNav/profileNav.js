import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiChevronDown, FiBell } from 'react-icons/fi';

import Auth from '../../utils/auth';

export default function ProfileNav() {
  const logoutHandler = (e) => {
    e.preventDefault();

    Auth.logout();
  };

  return (
    <HStack spacing={{ base: '0', md: '6' }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<FiBell />}
      />
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack spacing="4">
              <Avatar
                size="md"
                src={
                  'https://storage.googleapis.com/project3-marketplace/sky-background.png'
                }
              />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="lg">User Name</Text>
                <Text fontSize="md" color="gray.600">
                  Normal User
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList fontSize="lg" bg="white" borderColor="gray.200">
            <MenuItem>Profile</MenuItem>
            <MenuDivider />
            <MenuItem onClick={logoutHandler}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}
