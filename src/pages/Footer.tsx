// src/components/Footer.tsx

import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const MotionBox = motion(React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <Box ref={ref} {...props} />
  )));


const Footer: React.FC = () => {
  return (
    <MotionBox
      bg="#202024" // Cinza mais escuro
      color="white"
      py={12}
      px={8}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <VStack spacing={8} align="center">
        {/* Resumo da Marca */}
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" textAlign="center">
          Don Canutto - Transformando Seu Estilo com Excelência
        </Text>

        {/* Informações de Contato */}
        <HStack spacing={8} flexWrap="wrap" justify="center">
          {/* Endereço */}
          <HStack>
            <FaMapMarkerAlt />
            <Text>Rua das Barbearias, 123 - São Paulo, SP</Text>
          </HStack>

          {/* Telefone */}
          <HStack>
            <FaPhoneAlt />
            <Text>(11) 99999-9999</Text>
          </HStack>

          {/* E-mail */}
          <HStack>
            <FaEnvelope />
            <Text>contato@doncanutto.com.br</Text>
          </HStack>
        </HStack>

        {/* Links Úteis */}
        <HStack spacing={8} flexWrap="wrap" justify="center">
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

        {/* Redes Sociais */}
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            color="white"
            _hover={{ color: "blue.500" }}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            color="white"
            _hover={{ color: "pink.500" }}
          />
          <IconButton
            as="a"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            color="white"
            _hover={{ color: "blue.300" }}
          />
          <IconButton
            as="a"
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            variant="ghost"
            color="white"
            _hover={{ color: "green.400" }}
          />
        </HStack>

        {/* Direitos Autorais */}
        <Text fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Don Canutto. Todos os direitos reservados.
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default Footer;
