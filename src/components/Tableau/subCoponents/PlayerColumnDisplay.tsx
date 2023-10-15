import { Badge, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { acTextWhite, acDisabelTextGray } from "../../../themes/constants/arcadiumColors";

type Props = {
   joueur?: JoueurForGridInMesEquipes;
};

const joueurTest: JoueurForGridInMesEquipes = {
   elo: "",
   pseudo: "Joueur#4568",
   styleDeGameplay: ["Fun"],
   rolesJouable: [],
};

const styleDeGameplayAttendu = ["Fun", "Sérieux", "Compétitif"];

export default function PlayerColumnDisplay({ joueur = joueurTest }: Props) {
   const { elo, pseudo, styleDeGameplay, rolesJouable } = joueur;

   return (
      <Flex flexDir={"column"} gap="2">
         <HStack spacing={1} justify="center">
            {/* Reste a métre le path du élo actuel du joueur */}
            <Image src="" maxW="30px" maxH="35px" />

            <Text variant="tags" fontSize={"12px"} color="#CDD4E4">
               {pseudo}
            </Text>
         </HStack>

         <VStack spacing={1} align="stretch">
            {styleDeGameplayAttendu.map((el) => (
               <Badge
                  key={`Badge for mes Equipes ${el}`}
                  variant="arcadium"
                  colorScheme={styleDeGameplay.includes(el) ? acTextWhite : acDisabelTextGray}
               >
                  {el}
               </Badge>
            ))}
         </VStack>

         <HStack mt="2" justify="center">
            {/* Reste a faire le chemin des roles possible */}
            <Image src="" maxW="26px" maxH="26px" />
            <Image src="" maxW="18px" maxH="18px" />
         </HStack>
      </Flex>
   );
}

interface JoueurForGridInMesEquipes {
   elo: string;
   pseudo: string;
   styleDeGameplay: string[];
   rolesJouable: string[];
}
