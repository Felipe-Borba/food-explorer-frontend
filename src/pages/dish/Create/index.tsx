import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HeaderAdmin } from "../../../components/global/HeaderAdmin";
import { InputPrimary } from "../../../components/global/InputPrimary";
import { ButtonPrimary } from "../../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../../components/global/butons/ButtonText";
import { IconArrowLeft } from "../../../components/icons/IconArrowLeft";
import { IconClose } from "../../../components/icons/IconClose";
import { IconPlus } from "../../../components/icons/IconPlus";
import { IconUpload } from "../../../components/icons/IconUpload";
import { MainLayout } from "../../../components/layouts/MainLayout";

export default function DishCreate() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <MainLayout header={<HeaderAdmin />}>
      <VStack
        // spacing="32px"
        my="32px"
        mx="123px"
        alignItems="flex-start"
        flex={1}
      >
        <ButtonText fontSize="24px" my="32px">
          <IconArrowLeft mr="11px" />
          Voltar
        </ButtonText>

        <Heading>Editar prato</Heading>

        <Flex flexWrap="wrap" gap="5%">
          <Box flexGrow={1} flexBasis="30%" mt="32px">
            <InputPrimary
              cursor="pointer"
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

          <Box flexGrow={1} flexBasis="65%" mt="32px">
            <InputPrimary label="Nome" placeholder="Ex.: Salada Ceasar" />
          </Box>

          <Box flexGrow={1} flexBasis="75%" mt="32px">
            <Ingredients tags={tags} setTags={setTags} />
          </Box>

          <Box flexGrow={1} flexBasis="20%" mt="32px">
            <InputPrimary label="Preço" placeholder="R$ 00,00" type="number" />
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
              />
            </InputGroup>
          </FormControl>
        </Flex>

        <Box alignSelf={"flex-end"} pt="20px">
          <ButtonPrimary>Adicionar pedido</ButtonPrimary>
        </Box>
      </VStack>
    </MainLayout>
  );
}

interface Props {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Ingredients({ tags, setTags }: Props) {
  const [tag, setTag] = useState("");

  function handleAddTag() {
    setTags((old) => [...old, tag]);
    setTag("");
  }

  function handleRemoveTag(id: number) {
    setTags((old) => old.filter((_, index) => index !== id));
  }

  return (
    <Flex flexDir="column" gap="8px">
      <Text>Marcadores</Text>

      <HStack gap="16px" borderWidth="1px" borderRadius="8px" p="8px">
        {tags?.map((tag, index) => {
          return (
            <Box
              key={index}
              bgColor="rgba(255, 255, 255, 0.1)"
              py="7px"
              px="16px"
              borderRadius="8px"
            >
              {tag}
              <IconClose
                ml="8px"
                onClick={() => handleRemoveTag(index)}
                cursor="pointer"
              />
            </Box>
          );
        })}

        <Flex
          alignItems="center"
          borderStyle="dashed"
          borderWidth="1px"
          borderRadius="8px"
          py="7px"
          px="16px"
          w="130px"
        >
          <Input
            variant="unstyled"
            placeholder="Adicionar"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <IconPlus onClick={handleAddTag} cursor="pointer" />
        </Flex>
      </HStack>
    </Flex>
  );
}
