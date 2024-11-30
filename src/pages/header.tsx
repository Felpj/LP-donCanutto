// src/components/Header.tsx

import React from "react";
import { Box, Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <Box ref={ref} {...props} />
)));

const Header: React.FC = () => {
  return (
    <Box
      id="header"
      as="header"
      position="relative"
      height={{ base: "100vh", md: "80vh" }}
      bgSize={{ base: "contain", md: "cover" }}
      bgPosition={{ base: "top", md: "center" }}
      bg="#202024" // Cor personalizada diretamente aplicada
      width="100%"
      bgImage="url('/barberHero.jpg')"
      overflow="hidden"
    >
      {/* Barra de Navegação */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        py={4}
        px={8}
        display="flex"
        justifyContent="center"
        zIndex="3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HStack spacing={8}  color="white">
          <Link href="#header" _hover={{ textDecoration: "underline" }}>
            Início
          </Link>
          <Link href="#subscription" _hover={{ textDecoration: "underline" }}>
            Assinatura
          </Link>
          <Link href="#video" _hover={{ textDecoration: "underline" }}>
            Vídeo
          </Link>
          <Link href="#testimonials" _hover={{ textDecoration: "underline" }}>
            Depoimentos
          </Link>
          <Link href="#course" _hover={{ textDecoration: "underline" }}>
            Curso
          </Link>
        </HStack>
      </MotionBox>

      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)" // Preto com 60% de opacidade
        filter="blur(4px)" // Efeito de esfumaceamento
        zIndex="1"
      ></Box>

      {/* Conteúdo */}
      <VStack
        spacing={4}
        align="center"
        justify="center"
        height="100%"
        zIndex="2"
        color="white"
        position="relative"
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
          href="https://wa.me/5599999999999?text=ola%20Don%20Canutto%20quero%20agendar"
          target="_blank"
          rel="noopener noreferrer"
          bg="#161D6F" // Azul escuro
          color="white"
          size="lg"
          borderRadius="full"
          _hover={{ bg: "#1A202C" }} // Tom mais escuro no hover
        >
          Agende Agora no WhatsApp!
        </Button>
      </VStack>
    </Box>
  );
};

export default Header;
