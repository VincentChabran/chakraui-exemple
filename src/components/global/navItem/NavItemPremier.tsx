import { Flex, FlexProps, Icon, Link, VStack } from "@chakra-ui/react";
import { CSSProperties, ReactElement } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface NavItemProps extends FlexProps {
   href: string;
   children: ReactElement | string | number;
   icon?: IconType | null;
}
const NavItemPremier = ({ href, children, icon }: NavItemProps) => {
   return (
      <VStack w="100%" lineHeight="3em" borderRadius="lg" spacing={0} m="0" style={marginReset}>
         <Link as={NavLink} to={href} w="100%" py="4px" px="15px">
            <Flex as={"span"} justify="center" align="center">
               {icon && <Icon mr="5" fontSize="md" as={icon} />}
               {children}
            </Flex>
         </Link>
      </VStack>
   );
};

export default NavItemPremier;

const marginReset: CSSProperties | undefined = {
   WebkitMarginStart: "0rem",
   marginInlineStart: "0rem",
};
