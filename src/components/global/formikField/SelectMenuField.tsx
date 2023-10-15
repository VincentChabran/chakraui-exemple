import {
   Button,
   FormControl,
   FormErrorMessage,
   Menu,
   MenuButton,
   MenuItemOption,
   MenuList,
   MenuOptionGroup,
   Stack,
} from "@chakra-ui/react";
import { useField } from "formik";
import { useEffect, useState } from "react";
import InputField from "./InputField";

type Props = {
   name: string;
   setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
   options: {
      value: string;
      label: string;
      displayValueWhenIsSelected: string;
   }[];
   variant?: string;
   colorScheme?: string;
   flag?: boolean;
   onChange?: (selectedValues: string) => void;
   rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
};

export default function SelectMenuField({
   name,
   setFieldValue,
   options,
   variant,
   colorScheme,
   flag,
   onChange,
   rightIcon,
}: Props) {
   // Valeur selectionner
   const [value, setValue] = useState("");

   // La valeur qu'on affiche quand on selectionne une options
   const [displayValueWhenIsSelected, setDisplayValueWhenIsSelected] = useState("");

   const [_, meta] = useField(name);

   const hasError = Boolean(meta.touched && meta.error);

   // Pour metre la valeur a vide si le flag et sur false
   // ex : si la valeur d'un switch est sur false
   useEffect(() => {
      if (!flag) {
         setValue("");
         setDisplayValueWhenIsSelected("");
         setFieldValue(name, "");
      }
   }, [flag]);

   return (
      <>
         <Menu closeOnSelect={false}>
            <MenuButton
               as={Button}
               rightIcon={rightIcon}
               variant={variant}
               colorScheme={colorScheme}
               border={hasError ? "2px solid red" : ""}
               isDisabled={flag === false}
            >
               {options[0].label} {displayValueWhenIsSelected ? `(${displayValueWhenIsSelected})` : ""}
            </MenuButton>

            <Stack>
               <MenuList minWidth="240px" maxW="95vw" overflow={"scroll"}>
                  <MenuOptionGroup
                     type="radio"
                     value={value}
                     onChange={(value) => {
                        // @ts-ignore
                        setValue(value);
                        setFieldValue(name, value);

                        // @ts-ignore
                        onChange?.(value);
                     }}
                  >
                     {options.map(({ label, value, displayValueWhenIsSelected }, i) => (
                        <MenuItemOption
                           key={`Select options ${value}`}
                           value={value}
                           fontSize={{ base: "12px", md: "16px" }}
                           onClick={() => {
                              setDisplayValueWhenIsSelected(displayValueWhenIsSelected);
                           }}
                        >
                           {label}
                        </MenuItemOption>
                     ))}
                  </MenuOptionGroup>
               </MenuList>
            </Stack>
         </Menu>

         <InputField name={name} display="none" />
         <FormControl isInvalid={hasError}>
            <FormErrorMessage mb="2">{meta.error}</FormErrorMessage>
         </FormControl>
      </>
   );
}
