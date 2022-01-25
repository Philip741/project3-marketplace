import classes from './MainSection.module.css';
import SaleItems from '../SaleItems/SaleItems';
import Banner from '../Banner/Banner';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  IconButton,
  useColorMode,
  VStack,
  StackDivider,
  Box,
} from '@chakra-ui/react';
// import Aside from '../Aside/Aside';
// import Banner from '../Banner/Banner';

function MainSection(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log('main section data +++', props.loadAllQuery);
  return (
    <main className={classes.main}>
      <div>
        <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
      </div>
      {/* Aside section */}
      <div className={classes.aside}>
        <div className={classes.asideTitle}>Categories</div>

        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="left"
        >
          <Box h="40px" bg="green.100" shadow="md">
            Automotive
          </Box>
          <Box h="40px" bg="green.200" shadow="md">
            Furniture
          </Box>
          <Box h="40px" bg="green.300" shadow="md">
            Sporting Goods
          </Box>
        </VStack>
      </div>
      <div className={classes.banner}>
        <Banner />
      </div>

      <div className={classes.automotive}>
        <div className={classes.category}>
          <h1>Today's Hot Deals!</h1>
        </div>

        <SaleItems saleItems={props.loadAllQuery} />
      </div>
    </main>
  );
}

export default MainSection;
