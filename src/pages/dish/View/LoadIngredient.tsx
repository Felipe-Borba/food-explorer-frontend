import { Image, Text, VStack } from "@chakra-ui/react";

import alface from "../../../assets/images/pessego.png";
import ameixa from "../../../assets/images/ameixa.png";
import amendoas from "../../../assets/images/amendoas.png";
import aniz from "../../../assets/images/aniz.png";
import cafe from "../../../assets/images/cafe.png";
import camarao from "../../../assets/images/camarao.png";
import canela from "../../../assets/images/canela.png";
import claras from "../../../assets/images/claras.png";
import damasco from "../../../assets/images/damasco.png";
import farinha from "../../../assets/images/farinha.png";
import limao from "../../../assets/images/limao.png";
import maca from "../../../assets/images/maca.png";
import maracuja from "../../../assets/images/maracuja.png";
import massa from "../../../assets/images/massa.png";
import pao from "../../../assets/images/pao.png";
import paoNaan from "../../../assets/images/paoNaan.png";
import pepino from "../../../assets/images/pepino.png";
import pessego from "../../../assets/images/pessego.png";
import pesto from "../../../assets/images/pesto.png";
import presunto from "../../../assets/images/presunto.png";
import rabanete from "../../../assets/images/rabanete.png";
import rucula from "../../../assets/images/rucula.png";
import tomate from "../../../assets/images/tomate.png";
import whiskey from "../../../assets/images/whiskey.png";

export function LoadIngredient({ ingredient = "" }) {
  function container(name = "", image = "") {
    return (
      <VStack>
        <Image maxWidth="59.28px" maxHeight="59.28px" src={image} alt={name} />
        <Text fontWeight="400" fontSize={"18px"}>
          {name}
        </Text>
      </VStack>
    );
  }
  console.log(ingredient);

  switch (ingredient) {
    case "alface":
      return container(ingredient, alface);
    case "ameixa":
      return container(ingredient, ameixa);
    case "amêndoas":
      return container(ingredient, amendoas);
    case "aniz":
      return container(ingredient, aniz);
    case "café":
      return container(ingredient, cafe);
    case "camarão":
      return container(ingredient, camarao);
    case "canela":
      return container(ingredient, canela);
    case "claras":
      return container(ingredient, claras);
    case "damasco":
      return container(ingredient, damasco);
    case "farinha":
      return container(ingredient, farinha);
    case "limão":
      return container(ingredient, limao);
    case "maçã":
      return container(ingredient, maca);
    case "maracujá":
      return container(ingredient, maracuja);
    case "massa":
      return container(ingredient, massa);
    case "pao":
      return container(ingredient, pao);
    case "pao naan":
      return container(ingredient, paoNaan);
    case "pepino":
      return container(ingredient, pepino);
    case "pêssego":
      return container(ingredient, pessego);
    case "pesto":
      return container(ingredient, pesto);
    case "presunto":
      return container(ingredient, presunto);
    case "rabanete":
      return container(ingredient, rabanete);
    case "rúcula":
      return container(ingredient, rucula);
    case "tomate":
      return container(ingredient, tomate);
    case "whiskey":
      return container(ingredient, whiskey);
    default:
      return container(ingredient);
  }
}
