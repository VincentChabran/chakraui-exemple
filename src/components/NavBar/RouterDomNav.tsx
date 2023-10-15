import { Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type Props = {
   navItems: (
      | {
           href: string;
           icon: IconType;
           name: string;
        }
      | {
           href: string;
           icon: null;
           name: string;
        }
   )[];
};

export default function RouterDomNav({ navItems }: Props) {
   return (
      <>
         <Heading size="lg">React Router Dom Nav</Heading>
         <Text>Avec les liens du packadge react-router-dom</Text>

         <Spacer />

         <HStack display={{ base: "none", md: "flex" }} justify="space-around" w="100%" as="nav">
            {navItems.map((el) => (
               <NavLink
                  key={`ReactRouterNav ${el.href}`}
                  to={el.href}
                  style={({ isActive }) => ({
                     color: isActive ? "red" : "blue",
                     paddingLeft: 20,
                     paddingRight: 20,
                  })}
               >
                  {el.name}
               </NavLink>
            ))}
         </HStack>

         <Text>A terminer</Text>
      </>
   );
}
