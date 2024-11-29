import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      position="relative"
      height="100vh"
      bg="black"
      overflow="hidden"
    >
      {/* Fundo com vídeo looping */}
      <Box
        as="video"
        position="absolute"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-1}
      >
        <source src="/video/barbearia.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </Box>

      {/* Conteúdo */}
      <VStack
        align="center"
        justify="center"
        height="100%"
        zIndex={1}
        color="white"
        textAlign="center"
        px={4}
      >
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Transforme Seu Estilo com Cortes e Barbas Ilimitados Todo Mês!
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }}>
          Agendamento fácil, rápido e automatizado pelo nosso WhatsApp!
        </Text>
        <Button
          as="a"
          colorScheme="blue"
          bg="#161D6F"
          color="white"
          size="lg"
          borderRadius="full"
          _hover={{ bg: "blue.700" }}
        >
          Agende Agora no WhatsApp!
        </Button>
      </VStack>
    </Box>
  );
};

export default Header;
