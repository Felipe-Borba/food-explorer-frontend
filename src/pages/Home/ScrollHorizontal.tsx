import { Button, ButtonProps, Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IconArrowLeft } from "../../components/icons/IconArrowLeft";
import { IconArrowRight } from "../../components/icons/IconArrowRight";
import { useDish } from "../../context/Dish";
import { Dish, DishType } from "../../context/Dish/types";
import { DishCard } from "./DishCard";

interface Props {
  type: DishType;
}
export function ScrollHorizontal({ type }: Props) {
  const { getDishList } = useDish();
  const [data, setData] = useState<Dish[]>([]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (!slider) return;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (!slider) return;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    async function fetch() {
      const data = await getDishList(type);
      setData(data);
    }

    fetch();
  }, []);

  if (!data.length) {
    return (
      <Flex my={3}>
        <Text color="#7C7C8A">Cardápio vazio</Text>
      </Flex>
    );
  }

  return (
    <Flex position="relative" justifyItems="center">
      <ButtonScroll
        left={0}
        bgGradient={"linear(to-l, transparent, #000A0F)"}
        onClick={slideLeft}
      >
        <IconArrowLeft boxSize="20px" />
      </ButtonScroll>

      <HStack
        spacing="27px"
        id="slider"
        w="80vw"
        overflowX={"scroll"}
        scrollBehavior={"smooth"}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {data.map((item, index) => (
          <DishCard
            key={index}
            description={item.description}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </HStack>
      <ButtonScroll
        right={0}
        bgGradient={"linear(to-r, transparent, #000A0F)"}
        onClick={slideRight}
      >
        <IconArrowRight boxSize="20px" />
      </ButtonScroll>
    </Flex>
  );

  function ButtonScroll({ children, ...rest }: ButtonProps) {
    return (
      <Button
        position="absolute"
        variant="unstyled"
        _hover={{
          cursor: "pointer",
          bgColor: "#00000057",
        }}
        w="116px"
        h="85%"
        zIndex={10}
        opacity={1}
        {...rest}
      >
        {children}
      </Button>
    );
  }
}
