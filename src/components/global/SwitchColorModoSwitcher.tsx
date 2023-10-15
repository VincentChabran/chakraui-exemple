import { FC } from "react";
import { useColorMode, useColorModeValue, IconButtonProps, Text, HStack, Switch } from "@chakra-ui/react";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const SwitchColorModeSwitcher: FC<ColorModeSwitcherProps> = (props) => {
   const { colorMode, toggleColorMode } = useColorMode();

   const text = useColorModeValue("dark", "light");

   return (
      <HStack>
         <Switch
            variant="arcadiumToggle"
            isChecked={colorMode !== "dark"}
            onChange={toggleColorMode}
            aria-label={`Switch to ${colorMode} mode`}
         />

         <Text m="0" pb="1">
            Activer le thème {text}
         </Text>
      </HStack>
   );
};
