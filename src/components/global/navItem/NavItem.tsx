import { Box, ComponentWithAs, Flex, Icon, IconProps, Link, VStack } from "@chakra-ui/react";
import { CSSProperties, ReactElement } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface NavItemProps {
   href: string;
   children: ReactElement | string | number;
   icon?: IconType | ComponentWithAs<"svg", IconProps> | null;
   variant?: string;
   justify?: string;
   fontFamily?: string;
   onClick?: React.MouseEventHandler<HTMLAnchorElement>;
   _activeLink?: {
      color: string;
   };
}

const NavItem = ({
   href,
   children,
   icon,
   variant,
   justify = "center",
   fontFamily,
   onClick,
   _activeLink,
}: NavItemProps) => {
   return (
      <VStack lineHeight="3em" style={marginReset} pos="relative">
         <Link
            as={NavLink}
            to={href}
            borderRadius={"none"}
            variant={variant}
            fontFamily={fontFamily}
            onClick={onClick}
            _activeLink={_activeLink}
         >
            <Flex as="span" h="100%" justify={justify} align="center">
               {icon && <Icon mr="2" fontSize="md" as={icon} />}
               {children}
            </Flex>
         </Link>

         {/* <Box
            display={window.location.pathname == href ? "block" : "none"}
            h="1"
            w="100%"
            bg={
               variant && variant === "arcadiumNavBarJoueur"
                  ? acNavigationColor
                  : variant === "arcadiumNavBarCoach"
                  ? acNavigationColorCoachNormal
                  : ""
            }
            pos="absolute"
            bottom="0"
            borderRadius="9px"
         ></Box> */}
      </VStack>
   );
};

export default NavItem;

const marginReset: CSSProperties | undefined = {
   WebkitMarginStart: "0rem",
   marginInlineStart: "0rem",
};
