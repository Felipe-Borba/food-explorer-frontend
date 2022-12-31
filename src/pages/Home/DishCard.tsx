import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ButtonPrimary } from "../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../components/global/butons/ButtonText";
import { IconHeart } from "../../components/icons/IconHeart";

interface Props {
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  image?: string;
  favorite?: boolean;
}
export function DishCard({
  description = "na",
  image = "",
  name = "nome",
  price = 0.99,
  quantity = 1,
  favorite = false,
}: Props) {
  const [imageData, setImageData] = useState<any>("");

  useEffect(() => {
    async function getImage() {
      // const response = await api.get(`/files/${image}`, {
      //   responseType: "arraybuffer",
      // });

      // const data = `data:${
      //   response.headers["content-type"]
      // };base64,${Buffer.alloc(response.data).toString("base64")}`;

      // console.log(data);
      //TODO find a way to display image from server with authentication
      const baseURL = import.meta.env.VITE_API_URL;
      setImageData(`${baseURL}/files/${image}`);
    }

    getImage();
  }, [image]);

  return (
    <Flex
      bgColor={"rgba(0, 0, 0, 0.32)"}
      py="36px"
      px="22px"
      flexDir={"column"}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      borderRadius="8px"
      borderColor={"rgba(0, 0, 0, 0.65)"}
      borderWidth="1px"
      position="relative"
    >
      <IconButton
        position="absolute"
        top={4}
        right={6}
        aria-label="Like"
        bgColor="transparent"
        _hover={{
          transform: "scale(1.2, 1.2)",
        }}
        _active={{
          transform: "scale(1.3, 1.3)",
        }}
        icon={
          favorite ? (
            <IconHeart boxSize="25px" fill="red" stroke="red" />
          ) : (
            <IconHeart boxSize="25px" stroke="#D9D9D9" />
          )
        }
      />

      <SkeletonCircle
        isLoaded={Boolean(imageData)}
        boxSize={"176px"}
        overflow="hidden"
      >
        <Image
          objectFit="cover"
          // src={`${baseURL}/files/${image}`}
          src={imageData}
          alt="Foto do prato"
        />
      </SkeletonCircle>

      <Heading
        fontFamily={"Poppins"}
        fontSize="24px"
        fontWeight={"700"}
        mt="16px"
        w="255px"
        noOfLines={1}
      >
        {name} {">"}
      </Heading>

      <Text
        mt="18px"
        w="220px"
        noOfLines={2}
        fontFamily={"Roboto"}
        fontWeight="400"
        fontSize={"14px"}
        textAlign="center"
      >
        {description}
      </Text>

      <Heading fontSize={"32px"} fontWeight="400" color={"#82F3FF"} mt="16px">
        R$ {price.toString().replace(".", ",")}
      </Heading>

      <HStack mt="17px" spacing="16px">
        <HStack spacing="5px" fontSize="20px">
          <ButtonText _hover={{ bgColor: "#c4c4cc5e" }} fontSize="20px">
            -
          </ButtonText>
          <Text>{quantity}</Text>
          <ButtonText _hover={{ bgColor: "#c4c4cc5e" }} fontSize="20px">
            +
          </ButtonText>
        </HStack>

        <ButtonPrimary>incluir</ButtonPrimary>
      </HStack>
    </Flex>
  );
}
