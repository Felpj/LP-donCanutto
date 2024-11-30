// src/components/VideoSection.tsx

import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(
    React.forwardRef<HTMLDivElement, any>((props, ref) => (
      <Text ref={ref} {...props} />
    ))
  );

const VideoSection: React.FC = () => {
  return (
    <Box id="video" bg="#2D2E33" color="white" py={16} px={8}>
      <VStack spacing={8} align="center">
        {/* Vídeo */}
        <Box position="relative" width="100%" maxWidth="800px">
          <video
            src="/video/explicativo.mp4" // Substitua pelo caminho do seu vídeo
            controls
            width="100%"
          >
            Seu navegador não suporta vídeos.
          </video>

          {/* Legendas Dinâmicas */}
          <Box
            position="absolute"
            top="10%"
            left="50%"
            transform="translateX(-50%)"
            textAlign="center"
            width="80%"
          >
            <MotionText
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              "Aqui no Don Canutto, criamos o plano perfeito para você cuidar do seu estilo com economia e praticidade."
            </MotionText>
          </Box>
        </Box>

        {/* Destaques dos Planos */}
        <VStack spacing={4} align="center">
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Por apenas <b>R$ 99/mês</b>, corte o cabelo quantas vezes quiser.
          </MotionText>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Barba ilimitada por <b>R$ 89/mês</b>.
          </MotionText>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Combo completo de cabelo e barba ilimitados por <b>R$ 169/mês</b>.
          </MotionText>
          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            Escolha seus horários com apenas alguns toques no WhatsApp. É rápido, prático e sem complicação!
          </MotionText>
        </VStack>

        {/* Chamada para Ação */}
        <Box mt={8}>
          <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Clique no botão abaixo e venha fazer parte do time VIP Don Canutto!
          </Text>
          <HStack spacing={4} mt={4}>
            <ButtonCTA />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

// Componente de Botão CTA
const ButtonCTA: React.FC = () => {
  return (
    <Button
      as="a"
      href="https://wa.me/5599999999999?text=ola%20Don%20Canutto%20quero%20agendar"
      target="_blank"
      rel="noopener noreferrer"
      bg="#161D6F"
      color="white"
      size="lg"
      borderRadius="full"
      _hover={{ bg: "#1A202C" }}
    >
      Agende Agora no WhatsApp!
    </Button>
  );
};

export default VideoSection;
