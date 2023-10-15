import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { calc, cssVar } from "@chakra-ui/theme-tools";

import { acGradientsColorsGrayLighter, acSecondaryAction } from "../constants/arcadiumColors";

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");

export const Switch: ComponentStyleConfig = {
   baseStyle: (props: StyleFunctionProps) => ({}),

   sizes: {
      test: definePartsStyle({
         container: {
            [$width.variable]: "30px",
            [$height.variable]: "sizes.3",
         },
      }),
   },

   variants: {
      arcadiumToggle: (props: StyleFunctionProps) => {
         return {
            track: {
               bg: "transparent",
               border: "1px solid #CDD4E4",
               borderRadius: "full",
               p: "0.5",
               transitionProperty: "common",
               transitionDuration: "fast",
               _checked: {
                  bg: "#EDF8FF",
                  _dark: {},
               },
            },

            thumb: {
               bg: acGradientsColorsGrayLighter,
               transitionProperty: "transform",
               transitionDuration: "normal",
               _checked: {
                  bg: acSecondaryAction,
               },
            },
         };
      },
   },

   defaultProps: {},
};
