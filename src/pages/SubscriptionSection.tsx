// src/components/SubscriptionSection.tsx

import React from "react";
import {
  Box,
  Button,
  Grid,
  Icon,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaCut, FaMale } from "react-icons/fa"; // Exemplos de ícones
import { CheckIcon } from "@chakra-ui/icons";

const SubscriptionSection: React.FC = () => {
  return (
    <Box id="subscription" bg="#202024" color="white" py={16} px={8}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        {/* Coluna Esquerda */}
        <VStack align="start" spacing={6}>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            Cortes e Barbas Sempre em Dia com Economia e Praticidade!
          </Text>

          {/* Detalhes do Plano */}
          <VStack align="start" spacing={4}>
            <HStack>
              <Icon w={6} h={6} />
              <Text fontSize="lg">R$ 89/mês: Barba ilimitada.</Text>
            </HStack>
            <HStack>
              <Icon as={FaCut} w={6} h={6} />
              <Text fontSize="lg">R$ 99/mês: Corte de cabelo ilimitado.</Text>
            </HStack>
            <HStack>
              <Icon as={FaMale} w={6} h={6} />
              <Text fontSize="lg">
                R$ 169/mês: Combo completo de cabelo e barba ilimitados.
              </Text>
            </HStack>
          </VStack>

          {/* Benefícios Exclusivos */}
          <Box>
            <Text fontSize="xl" fontWeight="semibold" mb={2}>
              Benefícios Exclusivos:
            </Text>
            <VStack align="start" spacing={2}>
              <HStack>
                <CheckIcon color="green.400" />
                <Text>Serviços ilimitados.</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.400" />
                <Text>Atendimento VIP e personalizado.</Text>
              </HStack>
              <HStack>
                <CheckIcon color="green.400" />
                <Text>
                  Agendamento pelo WhatsApp automatizado: "Escolha seu
                  horário em segundos!"
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* Pagamento Simples */}
          <Box>
            <Text fontSize="lg">
              Pagamentos mensais via boleto bancário, com vencimento no dia 10.
            </Text>
          </Box>

          {/* CTA */}
          <Button
            as="a"
            href="https://wa.me/5599999999999?text=ola%20Don%20Canutto%20quero%20assinar"
            target="_blank"
            rel="noopener noreferrer"
            bg="#161D6F" // Cor personalizada diretamente aplicada
            color="white"
            size="lg"
            borderRadius="full"
            _hover={{ bg: "#1A202C" }} // Ajuste a cor conforme necessário
          >
            Quero Assinar Agora no WhatsApp!
          </Button>
        </VStack>

        {/* Coluna Direita */}
        <VStack
          align="start"
          spacing={6}
          mt={{ base: 8, md: 0 }}
          bg="#2D2E33"
          p={6}
          borderRadius="md"
        >
          <Text fontSize="xl" fontWeight="bold">
            Como Funciona o Agendamento pelo WhatsApp:
          </Text>
          <VStack align="start" spacing={4}>
            <HStack>
              <Box
                bg="blue.500"
                w={4}
                h={4}
                borderRadius="full"
              ></Box>
              <Text>Escolha seu plano preferido.</Text>
            </HStack>
            <HStack>
              <Box
                bg="blue.500"
                w={4}
                h={4}
                borderRadius="full"
              ></Box>
              <Text>Envie uma mensagem pelo WhatsApp.</Text>
            </HStack>
            <HStack>
              <Box
                bg="blue.500"
                w={4}
                h={4}
                borderRadius="full"
              ></Box>
              <Text>Confirme seu horário em segundos.</Text>
            </HStack>
          </VStack>
          {/* Aqui você pode adicionar um vídeo ou imagem explicativa */}
          <Box mt={4}>
            <Text fontSize="sm" color="gray.300">
              Disponibilidade em tempo real direto no seu celular!
            </Text>
          </Box>
        </VStack>
      </Grid>
    </Box>
  );
};

export default SubscriptionSection;
