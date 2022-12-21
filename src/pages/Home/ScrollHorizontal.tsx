import { Button, ButtonProps, Flex, HStack } from "@chakra-ui/react";
import { DishCard } from "./DishCard";
import { IconArrowLeft } from "../../components/icons/IconArrowLeft";
import { IconArrowRight } from "../../components/icons/IconArrowRight";

export function ScrollHorizontal() {
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

  const data = Array(20).fill(0);
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
          <DishCard key={index} />
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
