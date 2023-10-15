import { Divider, Heading, Spacer, Text } from "@chakra-ui/react";

const TextFile = () => {
   return (
      <>
         <Heading as="h1" size="4xl">
            4xl Title Lorem ipsum dolor sit.
         </Heading>
         <Heading as="h2" size="3xl">
            3xl Title Lorem ipsum dolor sit.
         </Heading>
         <Heading as="h3" size="2xl">
            2xl Title Lorem ipsum dolor sit.
         </Heading>
         <Heading as="h2" size="xl">
            xl Title Lorem ipsum dolor sit.
         </Heading>
         <Heading as="h3" size="lg">
            lg Title Lorem ipsum dolor sit.
         </Heading>

         <Text fontSize={["xl", "xl", "2xl"]}>XL Text Lorem ipsum dolor sit.</Text>
         <Text fontSize="lg">LG Text Lorem ipsum dolor sit.</Text>
         <Text fontSize="md">Md Text Lorem ipsum dolor sit.</Text>
         <Text fontSize="sm">Sm Text Lorem ipsum dolor sit.</Text>

         <Spacer />
         <Divider />
      </>
   );
};

export default TextFile;
