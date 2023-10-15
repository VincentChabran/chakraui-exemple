import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
   Box,
   Divider,
   Heading,
   Input,
   InputGroup,
   InputLeftElement,
   InputRightElement,
   Spacer,
   Stack,
} from "@chakra-ui/react";

const InputFile = () => {
   return (
      <>
         <Heading as="h2" size="2xl">
            Input Field
         </Heading>
         <Box w="90vw" p="5" px="4em">
            <Stack spacing={3} my="5" align="center">
               <Input variant="outline" placeholder="Outline" /> // fontFamily="mono"
               <Input variant="outline" placeholder="Outline Full" borderRadius="full" /> // fontFamily="mono"
               <Input variant="outlineCustom" placeholder="Outline Custom" />
               <Input variant="outlineCustomFocus" placeholder="Outline Custom Focus Change" />
               {/*  */}
               <Input variant="flushed" placeholder="Flushed" focusBorderColor="gray.400" />
               <Input variant="flushedCustom" placeholder="Flushed Custom" />
               {/*  */}
               <Input variant="filled" placeholder="Filled" focusBorderColor="gray.400" />
               <Input variant="unstyled" placeholder="Unstyled" />
               {/*  */}
               <InputGroup maxW="600px">
                  <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                  <Input type="email" placeholder="Mail" />
               </InputGroup>
               <InputGroup maxW="600px">
                  <Input type="tel" placeholder="Phone number" />
                  <InputRightElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
               </InputGroup>
            </Stack>
         </Box>

         <Spacer />
         <Divider />
      </>
   );
};

export default InputFile;
