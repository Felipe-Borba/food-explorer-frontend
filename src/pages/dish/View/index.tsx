import {
  Flex,
  HStack,
  Heading,
  Image,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonPrimary } from "../../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../../components/global/butons/ButtonText";
import { IconArrowLeft } from "../../../components/icons/IconArrowLeft";
import { MainLayout } from "../../../components/layouts/MainLayout";
import { api } from "../../../services/api";
import { useAuth } from "../../../context/Auth";
import { LoadIngredient } from "./LoadIngredient";
const baseURL = import.meta.env.VITE_API_URL;

//TODO transformar isso numa tela de atualizar os dados só que desativa adição case seja cliente
// TODO add botao de deletar caso seja admin
export default function DishView() {
  const navigate = useNavigate();
  const params = useParams();
  const { data } = useAuth();
  const { id } = params;

  const quantity = 0;

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dish/${id}`);
        const { dish, ingredients } = response.data;

        setImage(`${baseURL}/files/${dish.image}`);
        setName(dish.name);
        setPrice(dish.price);
        setDescription(dish.description);
        setIngredients(ingredients.map((i: any) => i.name));
      } catch (error) {
        console.log(error);
      }
    }

    fetchDish();
  }, [id]);

  return (
    <MainLayout>
      <VStack mx="122px" gap="42px" alignItems={"flex-start"}>
        <ButtonText fontSize="24px" my="32px" onClick={() => navigate(-1)}>
          <IconArrowLeft mr="11px" />
          Voltar
        </ButtonText>

        <HStack gap="41px" alignItems={"flex-start"}>
          <SkeletonCircle
            isLoaded={Boolean(image)}
            boxSize={"389.47px"}
            overflow="hidden"
          >
            <Image objectFit="cover" src={image} alt="Foto do prato" />
          </SkeletonCircle>

          <Flex flexDir={"column"}>
            <Heading
              fontFamily={"Poppins"}
              fontWeight="500"
              fontSize={"40px"}
              color="#E1E1E6"
            >
              {name}
            </Heading>

            <Text
              mt="8px"
              fontFamily={"Poppins"}
              fontWeight="400"
              fontSize={"24px"}
              color="#E1E1E6"
            >
              {description}
            </Text>

            <HStack gap="16px" mt="26px" alignItems={"baseline"}>
              {ingredients.map((name, index) => (
                <LoadIngredient key={index} ingredient={name} />
              ))}
            </HStack>

            <HStack mt="43px">
              <Heading fontSize={"32px"} fontWeight="400" color={"#82F3FF"}>
                R$ {price.toString().replace(".", ",")}
              </Heading>

              {data.user?.role !== "admin" ? (
                <>
                  <Flex
                    alignItems={"center"}
                    gap="5px"
                    pl={"54px"}
                    pr="27px"
                    fontSize="20px"
                  >
                    <ButtonText
                      _hover={{ bgColor: "#c4c4cc5e" }}
                      fontSize="20px"
                    >
                      -
                    </ButtonText>
                    <Text>{quantity}</Text>
                    <ButtonText
                      _hover={{ bgColor: "#c4c4cc5e" }}
                      fontSize="20px"
                    >
                      +
                    </ButtonText>
                  </Flex>

                  <ButtonPrimary>incluir</ButtonPrimary>
                </>
              ) : (
                <>
                  <ButtonPrimary>Excluir</ButtonPrimary>
                  <ButtonPrimary>Alterar</ButtonPrimary>
                </>
              )}
            </HStack>
          </Flex>
        </HStack>
      </VStack>
    </MainLayout>
  );
}
