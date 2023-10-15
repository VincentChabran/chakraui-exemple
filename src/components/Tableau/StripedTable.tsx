import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

type Props = {};

export default function StripedTable({}: Props) {
   return (
      <Box>
         <Heading size="lg" lineHeight={"20px"}>
            Tableau variant Striped
         </Heading>

         <TableContainer maxW="95vw">
            <Table variant="striped" colorScheme="orange">
               <TableCaption>Imperial to metric conversion factors</TableCaption>
               <Thead>
                  <Tr>
                     <Th>To convert</Th>
                     <Th>into</Th>
                     <Th isNumeric>multiply by</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  <Tr>
                     <Td>inches</Td>
                     <Td>millimetres (mm)</Td>
                     <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                     <Td>feet</Td>
                     <Td>centimetres (cm)</Td>
                     <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                     <Td>yards</Td>
                     <Td>metres (m)</Td>
                     <Td isNumeric>0.91444</Td>
                  </Tr>
               </Tbody>
               <Tfoot>
                  <Tr>
                     <Th>To convert</Th>
                     <Th>into</Th>
                     <Th isNumeric>multiply by</Th>
                  </Tr>
               </Tfoot>
            </Table>
         </TableContainer>
      </Box>
   );
}
