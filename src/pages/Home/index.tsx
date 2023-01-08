import { Box, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/global/butons/ButtonPrimary";
import { MainLayout } from "../../components/layouts/MainLayout";
import { useAuth } from "../../context/Auth";
import { Hero } from "./Hero";
import { ScrollHorizontal } from "./ScrollHorizontal";
import { useDish } from "../../context/Dish";

export default function Home() {
  const { data } = useAuth();
  const navigate = useNavigate();
  const {
    data: { bebida, principal, sobremesa },
  } = useDish();

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
          <ScrollHorizontal data={principal} />
        </Box>

        <Box>
          <Heading fontWeight="500" fontFamily="Poppins" mb="39px">
            Sobremesas
          </Heading>
          <ScrollHorizontal data={sobremesa} />
        </Box>

        <Box>
          <Heading fontWeight="500" fontFamily="Poppins" mb="39px">
            Bebidas
          </Heading>
          <ScrollHorizontal data={bebida} />
        </Box>

        {data.user?.role === "admin" && (
          <ButtonPrimary onClick={() => navigate("/dish/create")}>
            Cadastrar um prato
          </ButtonPrimary>
        )}
      </VStack>
    </MainLayout>
  );
}
