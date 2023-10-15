import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
   Heading,
   HStack,
   Spacer,
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerBody,
   useDisclosure,
   IconButton,
   DrawerCloseButton,
   DrawerHeader,
   Divider,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import NavItemPremier from "../global/navItem/NavItemPremier";

interface Props {
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
}

const ResponciveDrawer = ({ navItems }: Props) => {
   const { isOpen: drawerOpen, onToggle: drawerToggle } = useDisclosure();

   return (
      <>
         <Heading size="lg">Responcive Drawer</Heading>
         <HStack display={{ base: "none", md: "flex" }} w="100%" as="nav">
            {navItems.map((el) => (
               <NavItemPremier href={el.href} icon={el.icon} key={el.name}>
                  {el.name}
               </NavItemPremier>
            ))}
         </HStack>

         <IconButton
            display={{ md: "none" }}
            aria-label="Open Menu"
            variant="outline"
            icon={<HamburgerIcon />}
            onClick={drawerToggle}
         />
         <Drawer onClose={drawerToggle} isOpen={drawerOpen} placement="left">
            <DrawerOverlay />
            <DrawerContent overflowY="hidden">
               <DrawerCloseButton />
               <DrawerHeader bg="gray.800">Menu</DrawerHeader>
               <DrawerBody bg="gray.800" overflowY="hidden" p="0">
                  {navItems.map((el) => (
                     <NavItemPremier href={el.href} icon={el.icon} key={el.name}>
                        {el.name}
                     </NavItemPremier>
                  ))}
               </DrawerBody>
            </DrawerContent>
         </Drawer>
         <Spacer />

         <Spacer />
      </>
   );
};

export default ResponciveDrawer;
