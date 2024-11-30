// src/components/CourseSection.tsx

import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Stack,
  Icon,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaChalkboardTeacher } from "react-icons/fa";

const MotionBox = motion(React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <Box ref={ref} {...props} />
  )));
const MotionText = motion(React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <Text ref={ref} {...props} />
  )));
const MotionButton = motion(React.forwardRef<HTMLDivElement, any>((props) => (
    <Button  {...props} />
  )));

const CourseSection: React.FC = () => {
  return (
    <Box id="course" bg="#2D2E33" color="white" py={16} px={8}>
      <VStack spacing={12} align="center">
        {/* Título da Seção */}
        <MotionText
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          textAlign="center"
        >
          Curso de Barbeiro Profissional
        </MotionText>

        {/* Descrição do Curso */}
        <MotionText
          fontSize={{ base: "md", md: "lg" }}
          textAlign="center"
          maxW="800px"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Aprenda as técnicas mais avançadas de corte de cabelo e barba com instrutores experientes. Nosso curso é projetado para transformar você em um barbeiro profissional, oferecendo conhecimento teórico e prático.
        </MotionText>

        {/* Conteúdo do Curso */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          align="center"
          width="100%"
          maxW="1200px"
        >
          {/* Módulos do Curso */}
          <MotionBox
            flex="1"
            bg="#202024" // Utiliza o cinza escuro para os cards
            p={6}
            borderRadius="md"
            boxShadow="lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Text fontSize="xl" fontWeight="semibold" mb={4}>
              O Que Você Vai Aprender
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.400" />
                Fundamentos do Corte de Cabelo
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.400" />
                Técnicas Avançadas de Barba e Bigode
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.400" />
                Estilização e Produtos de Qualidade
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.400" />
                Atendimento ao Cliente e Gestão de Negócios
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="yellow.400" />
                Prática Supervisionada
              </ListItem>
            </List>
          </MotionBox>

          {/* Imagem ou Vídeo */}
          <MotionBox
            flex="1"
            bg="gray.700" // Cor de fundo complementar para contraste
            p={6}
            borderRadius="md"
            boxShadow="lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Substitua por uma imagem ou vídeo relacionado ao curso */}
            <Box
              bgImage="url('/images/course-image.jpg')"
              bgSize="cover"
              bgPosition="center"
              width="100%"
              height={{ base: "200px", md: "300px" }} // Ajuste de altura responsivo
              borderRadius="md"
            />
          </MotionBox>
        </Stack>

        {/* Instrutor do Curso */}
        <MotionBox
          width="100%"
          maxW="800px"
          bg="#202024" // Utiliza o cinza escuro para destacar o instrutor
          p={6}
          borderRadius="md"
          boxShadow="lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <HStack spacing={4}>
            <Icon as={FaChalkboardTeacher} w={8} h={8} color="#161D6F" /> {/* Azul escuro para o ícone */}
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                Don Canutto
              </Text>
              <Text fontSize="sm" color="gray.300">
                Instrutor Certificado com 10 anos de experiência em barbearias renomadas.
              </Text>
            </VStack>
          </HStack>
        </MotionBox>

        {/* Chamada para Ação */}
        <MotionButtonCTA />
      </VStack>
    </Box>
  );
};

// Componente de Botão CTA com Animação
const MotionButtonCTA: React.FC = () => {
  return (
    <MotionButton
      as="a"
      href="https://wa.me/5599999999999?text=ola%20Don%20Canutto%20quero%20inscrever%20no%20curso"
      target="_blank"
      rel="noopener noreferrer"
      bg="#161D6F" // Azul escuro como cor de fundo
      color="white"
      size="lg"
      borderRadius="full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      _hover={{ bg: "#1A202C" }} // Tom mais escuro no hover
    >
      Inscreva-se Agora!
    </MotionButton>
  );
};

export default CourseSection;
