import { FormControl, FormLabel, FormErrorMessage, Textarea, Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Field, FieldHookConfig, useField } from "formik";

export type InputFieldProps = FieldHookConfig<string> & {
   label?: string;
   placeholder?: string;
   variantLabel?: string;
   isRequired?: boolean;
   hidden?: boolean;
   icon?: ReactJSXElement;
   w?: string;
   variant?: string;
   size?: string | {};
};

const TextAreaField = ({
   label,
   placeholder,
   isRequired,
   hidden,
   icon,
   variant,
   size,
   w,
   variantLabel = "bodyNormalArcadium",
   ...props
}: InputFieldProps) => {
   const [field, meta] = useField(props);

   const hasError = Boolean(meta.touched && meta.error);

   return (
      <FormControl isInvalid={hasError} w={w} hidden={hidden}>
         {label && (
            <FormLabel htmlFor={field.name} m="0" variant={variantLabel} pl={0}>
               {label.charAt(0).toUpperCase() + label.slice(1)}
               {isRequired && (
                  <Text as="span" pl="2" color="red.300" display="inline">
                     *
                  </Text>
               )}
            </FormLabel>
         )}

         <Textarea id={field.name} {...field} placeholder={placeholder} />

         <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
   );
};

export default TextAreaField;
