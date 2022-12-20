import { Heading, VStack } from "@chakra-ui/react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DishCard } from "./DishCard";
import { Hero } from "./Hero";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <VStack mt="486px" px="123px" alignItems="flex-start">
        <Heading fontWeight="500" fontFamily="Poppins">
          Pratos principais
        </Heading>

        <DishCard />

        <Heading fontWeight="500" fontFamily="Poppins">
          Sobremesas
        </Heading>

        <Heading fontWeight="500" fontFamily="Poppins">
          Bebidas
        </Heading>
      </VStack>
    </MainLayout>
  );
}
