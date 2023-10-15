import { FormControl, FormErrorMessage, Switch } from "@chakra-ui/react";
import { Field, FieldHookConfig, useField } from "formik";

export type InputFieldProps = FieldHookConfig<string> & {
   variant?: string;
   size?: string | {};
   colorScheme?: string;
   onChange?: () => void;
};

const SwitchField = ({ variant, size, colorScheme, onChange, ...props }: InputFieldProps) => {
   const [field, meta] = useField(props);

   const hasError = Boolean(meta.touched && meta.error);

   return (
      <FormControl isInvalid={hasError} w="auto">
         <Field
            as={Switch}
            id={field.name}
            defaultValue={field.value}
            isChecked={meta.value}
            {...field}
            variant={variant}
            size={size}
            colorScheme={colorScheme}
            onChange={(e: any) => {
               field.onChange(e);
               onChange?.();
            }}
         />

         <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
   );
};

export default SwitchField;
