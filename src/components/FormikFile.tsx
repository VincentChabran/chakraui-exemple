import {
   Button,
   Center,
   Divider,
   Heading,
   HStack,
   IconButton,
   Image,
   Spacer,
   useColorModeValue,
   VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as yup from "yup";
import InputFileReturnPreviewPath from "./global/formikField/InputFileReturnPreviewPath";
import InputFileWithPreviewField from "./global/formikField/InputFileWithPreviewField";
import InputField from "./global/formikPourLaPresentation/InputField";
import InputPassword from "./global/formikPourLaPresentation/InputPassword";

const schema = yup.object().shape({
   name: yup.string().required("Nom requis..."),
   password: yup.string().required("Mot de passe requis..."),
});

const variantInput = [
   "outline",
   "outlineCustom",
   "outlineCustomFocus",
   "flushed",
   "flushedCustom",
   "filled",
   "unstyled",
];

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const FormikFile = ({ isForUpdate }: Props) => {
   const schemaYupExemple = yup.object().shape({
      nomDuPoste: yup.string().required("Champ requis"),
      ville: yup.string().required("Champ requis"),
      domaineActivite: yup
         .number()
         .min(1, "La valeur minimum est de 1")
         .max(4, `La valeur maximum est de ${4}`)
         .required("Champs requis")
         .typeError(`La valeur dois étre entre 01 et ${4}`),
      emailContact: yup.string().email("Format non valide pour un email...").required("Email requis..."),
      dateDebut: yup
         .date()
         .typeError("Format non valide pour une date")
         .min("2000-01-25", "Date trop petite")
         .required("Champ requis"),
      descriptionProfilCandidat: yup.string().required("Champ requis"),
      file: isForUpdate
         ? yup
              .mixed()
              // @ts-ignore
              .test("fileSize", "File too large", (value) => (value ? value.size <= 7000000 : true))
              .test("fileFormat", "Unsupported Format", (value) =>
                 // @ts-ignore
                 value ? SUPPORTED_FORMATS.includes(value.type) : true
              )
         : yup
              .mixed()
              // @ts-ignore
              .test("fileSize", "File too large", (value) => (value ? value.size <= 7000000 : true))
              .test("fileFormat", "Unsupported Format", (value) =>
                 // @ts-ignore
                 value ? SUPPORTED_FORMATS.includes(value.type) : true
              )
              .required("Logo requis"),
   });

   const [image, setImage] = useState("");

   const formikButton = useColorModeValue("blackAlpha", "whiteAlpha");

   // Formulaire input change Name
   const [variantName, setVariantName] = useState("outlineCustom");

   const nameChangeClick = (leftOrRight: string): void => {
      const i = variantInput.indexOf(variantName);

      if (leftOrRight === "left") {
         if (i === 0) setVariantName(variantInput[variantInput.length - 1]);
         else setVariantName(variantInput[i - 1]);
      }
      if (leftOrRight === "right") {
         if (i === variantInput.length - 1) setVariantName(variantInput[0]);
         else setVariantName(variantInput[i + 1]);
      }
   };

   // Variant Password
   const [variantPwd, setVariantPwd] = useState("outlineCustom");

   const pwdChangeClick = (leftOrRight: string) => {
      const i = variantInput.indexOf(variantPwd);

      if (leftOrRight === "left") {
         if (i === 0) setVariantPwd(variantInput[variantInput.length - 1]);
         else setVariantPwd(variantInput[i - 1]);
      }
      if (leftOrRight === "right") {
         if (i === variantInput.length - 1) setVariantPwd(variantInput[0]);
         else setVariantPwd(variantInput[i + 1]);
      }
   };

   return (
      <>
         <Heading size="2xl">Form</Heading>
         <Formik initialValues={{ name: "", password: "" }} onSubmit={console.log} validationSchema={schema}>
            {(formikProps) => (
               <Form>
                  <VStack spacing={4} align="stretch" w="70vw" maxW="500px">
                     <InputField label="Name" name="name" placeholder="Name" />

                     <InputPassword label="Password" name="password" placeholder="Password" />

                     <Button type="submit">Send</Button>
                  </VStack>
               </Form>
            )}
         </Formik>
         <Spacer />

         <Heading size="2xl">Form</Heading>
         <Formik initialValues={{ name2: "", password2: "" }} onSubmit={console.log}>
            {(formikProps) => (
               <Form>
                  <VStack spacing={4} align="stretch" w="70vw" maxW="500px">
                     <InputField label="Name2" name="name2" placeholder="Name2" variant="outlineCustom" />

                     <InputPassword
                        label="Password2"
                        name="password2"
                        placeholder="Password2"
                        variant="outlineCustom"
                     />

                     <Button type="submit" variant="outline" colorScheme={formikButton}>
                        Send
                     </Button>
                  </VStack>
               </Form>
            )}
         </Formik>
         <Spacer />

         <Heading size="2xl">Form</Heading>
         <Formik initialValues={{ name3: "", password3: "" }} onSubmit={console.log}>
            {({ setFieldValue }) => (
               <Form>
                  <VStack spacing={4} align="stretch" w="70vw" maxW="500px">
                     <HStack>
                        <IconButton
                           mt="5"
                           variant="ghost"
                           icon={<FaChevronLeft />}
                           aria-label="left name"
                           onClick={() => nameChangeClick("left")}
                        />
                        <InputField
                           label="Name3"
                           name="name3"
                           placeholder={variantName}
                           variant={variantName}
                           borderRadius="full"
                        />

                        <IconButton
                           top="3"
                           variant="ghost"
                           icon={<FaChevronRight />}
                           aria-label="Right name"
                           onClick={() => nameChangeClick("right")}
                        />
                     </HStack>

                     <HStack>
                        <IconButton
                           variant="ghost"
                           icon={<FaChevronLeft />}
                           aria-label="left password"
                           onClick={() => pwdChangeClick("left")}
                        />
                        <InputPassword
                           label="Password3"
                           name="password3"
                           placeholder={variantPwd}
                           variant={variantPwd}
                           borderRadius="full"
                        />
                        <IconButton
                           variant="ghost"
                           icon={<FaChevronRight />}
                           aria-label="Right password"
                           onClick={() => pwdChangeClick("right")}
                        />
                     </HStack>

                     {/* <InputFileField name="file" setFieldValue={setFieldValue} /> */}

                     <InputFileWithPreviewField name="file" setFieldValue={setFieldValue} />

                     <InputFileReturnPreviewPath
                        name="file2"
                        setFieldValue={setFieldValue}
                        // @ts-ignore
                        returnImgPath={(image) => {
                           setImage(image);
                        }}
                        buttonLabel="importer une image"
                     />

                     <Image src={image} />

                     <Center>
                        <Button type="submit" variant="outline" colorScheme={formikButton} borderRadius="full" w="78%">
                           Send
                        </Button>
                     </Center>
                  </VStack>
               </Form>
            )}
         </Formik>

         <Spacer />
         <Divider />
      </>
   );
};

export default FormikFile;

interface Props {
   isForUpdate?: boolean;
}
