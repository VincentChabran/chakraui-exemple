import { Box, Divider, Heading, Spacer, VStack } from "@chakra-ui/react";
import SimpleTable from "./SimpleTable";
import StripedTable from "./StripedTable";
import TableauMesEquipe from "./TableauMesEquipes";

type Props = {};

export default function index({}: Props) {
   return (
      <>
         <Heading size="2xl">Tableau</Heading>

         <VStack spacing={10} w="100%">
            <SimpleTable />

            <StripedTable />

            <TableauMesEquipe />
         </VStack>

         <Spacer />
         <Divider />
      </>
   );
}
