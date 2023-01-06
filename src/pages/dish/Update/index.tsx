import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderAdmin } from "../../../components/global/HeaderAdmin";
import { InputPrimary } from "../../../components/global/InputPrimary";
import { ButtonPrimary } from "../../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../../components/global/butons/ButtonText";
import { IconArrowLeft } from "../../../components/icons/IconArrowLeft";
import { IconUpload } from "../../../components/icons/IconUpload";
import { MainLayout } from "../../../components/layouts/MainLayout";
import { api, apiErrorParser } from "../../../services/api";
import { Ingredients } from "./Ingredients";

export default function DishUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ingredientes, setIngredientes] = useState<string[]>([]);
  const [imagem, setImagem] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleChangePicture(e: any) {
    const file = e.target.files[0];
    setImagem(file);
  }

  async function handleClick() {
    try {
      const response = await api.patch(`/dish/${id}`, {
        nome,
        ingredientes,
        preco: Number(preco),
        tipo,
        descricao,
      });

      if (imagem) {
        const dishImage = new FormData();
        dishImage.append("imagem", imagem);
        await api.patch(`/dish/${id}/imagem`, dishImage, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      navigate(-1);
    } catch (error) {
      const err = apiErrorParser(error, "não foi possível cadastrar um prato");
      alert(err.message?.join("\n"));
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dish/${id}`);
        const { dish, ingredients } = response.data;

        setNome(dish.name);
        setPreco(dish.price);
        setTipo(dish.type);
        setDescricao(dish.description);
        setIngredientes(ingredients.map((i: any) => i.name));
      } catch (error) {
        console.log(error);
      }
    }

    fetchDish();
  }, [id]);

  return (
    <MainLayout header={<HeaderAdmin />}>
      <VStack my="32px" mx="123px" alignItems="flex-start" flex={1}>
        <ButtonText fontSize="24px" my="32px" onClick={() => navigate(-1)}>
          <IconArrowLeft mr="11px" />
          Voltar
        </ButtonText>

        <Heading>Editar prato</Heading>

        <Flex flexWrap="wrap" gap="5%">
          <Box flexGrow={1} flexBasis="30%" mt="32px">
            <InputPrimary
              onChange={handleChangePicture}
              cursor="pointer/*  */"
              label="Imagem do prato"
              type="file"
              py={3}
              sx={{
                "::file-selector-button": {
                  display: "none",
                },
              }}
              leftIcon={<IconUpload boxSize="24px" ml="14px" />}
              pl="50px"
            />
          </Box>

          <Box flexGrow={1} flexBasis="20%" mt="32px">
            <FormControl>
              <FormLabel
                fontSize="16px"
                fontFamily="Roboto"
                fontWeight="400"
                color="#C4C4CC"
              >
                Tipo
              </FormLabel>
              <InputGroup>
                <Select
                  placeholder="Selecione um tipo"
                  h="48px"
                  fontSize="16px"
                  fontFamily="Roboto"
                  fontWeight="400"
                  color="#C4C4CC"
                  onChange={(e) => setTipo(e.target.value)}
                  value={tipo}
                >
                  <option value="principal">Prato Principal</option>
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Bebida</option>
                </Select>
              </InputGroup>
            </FormControl>
          </Box>

          <Box flexGrow={1} flexBasis="40%" mt="32px">
            <InputPrimary
              label="Nome"
              placeholder="Ex.: Salada Ceasar"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </Box>

          <Box flexGrow={1} flexBasis="75%" mt="32px">
            <Ingredients tags={ingredientes} setTags={setIngredientes} />
          </Box>

          <Box flexGrow={1} flexBasis="20%" mt="32px">
            <InputPrimary
              label="Preço"
              placeholder="R$ 00,00"
              type="number"
              onChange={(e) => setPreco(e.target.value)}
              value={preco}
            />
          </Box>

          <FormControl mt="32px">
            <FormLabel
              fontSize="16px"
              fontFamily="Roboto"
              fontWeight="400"
              color="#C4C4CC"
            >
              Descrição
            </FormLabel>
            <InputGroup>
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                minH="23vh"
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
              />
            </InputGroup>
          </FormControl>
        </Flex>

        <Box alignSelf={"flex-end"} pt="20px">
          <ButtonPrimary onClick={handleClick}>Adicionar pedido</ButtonPrimary>
        </Box>
      </VStack>
    </MainLayout>
  );
}
