import { FormControl, FormLabel, FormErrorMessage, Select, Text } from "@chakra-ui/react";
import { Field, FieldProps, useField } from "formik";

export type SelectFieldProps = {
   name: string;
   label?: string;
   placeholder?: string;
   options: {
      value: string | number;
      label: string;
   }[];
   isDisabled?: boolean;
   isRequired?: boolean;
   onChange?: (selectedValue: string) => void;
};

// Ce select est mieux construit dans la forme et es plus flexible si on dosi modifier le style etc
export const SelectField = ({
   name,
   label,
   placeholder,
   options,
   isDisabled,
   isRequired,
   onChange,
}: SelectFieldProps) => {
   const [field, meta] = useField(name);

   const hasError = Boolean(meta.touched && meta.error);

   return (
      <FormControl isInvalid={hasError} maxW="600px">
         {label && (
            <FormLabel htmlFor={field.name} mb="1" pl={0} fontWeight="bold" fontSize="sm">
               {label.charAt(0).toUpperCase() + label.slice(1)}
               {isRequired && (
                  <Text as="span" pl="2" color="red.300" display="inline">
                     *
                  </Text>
               )}
            </FormLabel>
         )}

         <Field name={name}>
            {({ field, form }: FieldProps) => (
               <Select
                  id={field.name}
                  placeholder={placeholder}
                  value={field.value}
                  onChange={(e) => {
                     const selectedValue = e.target.value;
                     form.setFieldValue(field.name, selectedValue);
                     onChange?.(selectedValue);
                  }}
                  isDisabled={isDisabled}
                  _hover={{ cursor: "pointer" }}
               >
                  {options.map(({ value, label }) => (
                     <option key={value} value={value}>
                        {label}
                     </option>
                  ))}
               </Select>
            )}
         </Field>

         <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
   );
};
