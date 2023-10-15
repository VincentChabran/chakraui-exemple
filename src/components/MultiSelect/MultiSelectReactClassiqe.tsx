import { HStack, Text } from "@chakra-ui/react";
import Select from "react-select";
import { acPanelBgDarker, acTertiaryAction, acTertiaryActionHover } from "../../themes/constants/arcadiumColors";

type Props = {
   label: string;
   options: {
      label: string;
      value: string;
   }[];
   leftIcon?: any;
};

// const options = [
//    { label: "16h - 18h", value: "16-18" },
//    { label: "18h - 20h", value: "18-20" },
//    { label: "20h - 22h", value: "20-22" },
// ];

export default function MultiSelectReactClassiqe({ label, options, leftIcon }: Props) {
   // @ts-ignore
   const handleChange = (selectedOption) => {
      console.log("handleChange", selectedOption);
   };

   const colorStyle = {
      // @ts-ignore
      container: (styles) => {
         return {
            ...styles,
            // width: "300px",
         };
      },

      // @ts-ignore
      control: (styles) => ({
         ...styles,
         backgroundColor: acTertiaryAction,
         border: "0px solid black",
         borderRadius: "10px",
      }),
      // @ts-ignore
      placeholder: (defaultStyles) => {
         return {
            ...defaultStyles,
            color: "#ffffff",
            padding: 0,
         };
      },
      //
      // @ts-ignore
      menu: (base) => ({
         ...base,
         fontFamily: "Roboto",
         fontWeight: 700,
      }),
      // @ts-ignore
      // Style du conteneur qui déroule les options
      menuList: (styles, state) => ({
         ...styles,
         paddingTop: 0,
         paddingBottom: 0,
      }),
      // @ts-ignore
      // data représente la valeur de l'option associer { value: "jack", label: "Jack", color: "#FF8B00" }
      // Style des options dérouller quand on clic sur le select
      option: (styles, { data, isFocused, isSelected, isDisabled }) => {
         return {
            ...styles,

            backgroundColor: acTertiaryAction,
            cursor: "pointer",
            ":hover": {
               backgroundColor: acTertiaryActionHover,
            },
         };
      },
      //
      // @ts-ignore
      // Style du rectangle de l'option l'interieur de l'input une fois selectionner
      multiValue: (styles, { data }) => {
         return {
            ...styles,
            backgroundColor: acPanelBgDarker,
            color: "#fff",
         };
      },
      // @ts-ignore
      // Style du label de l'option l'interieur de l'input une fois selectionner
      multiValueLabel: (styles, { data }) => {
         return {
            ...styles,
            color: "#fff",
         };
      },
      // @ts-ignore
      // Style de la croix de l'option l'interieur de l'input une fois selectionner
      multiValueRemove: (styles, { data }) => {
         return {
            ...styles,
            color: "#fff",
            cursor: "pointer",
            ":hover": {
               color: "#fff",
            },
         };
      },
   };

   return (
      <Select
         options={options}
         onChange={handleChange}
         isMulti
         styles={colorStyle}
         placeholder={
            <HStack pr="0">
               {leftIcon}
               <Text fontFamily="roboto" fontWeight={700}>
                  {label}
               </Text>
            </HStack>
         }
      />
   );
}
