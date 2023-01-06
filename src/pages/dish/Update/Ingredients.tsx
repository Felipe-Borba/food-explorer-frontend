import {
  Box,
  Flex, HStack, Input, Text
} from "@chakra-ui/react";
import { useState } from "react";
import { IconClose } from "../../../components/icons/IconClose";
import { IconPlus } from "../../../components/icons/IconPlus";

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
      <Text
        fontSize="16px"
        fontFamily="Roboto"
        fontWeight="400"
        color="#C4C4CC"
      >
        Ingredientes
      </Text>

      <HStack gap="16px" borderWidth="1px" borderRadius="8px" p="8px" h="48px">
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
                cursor="pointer" />
            </Box>
          );
        })}

        <Flex
          alignItems="center"
          borderStyle="dashed"
          borderWidth="1px"
          borderColor="#7C7C8A"
          borderRadius="8px"
          py="7px"
          px="16px"
          w="130px"
        >
          <Input
            variant="unstyled"
            placeholder="Adicionar"
            value={tag}
            onChange={(e) => setTag(e.target.value)} />
          <IconPlus onClick={handleAddTag} cursor="pointer" />
        </Flex>
      </HStack>
    </Flex>
  );
}
