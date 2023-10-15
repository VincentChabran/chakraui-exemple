import { Button, Center, Menu, MenuButton, MenuButtonProps, MenuList, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { acPrimaryAction, acTertiaryAction } from "../../../themes/constants/arcadiumColors";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MultiSelectWithButtonItem = (props: MultiSelectMenuProps): JSX.Element => {
   const {
      labelButton,
      options,
      headerSection,
      defaultValues,
      leftIcon,
      buttonProps,
      variantMainButton = "arcadiumMultiSelect",
      variantOptionButton = "arcadiumMultiSelectItemButton",
   } = props;
   // State pour sauvegarder les options selectionner
   const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultValues || []);

   // Pour faire remonter les options selectionner
   useEffect(() => {
      props.onChange?.(selectedOptions);
   }, [selectedOptions]);

   return (
      <Menu closeOnSelect={false}>
         {({ onClose }) => (
            <>
               <MenuButton
                  as={Button}
                  leftIcon={leftIcon}
                  rightIcon={<ChevronDownIcon />}
                  variant={variantMainButton}
                  colorScheme={acTertiaryAction}
                  {...buttonProps}
               >
                  {`${labelButton}${selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""}`}
               </MenuButton>
               <Stack>
                  <MenuList px="2" py="3" minW={"120px"} maxW="90vw" overflow={"scroll"} display="flex">
                     <VStack>
                        {headerSection && (
                           <Center mb="6px" fontFamily={"roboto"} lineHeight="30px">
                              {headerSection}
                           </Center>
                        )}

                        {options.map((option) => {
                           return (
                              <Button
                                 key={`Options button Multi Select ${labelButton} ${option.label}`}
                                 onClick={() => {
                                    // Si la valeur selectionner n'est pas dans le tab des options selection, alors on l'ajoute
                                    if (!selectedOptions.includes(option.value))
                                       setSelectedOptions([option.value, ...selectedOptions]);
                                    // Sinon si il y a deja la valeur on la retire
                                    else setSelectedOptions(selectedOptions.filter((val) => val !== option.value));
                                 }}
                                 bg={selectedOptions.includes(option.value) ? acPrimaryAction : "white"}
                                 variant={variantOptionButton}
                              >
                                 {option.label}
                              </Button>
                           );
                        })}
                     </VStack>
                  </MenuList>
               </Stack>
            </>
         )}
      </Menu>
   );
};

MultiSelectWithButtonItem.displayName = "MultiSelectMenu";

/**
 *
 * @property {(selectedValues: string[]) => void} [onChange] - Fonction appelée lorsque la sélection change. Le params selectedValues donne accées au options selectionner
 * @property {string | undefined} [variantMainButton] - Variant pour le boutton principal
 * @property {string | undefined} [variantOptionButton] - Variant pour les bouttons qui represente les options une fois cliquer sur le boutton principal
 *
 */
export type MultiSelectMenuProps = {
   labelButton: string;
   options: {
      label: string;
      value: string;
   }[];
   headerSection?: JSX.Element | string;
   defaultValues?: string[];
   leftIcon?: any;
   onChange?: (selectedValues: string[]) => void;
   buttonProps?: MenuButtonProps;
   variantMainButton?: string;
   variantOptionButton?: string;
};

export default MultiSelectWithButtonItem;
