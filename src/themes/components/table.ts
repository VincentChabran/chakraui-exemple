import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { acPanelBgDarker, acPanelBgLight, acTertiaryAction } from "../constants/arcadiumColors";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
   table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
   },
   th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
   },
   td: {
      textAlign: "start",
   },
   caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
   },
});

const numericStyles = defineStyle({
   "&[data-is-numeric=true]": {
      textAlign: "end",
   },
});

const variantSimple = definePartsStyle((props) => {
   const { colorScheme: c } = props;

   return {
      th: {
         color: mode("gray.600", "gray.400")(props),
         borderBottom: "1px",
         borderColor: mode(`${c}.100`, `${c}.700`)(props),
         ...numericStyles,
      },
      td: {
         borderBottom: "1px",
         borderColor: mode(`${c}.100`, `${c}.700`)(props),
         ...numericStyles,
      },
      caption: {
         color: mode("gray.600", "gray.100")(props),
      },
      tfoot: {
         tr: {
            "&:last-of-type": {
               th: {
                  borderBottomWidth: 0,
               },
            },
         },
      },
   };
});

const variantStripe = definePartsStyle((props) => {
   const { colorScheme: c } = props;

   return {
      th: {
         color: mode("gray.600", "gray.400")(props),
         borderBottom: "1px",
         borderColor: mode(`${c}.100`, `${c}.700`)(props),
         ...numericStyles,
      },
      td: {
         borderBottom: "1px",
         borderColor: mode(`${c}.100`, `${c}.700`)(props),
         ...numericStyles,
      },
      caption: {
         color: mode("gray.600", "gray.100")(props),
      },
      tbody: {
         tr: {
            "&:nth-of-type(odd)": {
               "th, td": {
                  borderBottomWidth: "1px",
                  borderColor: mode(`${c}.100`, `${c}.700`)(props),
               },
               td: {
                  background: mode(`${c}.100`, `${c}.700`)(props),
               },
            },
         },
      },
      tfoot: {
         tr: {
            "&:last-of-type": {
               th: { borderBottomWidth: 0 },
            },
         },
      },
   };
});

const borderSize = 12;
const variantArcadium = definePartsStyle((props) => {
   const { colorScheme: c } = props;

   return {
      table: {
         overflow: "scroll",
      },
      thead: {
         h: `calc(100px - ${borderSize}px)`,
         tr: {
            bg: acPanelBgLight,
            color: acTertiaryAction,
         },
         th: {
            py: 2,
            px: 3,
            "&:nth-of-type(1n)": {
               borderRight: "2px solid #3F4E74",
            },

            "&:last-child": {
               borderRight: "0",
               px: 6,
            },
            // Pour l'espace entre le haut et le bas de la bordure vertical
            borderTop: `${borderSize / 2}px solid #ECF0F8`,
            borderBottom: `${borderSize / 2}px solid #ECF0F8`,
            fontFamily: "roboto",
            fontWeight: "bold",
            textTransform: "unset",
            letterSpacing: "normal",
            textAlign: "center",
         },
      },

      tbody: {
         tr: {
            bg: acPanelBgDarker,
         },
         td: {
            textAlign: "center",

            "&:first-of-type": {
               borderLeftRadius: "10px",
            },
            "&:nth-of-type(1n)": {
               borderRight: "2px solid #3F4E74",
            },
            "&:last-child": {
               borderRightRadius: "10px",
               borderRight: "0",
            },
         },
      },
   };
});

const variants = {
   simple: variantSimple,
   striped: variantStripe,
   unstyled: defineStyle({}),
   arcadium: variantArcadium,
};

const sizes = {
   sm: definePartsStyle({
      th: {
         px: "4",
         py: "1",
         lineHeight: "4",
         fontSize: "xs",
      },
      td: {
         px: "4",
         py: "2",
         fontSize: "sm",
         lineHeight: "4",
      },
      caption: {
         px: "4",
         py: "2",
         fontSize: "xs",
      },
   }),
   md: definePartsStyle({
      th: {
         px: "6",
         py: "3",
         lineHeight: "4",
         fontSize: "xs",
      },
      td: {
         px: "6",
         py: "4",
         lineHeight: "5",
      },
      caption: {
         px: "6",
         py: "2",
         fontSize: "sm",
      },
   }),
   lg: definePartsStyle({
      th: {
         px: "8",
         py: "4",
         lineHeight: "5",
         fontSize: "sm",
      },
      td: {
         px: "8",
         py: "5",
         lineHeight: "6",
      },
      caption: {
         px: "6",
         py: "2",
         fontSize: "md",
      },
   }),
};

export const tableTheme = defineMultiStyleConfig({
   baseStyle,
   variants,
   sizes,
   defaultProps: {
      variant: "simple",
      size: "md",
      colorScheme: "gray",
   },
});
