import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { acTextWhite } from "../constants/arcadiumColors";

export const Badge: ComponentStyleConfig = {
   baseStyle: (props: StyleFunctionProps) => ({}),

   sizes: {},

   variants: {
      arcadium: (props) => {
         const { colorScheme: c, theme } = props;

         return {
            px: ["2", "3", "4"],
            borderRadius: "full",
            color: c,
            boxShadow: `inset 0 0 0px 1px ${c}`,
         };
      },
   },

   defaultProps: {},
};
