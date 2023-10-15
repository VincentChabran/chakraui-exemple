import { ComponentStyleConfig } from "@chakra-ui/react";

export const Text: ComponentStyleConfig = {
   baseStyle: {
      fontFamily: "body",
      letterSpacing: "tight",
   },

   sizes: {},

   variants: {
      tags: {
         p: "0",
         color: "black",
         fontFamily: "roboto",
         fontWeight: "bold",
         fontSize: ["10px", "10px", "xs", "xs", "xs"],
         lineHeight: "20px",
      },
   },

   defaultProps: {},
};
