import {
   Box,
   Button,
   DarkMode,
   Flex,
   LightMode,
   SimpleGrid,
   Text,
   useColorMode,
   useColorModeValue,
   VStack,
} from "@chakra-ui/react";

const TestRandom = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   const bg = useColorModeValue("red.500", "red.200");
   const color = useColorModeValue("white", "gray.800");

   return (
      <Flex my={"10em"} align="center" justify="center" flexDirection="column">
         <Box border="1px" boxSize="sm">
            <SimpleGrid minChildWidth="110px" spacing={2}>
               <Text bg="pink" w="100%" h="40px">
                  Hello
               </Text>

               <Text bg="pink" w="100%" h="40px">
                  Kingdom
               </Text>

               <Text bg="pink" w="100%" h="40px" fontWeight="bold">
                  Hearts
               </Text>

               <Text bg="pink" w="100%" h="40px">
                  Travers
               </Text>

               <Text bg="pink" w="100%" h="40px">
                  Town
               </Text>

               <Text bg="pink" w="100%" h="40px">
                  kh
               </Text>

               <Button>teso</Button>
               <Button>ff14</Button>
               <Button variant="custom">dofus</Button>
            </SimpleGrid>
         </Box>

         <VStack spacing={4}>
            <Box mt={10} bg={bg} color={color}>
               This box's style will change based on the color mode.
            </Box>
            <Button size="sm" onClick={toggleColorMode}>
               Toggle Mode
            </Button>

            <LightMode>
               <Button size="sm" colorScheme="blue">
                  Light Mode Always
               </Button>
            </LightMode>

            <DarkMode>
               <Button size="sm" colorScheme="blue">
                  Dark Mode Always
               </Button>
            </DarkMode>
         </VStack>
      </Flex>
   );
};

export default TestRandom;
