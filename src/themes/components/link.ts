import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

import {
   acNavigationColor,
   acNavigationColorCoachLight,
   acNavigationColorCoachNormal,
   acPrimaryActionHover,
   acSecondaryAction,
   acTextWhite,
} from "../constants/arcadiumColors";

export const Link: ComponentStyleConfig = {
   baseStyle: (props: StyleFunctionProps) => {
      return {
         transitionProperty: "common",
         transitionDuration: "fast",
         transitionTimingFunction: "ease-out",

         fontFamily: "heading", // base = body
         w: "100%",
         px: "15px",

         cursor: "pointer",
         textDecoration: "none",
         outline: "none",
         color: "inherit",
         borderRadius: "lg",

         _hover: {
            textDecoration: "none", // base = underline
            bg: mode("gray.100", "blackAlpha.400")(props), // base = existe pas
            color: mode("blue.500", "purple.300")(props),
         },

         _activeLink: {
            bg: mode("gray.200", "blackAlpha.500")(props),
            color: mode("blue", "purple.400")(props),
            _hover: {
               bg: mode("gray.100", "blackAlpha.400")(props),
            },
         },
         // Au clic
         _active: {
            // bg: 'gray.500',
         },

         _focus: {
            boxShadow: "none",
         },

         _focusVisible: {
            boxShadow: "outline",
         },
      };
   },

   sizes: {},

   variants: {
      arcadiumNavBarJoueur: (props: StyleFunctionProps) => {
         return {
            bg: "transparent",
            fontFamily: "archivo",
            color: acTextWhite,
            fontSize: "md",
            py: "2px",
            _hover: {
               color: acPrimaryActionHover,
            },
            _activeLink: {
               boxShadow: "none",
               color: acNavigationColor,
            },
         };
      },

      arcadiumNavBarCoach: (props: StyleFunctionProps) => {
         return {
            bg: "transparent",
            fontFamily: "archivo",
            color: acTextWhite,
            fontSize: "md",
            py: "2px",
            _hover: {
               color: acNavigationColorCoachNormal,
            },
            _activeLink: {
               boxShadow: "none",
               color: acNavigationColorCoachLight,
            },
         };
      },

      // Style pour les liens dans le Slider
      arcadiumSliderLinkJoueur: (props: StyleFunctionProps) => {
         return {
            p: 0,
            pl: 4,
            py: "14px",
            fontFamily: "roboto",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "tight",
            color: acTextWhite,
            bg: "transparent",
            _hover: {
               color: acPrimaryActionHover,
            },
            _activeLink: {
               boxShadow: "none",
               color: acNavigationColor,
            },
         };
      },

      arcadiumSliderLinkCoach: (props: StyleFunctionProps) => {
         return {
            p: 0,
            pl: 4,
            py: "14px",
            fontFamily: "roboto",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "tight",
            color: acTextWhite,
            bg: "transparent",
            _hover: {
               color: acNavigationColorCoachNormal,
            },
            _activeLink: {
               boxShadow: "none",
               color: acNavigationColorCoachLight,
            },
         };
      },

      // Style pour les liens des navBar mobile
      arcadiumNavBarMobileJoueur: (props: StyleFunctionProps) => {
         return {
            bg: "transparent",
            color: acTextWhite,
            py: "0",
            px: "15px",
            // px: ["20px", "20px", "30px"],
            fontFamily: "roboto",
            fontWeight: "normal",
            fontSize: ["10px", "10px", "xs", "xs", "xs"],
            lineHeight: "20px",
            _hover: {
               color: acPrimaryActionHover,
            },
            _activeLink: {
               boxShadow: "none",
               color: acNavigationColor,
            },
         };
      },

      arcadiumNavBarMobileCoach: (props: StyleFunctionProps) => {
         return {
            bg: "transparent",
            color: acTextWhite,
            py: "0",
            px: ["5px", "5px", "15px"],
            fontFamily: "roboto",
            fontWeight: "normal",
            fontSize: ["10px", "10px", "xs", "xs", "xs"],
            lineHeight: "20px",
            _hover: {
               color: acNavigationColorCoachNormal,
            },
            _activeLink: {
               boxShadow: "none",
               color: acNavigationColorCoachLight,
            },
         };
      },

      arcadiumPrimaryLink: () => {
         return {
            px: 0,
            color: acSecondaryAction,
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: ["12px", "12px", "16px"],
            lineHeight: "21px",
            _hover: {
               color: acSecondaryAction,
               textDecoration: "underline",
            },
         };
      },
   },

   defaultProps: {},
};
