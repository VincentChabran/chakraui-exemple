import {
   Button,
   Menu,
   MenuButton,
   MenuButtonProps,
   MenuDivider,
   MenuGroup,
   MenuItem,
   MenuItemOption,
   MenuList,
   MenuOptionGroup,
   Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { acTertiaryAction } from "../../themes/constants/arcadiumColors";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MultiSelectMenuChakra = (props: MultiSelectMenuProps): JSX.Element => {
   const { labelButton, options, defaultValues, buttonProps, leftIcon } = props;
   const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValues || []);

   return (
      <Menu closeOnSelect={false}>
         {({ onClose }) => (
            <>
               <MenuButton
                  // @ts-ignore <MenuButton> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                  // type="button"
                  as={Button}
                  leftIcon={leftIcon}
                  rightIcon={<ChevronDownIcon />}
                  variant="arcadiumMultiSelect"
                  colorScheme={acTertiaryAction}
                  // backgroundColor={selectedOptions.length ? "purple.200" : "white"}
                  // color={selectedOptions.length ? "purple.500" : "gray.600"}
                  // borderColor={selectedOptions.length ? "purple.200" : "yellow.300"}
                  // borderWidth={1}
                  {...buttonProps}
               >
                  {`${labelButton}${selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""}`}
               </MenuButton>
               <Stack>
                  <MenuList>
                     <MenuGroup title={undefined}>
                        <MenuItem
                           onClick={() => {
                              setSelectedOptions([]);
                              props.onChange?.([]);
                              // Have to close, otherwise the defaultValue won't be reset correctly and so the UI won't immediately show the menu item options unselected.
                              onClose();
                           }}
                        >
                           Clear all
                        </MenuItem>
                     </MenuGroup>

                     <MenuDivider />

                     <MenuOptionGroup
                        title={undefined}
                        defaultValue={selectedOptions}
                        value={selectedOptions}
                        type="checkbox"
                        // @ts-ignore Arguments type is just wrong upstream.
                        onChange={(values: string[]) => {
                           // Filter out empty strings, because, well, this component seems to add an empty string out of nowhere.
                           // Pour ne pas ajouter un string vide, donc d'une longeur inferieur ou égal à 0
                           setSelectedOptions(values.filter((_) => _.length));
                           props.onChange?.(values);
                        }}
                     >
                        {options.map((option) => {
                           return (
                              // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                              <MenuItemOption
                                 key={`multiselect-menu-${option.value}`}
                                 // @ts-ignore <MenuItemOption> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                                 type="button"
                                 value={option.value}
                              >
                                 {option.label}
                              </MenuItemOption>
                           );
                        })}
                     </MenuOptionGroup>
                  </MenuList>
               </Stack>
            </>
         )}
      </Menu>
   );
};

MultiSelectMenuChakra.displayName = "MultiSelectMenu";

export type MultiSelectMenuProps = {
   labelButton: string;
   options: {
      label: string;
      value: string;
   }[];
   defaultValues?: string[];
   leftIcon?: any;
   onChange?: (selectedValues: string[]) => void;
   buttonProps?: MenuButtonProps;
};

export default MultiSelectMenuChakra;
