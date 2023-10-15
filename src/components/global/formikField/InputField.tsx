import { Input, FormControl, FormLabel, FormErrorMessage, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { FieldHookConfig, useField } from "formik";

export type InputFieldProps = FieldHookConfig<string> & {
   label?: string;
   placeholder?: string;
   type?: string;
   isRequired?: boolean;
   icon?: ReactJSXElement;
   variant?: string;
   variantLabel?: string;
   display?: string;
   w?: string;
   isDisabled?: boolean;
};

const InputField = ({
   label,
   placeholder,
   type = "text",
   isRequired,
   icon,
   variant,
   variantLabel = "bodyNormalArcadium",
   display,
   w,
   isDisabled,
   ...props
}: InputFieldProps) => {
   const [field, meta] = useField(props);

   const hasError = Boolean(meta.touched && meta.error);

   return (
      <FormControl isInvalid={hasError} w={w} display={display} isDisabled={isDisabled}>
         {label && (
            <FormLabel htmlFor={field.name} mb="1" variant={variantLabel}>
               {label.charAt(0).toUpperCase() + label.slice(1)}
               {isRequired && (
                  <Text as="span" pl="2" color="red.300" display="inline">
                     *
                  </Text>
               )}
            </FormLabel>
         )}

         <InputGroup>
            {icon && <InputLeftElement pointerEvents="none" children={icon} opacity={isDisabled ? 0.4 : 1} />}

            <Input type={type} id={field.name} placeholder={placeholder} variant={variant} {...field} />
         </InputGroup>

         <FormErrorMessage mb="2">{meta.error}</FormErrorMessage>
      </FormControl>
   );
};

export default InputField;
