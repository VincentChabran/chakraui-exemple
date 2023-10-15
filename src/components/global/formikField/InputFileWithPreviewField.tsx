import { FormControl, FormLabel, FormErrorMessage, Text, Button, Image, VStack } from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";
import { useCallback, useRef, useState } from "react";

export type InputFieldProps = FieldHookConfig<string> & {
   setFieldValue: any;
   label?: string;
   placeholder?: string;
   isRequired?: boolean;
   imgPath?: string;
   imgWidth?: string | string[];
   imgHeight?: string | string[];
   buttonLabel?: string;
};

const InputFileWithPreviewField = ({
   label,
   placeholder,
   setFieldValue,
   isRequired,
   imgPath,
   imgWidth = "100px",
   imgHeight = "100px",
   buttonLabel = "Choose File",
   ...props
}: InputFieldProps) => {
   const [field, meta] = useField(props);
   const hasError = Boolean(meta.touched && meta.error);

   const inputRef = useRef<HTMLInputElement | null>();
   const [image, setImage] = useState(imgPath || "");

   // @ts-ignore
   const handleCreateBase64 = useCallback(async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      // @ts-ignore
      setImage(base64);
      e.target.value = "";
   }, []);

   // @ts-ignore
   const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader();
         if (!file) {
            alert("Select Img");
         } else {
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
               resolve(fileReader.result);
            };
         }
         fileReader.onerror = (error) => {
            reject(error);
         };
      });
   };

   return (
      <FormControl isInvalid={hasError} maxW="600px">
         {label && (
            <FormLabel htmlFor={field.name} mb="1" fontWeight="bold" fontSize="sm">
               {label.charAt(0).toUpperCase() + label.slice(1)}
               {isRequired && (
                  <Text as="span" pl="2" color="red.300" display="inline">
                     *
                  </Text>
               )}
            </FormLabel>
         )}

         <input
            id={field.name}
            type="file"
            onChange={(event) => {
               if (event.currentTarget.files) setFieldValue(field.name, event.currentTarget.files[0]);
               handleCreateBase64(event);
            }}
            style={{ display: "none" }}
            // @ts-ignore
            ref={inputRef}
         />

         <VStack>
            <Image src={image} w={imgWidth} h={imgHeight} objectFit={"cover"} />
            {/* Custom Me !! */}
            <Button onClick={() => inputRef?.current?.click()}>{buttonLabel}</Button>
         </VStack>

         <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
   );
};

export default InputFileWithPreviewField;
