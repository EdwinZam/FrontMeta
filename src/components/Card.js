import { Card, CardBody, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CustomCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card
      borderRadius="lg" // Bordes redondeados
      overflow="hidden" // Oculta contenido que sobrepasa el contenedor
      boxShadow="md" // Sombra alrededor de la tarjeta
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }} // Efecto hover
    >
      {/* Imagen en la parte superior */}
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />

      {/* Contenido principal de la tarjeta */}
      <CardBody>
        <VStack align="start" spacing={4}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text color="gray.600">{description}</Text>
          
          {/* Enlace con ícono de flecha */}
          <HStack spacing={2} align="center" color="blue.500">
            <Text fontWeight="bold">Learn More</Text>
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CustomCard;
