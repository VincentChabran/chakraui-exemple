import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { acTextDark, acTextWhite } from "../constants/arcadiumColors";

export const FormLabel: ComponentStyleConfig = {
   baseStyle: (props: StyleFunctionProps) => ({
      fontSize: "md",
      marginEnd: "3",
      mb: "2",
      fontWeight: "medium",
      transitionProperty: "common",
      transitionDuration: "normal",
      opacity: 1,
      _disabled: {
         opacity: 0.4,
      },
   }),

   sizes: {},

   variants: {
      bodyNormalArcadium: (props) => ({
         p: "0",
         color: mode(`${acTextDark}`, `${acTextWhite}99`)(props),
         fontFamily: "roboto",
         fontWeight: "normal",
         fontSize: "16px",
         letterSpacing: "tighter",
         lineHeight: "25px",
      }),
   },

   defaultProps: {},
};
