import { Button, Divider, Heading, Spacer, VStack } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { ChevronDownIcon } from "../../assets/ChevronDownIcon";
import SelectField from "./global/formikField/SelectField";
import SelectMenuField from "./global/formikField/SelectMenuField";

type Props = {};

export default function SelectFile({}: Props) {
   const [flag, setFlag] = useState(false);

   const options = [
      { label: "Niveau des joueurs", value: "" },
      { label: "Palier III (jusqu’à Argent I)", value: "Palier III" },
      { label: "Palier II (de Or IV jusqu’à Platine I)", value: "Palier II" },
      { label: "Palier I (à partir de Diamant IV)", value: "Palier I" },
   ];

   const optionsMenuSelect = [
      { label: "Niveau des joueurs", value: "", displayValueWhenIsSelected: "" },
      { label: "Palier III (jusqu’à Argent I)", value: "Palier III", displayValueWhenIsSelected: "Pallier III" },
      {
         label: "Palier II (de Or IV jusqu’à Platine I)",
         value: "Palier II",
         displayValueWhenIsSelected: "Pallier II",
      },
      { label: "Palier I (à partir de Diamant IV)", value: "Palier I", displayValueWhenIsSelected: "Pallier I" },
   ];

   const submit = async (values: any, { setSubmitting }: FormikHelpers<any>): Promise<void> => {
      console.log(values);
   };

   return (
      <>
         <Heading size="2xl">Select Chakra Ui</Heading>

         <VStack spacing={5} my="5" w="100%">
            <Formik initialValues={{ select1: "", selectMenu: "" }} onSubmit={submit}>
               {({ setFieldValue }) => (
                  <Form>
                     <VStack spacing={4} align="stretch" w="70vw" maxW="500px">
                        {/* Pas ouf avec l'option 1 qui est vide */}
                        <SelectField name="select1" placeholder="select1" label="a" options={options} />

                        <SelectMenuField name="selectMenu" options={optionsMenuSelect} setFieldValue={setFieldValue} />

                        <Button type="submit" isDisabled>
                           Submit
                        </Button>
                     </VStack>
                  </Form>
               )}
            </Formik>
         </VStack>

         <Spacer />
         <Divider />
      </>
   );
}
