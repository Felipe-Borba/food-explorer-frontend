import React from "react";
import mainIcon from "../../../assets/main-icon.svg";
import {
  FormControl,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";

interface Props {
  sectionText: string;
  children: React.ReactNode;
  onSubmit: () => Promise<void>;
}

export default function SigInLayout(props: Props) {
  const { children, sectionText, onSubmit } = props;

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await onSubmit();
  }

  return (
    <Grid
      h="100vh"
      w="100vw"
      px="108px"
      justifyContent={"space-between"}
      templateAreas={`"logo form"`}
      gridTemplateColumns={"2fr 2fr"}
    >
      <GridItem alignSelf={"center"} area={"logo"}>
        <HStack spacing="20px" mb="100px">
          <Image src={mainIcon} alt="Logo do app" />
          <Heading fontSize="43px">food explorer</Heading>
        </HStack>
      </GridItem>

      <GridItem alignSelf={"center"} area={"form"}>
        <form onSubmit={handleOnSubmit}>
          <VStack
            spacing="32px"
            bgColor={"#001119"}
            p="64px"
            borderRadius="16px"
          >
            <Heading fontSize="32px" fontFamily="Poppins">
              {sectionText}
            </Heading>

            {children}
          </VStack>
        </form>
      </GridItem>
    </Grid>
  );
}
