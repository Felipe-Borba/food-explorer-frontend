import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import hero from "../../assets/hero.png";

export function Hero() {
  return (
    <Box position="absolute" left={124} right={124} h="260px" top="268px">
      <Flex
        position="absolute"
        left={0}
        right={0}
        top={0}
        bottom={0}
        bgGradient="linear(to-b, #091E26, #00131C)" />

      <Flex
        position="absolute"
        zIndex={10}
        top={-138.6}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="space-around"
      >
        <Image src={hero} alt="Fruit ninja" />
        <VStack
          mt="87px"
          spacing="8px"
          color="#E1E1E6"
          alignItems="flex-start"
          flexBasis="50%"
        >
          <Heading fontWeight="500" fontSize="40px" fontFamily="Poppins">
            Sabores inigualáveis
          </Heading>
          <Text fontWeight="400" fontSize="16px">
            Sinta o cuidado do preparo com ingredientes selecionados
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
