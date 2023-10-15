import { Button, Center, Menu, MenuButton, MenuButtonProps, MenuList, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { acPrimaryAction, acTertiaryAction } from "../../../themes/constants/arcadiumColors";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MultiSelectMultiSectionWithButtonItem = (props: MultiSelectMenuProps): JSX.Element => {
   const {
      labelButton,
      optionsSections,
      defaultValues,
      buttonProps,
      leftIcon,
      variantMainButton = "arcadiumMultiSelect",
      variantOptionButton = "arcadiumMultiSelectItemButton",
   } = props;

   const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] | null }>(defaultValues || {});

   const [lengthSelectedOptions, setLengthSelectedOptions] = useState(0);

   useEffect(() => {
      props.onChange?.(selectedOptions);
   }, [selectedOptions]);

   useEffect(() => {
      let cpt = 0;

      Object.entries(selectedOptions).forEach((section, i) => {
         if (section[1]?.length) cpt += section[1]?.length;
      });

      setLengthSelectedOptions(cpt);
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
                  {`${labelButton}${lengthSelectedOptions ? ` (${lengthSelectedOptions})` : ""}`}
               </MenuButton>
               <Stack>
                  <MenuList px="2" py="3" minW={"120px"} maxW="90vw" overflow={"scroll"} display="flex" gap="4">
                     {optionsSections.map(({ nameSection, options, headerSection }) => (
                        <VStack key={`Section ${nameSection}`}>
                           <Center mb="6px" fontFamily={"roboto"} lineHeight="30px" maxH="30px">
                              {headerSection || nameSection}
                           </Center>

                           {options.map(({ label, value }) => {
                              return (
                                 <Button
                                    key={`Options button Multi Select ${nameSection} ${label}`}
                                    onClick={() => {
                                       const valeurSectionActuel = selectedOptions[nameSection];

                                       // Si la valeur de la sections existe
                                       if (valeurSectionActuel) {
                                          // Si la valeur selectionner n'est pas dans le tab des options selection, alors on l'ajoute
                                          if (!valeurSectionActuel?.includes(value)) {
                                             setSelectedOptions({
                                                ...selectedOptions,
                                                [nameSection]: [...valeurSectionActuel, value],
                                             });
                                          }
                                          // Sinon si il y a deja la valeur on la retire
                                          else {
                                             setSelectedOptions({
                                                ...selectedOptions,
                                                [nameSection]: valeurSectionActuel.filter((val) => val !== value),
                                             });
                                          }
                                          // Si la section n'existe pas, on la crée et on ajoute la valeur
                                       } else setSelectedOptions({ ...selectedOptions, [nameSection]: [value] });
                                    }}
                                    bg={selectedOptions[nameSection]?.includes(value) ? acPrimaryAction : "white"}
                                    variant={variantOptionButton}
                                 >
                                    {label}
                                 </Button>
                              );
                           })}
                        </VStack>
                     ))}
                  </MenuList>
               </Stack>
            </>
         )}
      </Menu>
   );
};

MultiSelectMultiSectionWithButtonItem.displayName = "MultiSelectMenu";

/**
 * @property {string} labelButton - Texte pour le bouton qui ouvre le select
 * @property {
 *       nameSection: string;
 *       options: {
 *           label: string;
 *           value: string;
 *       headerSection?: JSX.Element | string;
 *       }
 * } [optionsSections] - Options de selection - la propriété headerSection dois étre une image de 30px, ou bien un texte
 *
 * @property {(selectedValues: { [key: string]: string[] | null }) => void} [onChange] - Fonction appelée lorsque la sélection change. Le params selectedValues donne accées au options selectionner
 * @property {string | undefined} [variantMainButton] - Variant pour le boutton principal
 * @property {string | undefined} [variantOptionButton] - Variant pour les bouttons qui represente les options une fois cliquer sur le boutton principal
 *
 */
export type MultiSelectMenuProps = {
   labelButton: string;
   optionsSections: {
      nameSection: string;
      options: {
         label: string;
         value: string;
      }[];
      headerSection?: JSX.Element | string;
   }[];
   defaultValues: { [key: string]: string[] | null };
   onChange?: (selectedValues: { [key: string]: string[] | null }) => void;
   leftIcon?: any;
   buttonProps?: MenuButtonProps;
   variantMainButton?: string;
   variantOptionButton?: string;
};

export default MultiSelectMultiSectionWithButtonItem;
