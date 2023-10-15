import { Divider, Heading, Radio, RadioGroup, Spacer, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";

type Props = {};

export default function index({}: Props) {
   const [selectedValue, setSelectedValue] = useState("");

   const handleChange = (value: any) => {
      setSelectedValue(value);
   };

   return (
      <>
         <Heading size="2xl">Radio File</Heading>

         <RadioGroup defaultValue="1">
            <Stack>
               <Radio value="1" isDisabled>
                  Checked
               </Radio>
               <Radio value="2">Unchecked</Radio>
               <Radio value="3">Unchecked</Radio>
            </Stack>
         </RadioGroup>

         <RadioGroup onChange={handleChange} value={selectedValue}>
            <Stack direction="row">
               <Radio value="option1">Option 1</Radio>
               <Radio value="option2">Option 2</Radio>
               <Radio value="option3">Option 3</Radio>
            </Stack>
         </RadioGroup>

         <Spacer />
         <Divider />
      </>
   );
}
