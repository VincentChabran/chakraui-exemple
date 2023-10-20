import { Box, Divider, Flex, Heading, Progress, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { ButtonColorModoSwitcher } from "./components/global/ButtonColorModoSwitcher";
import TextFile from "./components/TextFile";
import InputFile from "./components/InputFile";
import FormikFile from "./components/FormikFile";
import ButtonFile from "./components/ButtonFile";
import SelectFile from "./components/SelectFile";
import RadioFile from "./components/RadioFile";
import MultiSelectFile from "./components/MultiSelect";
import TableauFile from "./components/Tableau";

function App() {
   return (
      <Box zIndex="100" position="sticky" top="0">
         <VStack>
            <ButtonColorModoSwitcher w="100%" _hover={{ bg: useColorModeValue(`gray.100`, `gray.900`) }} />
         </VStack>

         <Flex justifyContent="center" m={4} fontFamily="mono">
            <VStack textAlign="center" spacing={5} position="relative">
               <Heading size="3xl">Chakra Ui</Heading>
               <Divider />

               {/* <NavBar /> */}

               <TextFile />

               <InputFile />

               <FormikFile />

               <ButtonFile />

               <RadioFile />

               <SelectFile />

               <MultiSelectFile />

               <TableauFile />

               <Stack spacing={1} h="100px" w="100vw">
                  <Progress colorScheme="green" size="sm" value={60} borderRadius={"20"} />
                  <Progress colorScheme="red" size="sm" value={50} borderRadius={"20"} />
                  <Box>
                     <Text>Non</Text>
                  </Box>
               </Stack>
            </VStack>
         </Flex>
      </Box>
   );
}

export default App;
