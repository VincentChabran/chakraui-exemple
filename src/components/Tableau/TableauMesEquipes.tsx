import {
   Box,
   Button,
   Heading,
   HStack,
   Image,
   Table,
   TableCaption,
   TableContainer,
   Tbody,
   Td,
   Text,
   Tfoot,
   Th,
   Thead,
   Tr,
   VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { acSecondaryAction, acTertiaryAction, acTextWhite } from "../../themes/constants/arcadiumColors";
import PlayerColumnDisplay from "./subCoponents/PlayerColumnDisplay";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

type Props = {};

export default function TableauMesEquipes({}: Props) {
   const horaire = {
      lundi: ["Après-Midi", "Matin"],
      mardi: null,
      mercredi: ["Soir", "Après-Midi"],
      jeudi: null,
      vendredi: ["Matin", "Soir"],
   };
   const entriesHoraire = Object.entries(horaire);

   const [showTab, setShowTab] = useState(true);

   return (
      <Box>
         <Heading size="lg" lineHeight={"20px"}>
            Tableau variant Arcadium
         </Heading>

         <TableContainer borderRadius={"10px"} w="95vw">
            <Table variant="arcadium">
               <Thead>
                  <Tr>
                     <Th>Elo Moyen</Th>
                     <Th>Nom de l’équipe</Th>
                     <Th>
                        <Image src="" minW="30px" minH="30px" w="30px" h="30px" m="auto" />
                     </Th>
                     <Th>
                        <Image src="" minW="30px" minH="30px" w="30px" h="30px" m="auto" />
                     </Th>
                     <Th>
                        <Image src="" minW="30px" minH="30px" w="30px" h="30px" m="auto" />
                     </Th>
                     <Th>
                        <Image src="" minW="30px" minH="30px" w="30px" h="30px" m="auto" />
                     </Th>
                     <Th>
                        <Image src="" minW="30px" minH="30px" w="30px" h="30px" m="auto" />
                     </Th>
                     <Th>Entraînements</Th>
                     <Th onClick={() => setShowTab(!showTab)} px="20" cursor={"pointer"}>
                        {!showTab && <ChevronDownIcon />}

                        {showTab && <ChevronUpIcon />}
                     </Th>
                  </Tr>
               </Thead>

               {/* Remplacer les infos avec les infos des teams */}
               <Tbody display={showTab ? "table-row-group" : "none"}>
                  <Tr h="12px" bg="unset"></Tr>
                  <Tr>
                     <Td>
                        <Image src="" maxW="62px" maxH="70px" m="auto" />
                     </Td>
                     <Td>Equipe 1</Td>

                     {/* Fournir le tableau de joueurs */}
                     {[0, 1, 2, 3, 4].map((el, i) => (
                        <Td key={`${i}`}>
                           <PlayerColumnDisplay />
                        </Td>
                     ))}

                     <Td>
                        {/* Horaires entraînements */}
                        <VStack>
                           {entriesHoraire
                              // Jour = [[Key], [Valeur]]
                              .filter((jour) => jour[1])
                              .map((jour) => {
                                 let res = "";

                                 if (jour[1]?.includes("Matin")) res = "Matin";
                                 if (jour[1]?.includes("Après-Midi"))
                                    res = res.length ? `${res}, Après-Midi` : "Après-Midi";

                                 if (jour[1]?.includes("Soir")) res = res.length ? `${res}, Soir` : "Soir";

                                 return (
                                    <HStack key={`Horaire entraînements jour ${jour[0]}`}>
                                       <Text variant="tags" color={acTextWhite} fontWeight="400" fontSize={"12px"}>
                                          {/* Ecrie le jour avec le premier lettre en Majuscule */}
                                          {jour[0].charAt(0).toUpperCase() + jour[0].slice(1)} : {res}
                                       </Text>
                                    </HStack>
                                 );
                              })}
                        </VStack>
                     </Td>

                     <Td>
                        <Button
                           borderRadius="full"
                           p="0"
                           border="1px solid rgba(108, 119, 163, 1)"
                           bg="#565A78"
                           size="sm"
                        >
                           test
                        </Button>
                     </Td>
                  </Tr>

                  <Tr h="12px" bg="unset"></Tr>
               </Tbody>

               {/* <Tfoot>
                  <Tr>
                     <Th>To convert</Th>
                     <Th>into</Th>
                     <Th isNumeric>multiply by</Th>
                  </Tr>
               </Tfoot> */}
            </Table>
         </TableContainer>
      </Box>
   );
}
