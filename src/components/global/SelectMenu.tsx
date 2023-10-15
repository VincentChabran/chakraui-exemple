import {
   Button,
   Menu,
   MenuButton,
   MenuItemOption,
   MenuList,
   MenuOptionGroup,
   Stack,
   useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { acBgWhite, acTertiaryAction } from "../../themes/constants/arcadiumColors";

type Props = {
   options: {
      value: string;
      label: string;
   }[];
   flag?: boolean;
   onChange?: (selectedValues: string) => void;
   rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
};

export default function SelectMenu({ options, flag, onChange, rightIcon }: Props) {
   const [value, setValue] = useState("");

   // Pour metre la valeur a vide si le flag et sur false
   // ex : si la valeur d'un switch est sur false
   useEffect(() => {
      if (!flag) setValue("");
   }, [flag]);

   return (
      <Menu closeOnSelect={false}>
         {/* Pour afficher quel valeur est selectionner */}
         <MenuButton
            as={Button}
            rightIcon={rightIcon}
            variant="arcadiumSelect"
            colorScheme={useColorModeValue(acBgWhite, acTertiaryAction)}
         >
            {options[0].label} {value ? `(${value})` : ""}
         </MenuButton>

         <Stack>
            <MenuList minWidth="240px">
               <MenuOptionGroup
                  type="radio"
                  value={value}
                  onChange={(value) => {
                     // @ts-ignore
                     setValue(value);

                     // @ts-ignore
                     onChange?.(value);
                  }}
               >
                  {options.map(({ label, value }, i) => (
                     <MenuItemOption key={`Select options ${value}`} value={value}>
                        {label}
                     </MenuItemOption>
                  ))}
               </MenuOptionGroup>
            </MenuList>
         </Stack>
      </Menu>
   );
}
