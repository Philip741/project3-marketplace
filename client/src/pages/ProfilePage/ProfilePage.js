// import classes from './ProfilePage.module.css';
// import { Fragment } from 'react';
// import tempbackground from './profilePage_header.jpg';

// function ProfilePage() {
//   return (
//     <Fragment>

//       <header className={classes['profile-header__temp']}>
//         <div className={classes['profile-header__temp__flexDiv']}>
//           <div className={classes['profile-header__temp__backgroundder__temp']}>
//             <img src={tempbackground} alt="" />
//           </div>
//           <h2>HELLO: DYNAMIC NAME</h2>
//         </div>
//       </header>
//       <main className={classes['profile-main']}>
//         <div>
//           <p>Don't Know Yet</p>
//         </div>
//         <section>
//           <div>
//             <p>display items for sale</p>
//           </div>
//         </section>
//       </main>
//     </Fragment>
//   );
// }

// export default ProfilePage;

import {
  IconButton,
  Flex,
  Text,
  Grid,
  GridItem,
  Container,
  Box,
  Heading,
  Spacer,
  Table,
  Tr,
  Th,
  Td,
  Tfoot,
  Tbody,
  TableCaption,
  Thead,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import ProfileNav from '../../components/profileNav/profileNav';

import { QUERY_USER_AND_ITEMS } from '../../utils/queries';
import { useCurrentUserContext } from '../../context/auth-context';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export default function Header(props) {
  const { user } = useParams();
  console.log('**USER**', user);

  const { loading, data } = useQuery(QUERY_USER_AND_ITEMS, {
    variables: { username: user },
  });

  // const allData = {
  //   loading,
  //   data,
  // };

  console.log(data);
  console.log(data.user.email);

  const userDetails = {
    username: 'Test User',
  };

  const items = [
    { Category: 'Furniture', Name: 'Yellow Chair', Price: 30 },
    { Category: 'Furniture', Name: 'Couch', Price: 500 },
    { Category: 'Furniture', Name: 'End Table', Price: 50 },
    { Category: 'Furniture', Name: 'Lamp', Price: 40 },
  ];

  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} bg="papayawhip">
        <GridItem colSpan={2} h="20">
          <Text m={2} alignItems="center" fontSize="3xl">
            {' '}
            Marketocracy User Profile
          </Text>
        </GridItem>
        <GridItem colStart={6} colEnd={6} h="20">
          <ProfileNav />
        </GridItem>
      </Grid>
      <Spacer />
      <Container m={5} borderWidth="2px" w={'500px'} maxW="container.sm">
        <Flex mt={2}>
          <Box w={'150px'} borderWidth="2px" p="2" bg="gray.100">
            <Text mr={4} size="md">
              Username
            </Text>
          </Box>

          <Box p="2" textAlign={'center'}>
            <Text>{data.user.username}</Text>
          </Box>
        </Flex>
        <Flex mt={1}>
          <Box w={'150px'} borderWidth="2px" p="2" bg="gray.100">
            <Text mr={4} size="md">
              Email
            </Text>
          </Box>

          <Box p="2" textAlign={'center'}>
            <Text>{data.user.email}</Text>
          </Box>
        </Flex>
        <Heading mt={10}>For Sale Items</Heading>
        <Table mt={10} variant="simple">
          <TableCaption>
            * Items in process of purchase do not show here
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => {
              return (
                <Tr>
                  <Td>{item.Category}</Td>
                  <Td>{item.Name}</Td>
                  <Td isNumeric>{item.Price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </div>
  );
}
