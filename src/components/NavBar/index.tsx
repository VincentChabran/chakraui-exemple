import { Divider, Heading, Spacer } from "@chakra-ui/react";
import { FaHome, FaYinYang, FaYoutube } from "react-icons/fa";
import ResponciveDrawer from "./ResponciveDrawer";
import RouterDomNav from "./RouterDomNav";

type Props = {};

export default function index({}: Props) {
   const navLinks = [
      { href: "/home", icon: FaHome, name: "Home" },
      { href: "/about", icon: FaYoutube, name: "About" },
      { href: "/jsp", icon: FaYinYang, name: "Jsp" },
      { href: "/home1", icon: null, name: "No icon 1" },
      { href: "/home2", icon: null, name: "No icon 2" },
   ];

   return (
      <>
         <Heading size="2xl">Nav</Heading>
         <Spacer />

         <ResponciveDrawer navItems={navLinks} />

         {/* <RouterDomNav navItems={navLinks} /> */}

         <Divider />
      </>
   );
}
