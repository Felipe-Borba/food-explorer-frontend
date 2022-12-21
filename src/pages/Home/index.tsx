import { Box, Heading, VStack } from "@chakra-ui/react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { Hero } from "./Hero";
import { ScrollHorizontal } from "./ScrollHorizontal";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <VStack
        spacing="50px"
        mt="486px"
        px="123px"
        pb="98px"
        alignItems="flex-start"
      >
        <Box>
          <Heading fontWeight="500" fontFamily="Poppins" mb="39px">
            Pratos principais
          </Heading>
          <ScrollHorizontal />
        </Box>

        <Box>
          <Heading fontWeight="500" fontFamily="Poppins" mb="39px">
            Sobremesas
          </Heading>
          <ScrollHorizontal />
        </Box>

        <Box>
          <Heading fontWeight="500" fontFamily="Poppins" mb="39px">
            Bebidas
          </Heading>
          <ScrollHorizontal />
        </Box>
      </VStack>
    </MainLayout>
  );
}
