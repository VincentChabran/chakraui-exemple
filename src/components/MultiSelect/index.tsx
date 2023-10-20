import { Box, Divider, Flex, Heading, Image, Spacer, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MultiSelectReactClassiqe from "./MultiSelectReactClassiqe";
import MultiSelectMenuChakra from "./MultiSelectMenuChakra";
import MultiSelectWithButtonItem from "./withButton/MultiSelectWithButtonItem";
import MultiSelectMultiSectionWithButtonItem from "./withButton/MultiSelectMultiSectionWithButtonItem";

type Props = {};

export default function index({}: Props) {
   const [stateSelectWithButton, setStateSelectWithButton] = useState<string[]>(["16-18"]);
   const [stateSelectMultiSectionWithButton, setStateSelectMultiSectionWithButton] = useState<{
      [key: string]: string[] | null;
   }>({ lundi: ["soir"], mardi: ["matin"], mercredi: [] });

   // Pour log les valeurs selectionner du MultiSelectWithButtonItem
   // useEffect(() => console.log(stateSelectWithButton), [stateSelectWithButton]);

   // Pour log les valeurs selectionner du MultiSelectMultiSectionWithButtonItem
   // useEffect(() => console.log(stateSelectMultiSectionWithButton), [stateSelectMultiSectionWithButton]);

   return (
      <>
         <Heading size="2xl">Multi Select</Heading>

         <Box p="5" px={{ base: "0", sm: "4em" }}>
            <VStack spacing={5} w="100%">
               <Box>
                  <Heading size="xl">Chakra</Heading>
                  <Flex gap="4" wrap="wrap" justify={"center"}>
                     <MultiSelectMenuChakra labelButton="Chakra Menu" options={options} leftIcon={<Image src="" />} />

                     <MultiSelectWithButtonItem
                        labelButton="Chakra with Button"
                        options={options}
                        defaultValues={stateSelectWithButton}
                        onChange={(values) => setStateSelectWithButton(values)}
                     />

                     <MultiSelectMultiSectionWithButtonItem
                        labelButton="Chakra multi Section with Button"
                        optionsSections={multiOptionsSections}
                        defaultValues={stateSelectMultiSectionWithButton}
                        onChange={(values) => setStateSelectMultiSectionWithButton(values)}
                     />
                  </Flex>
               </Box>

               <Box>
                  <Heading size="xl">React</Heading>
                  <MultiSelectReactClassiqe
                     label="Horaires"
                     options={[
                        { label: "14h - 16h", value: "14-16" },
                        { label: "16h - 18h", value: "16-18" },
                        { label: "18h - 20h", value: "18-20" },
                        { label: "20h - 22h", value: "20-22" },
                     ]}
                     leftIcon={<Image src="" />}
                  />
               </Box>
            </VStack>
         </Box>

         <Stack spacing={1} h="100px" w="100vw">
            <Progress colorScheme="green" size="sm" value={60} borderRadius={"20"} />
            <Progress colorScheme="red" size="sm" value={50} borderRadius={"20"} />
            <Progress colorScheme="green" size="sm" value={40} borderRadius={"20"} />
            <Progress colorScheme="green" size="sm" value={90} borderRadius={"20"} />
            <Progress colorScheme="green" size="sm" value={44} borderRadius={"20"} />
         </Stack>

         <Spacer />
         <Divider />
      </>
   );
}

const options = [
   { label: "16h - 18h", value: "16-18" },
   { label: "18h - 20h", value: "18-20" },
   { label: "20h - 22h", value: "20-22" },
];

const multiOptionsSections = [
   {
      nameSection: "lundi",
      options: [
         { label: "Matin", value: "matin" },
         { label: "Après-Midi", value: "apres-midi" },
         { label: "Soir", value: "soir" },
      ],
      headerSection: "test header section",
   },
   {
      nameSection: "mardi",
      options: [
         { label: "Matin", value: "matin" },
         { label: "Après-Midi", value: "apres-midi" },
         { label: "Soir", value: "soir" },
      ],
      headerSection: <Image src="./assets/eren.jpg" w="30px" h="30px" />,
   },
   {
      nameSection: "mercredi",
      options: [
         { label: "Matin", value: "matin" },
         { label: "Après-Midi", value: "apres-midi" },
         { label: "Soir", value: "soir" },
      ],
   },
];
