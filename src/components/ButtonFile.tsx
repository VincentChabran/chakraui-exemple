import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Divider, Heading, Spacer, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaDumbbell } from "react-icons/fa";

const color = [
   "gray",
   "red",
   "orange",
   "whiteAlpha",
   "yellow",
   "green",
   "teal",
   "blackAlpha",
   "blue",
   "cyan",
   "purple",
   "pink",
];

const ButtonFile = () => {
   // Button Color
   const [buttonColor, setButtonColor] = useState("gray");

   // useEffect(() => {
   //    let i = 0;
   //    const timer = setInterval(() => {
   //       setButtonColor(color[i]);
   //       i++;
   //       if (i > color.length) i = 0;
   //    }, 5000);
   // }, []);

   return (
      <>
         <Heading size="2xl">Button Size</Heading>
         <VStack spacing={3}>
            <Button size="xl">Xl Button</Button>
            <Button size="lg">Lg Button</Button>
            <Button size="md">Md Button</Button>
            <Button size="sm">Sm Button</Button>
            <Button size="xs">Xs Button</Button>
         </VStack>

         <Heading size="2xl">Button Style</Heading>
         <VStack spacing={3}>
            <Button variant="solid" colorScheme={buttonColor}>
               Solid Button {buttonColor}
            </Button>
            <Button variant="outline" colorScheme={buttonColor}>
               Outline Button {buttonColor}
            </Button>
            <Button variant="ghost" colorScheme={buttonColor}>
               Ghost Button
            </Button>
            <Button variant="solid" colorScheme={buttonColor} leftIcon={<FaDumbbell />} rightIcon={<DeleteIcon />}>
               Icon
            </Button>
            <Button variant="link" colorScheme={buttonColor}>
               Link Button
            </Button>
            <Button variant="unstyled">Unstyled Button</Button>
         </VStack>

         <Spacer />
         <Divider />
      </>
   );
};

export default ButtonFile;
