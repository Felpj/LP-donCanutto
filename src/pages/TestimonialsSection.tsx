// src/components/TestimonialsSection.tsx

import React from "react";
import {
    Box,
    Text,
    VStack,
    HStack,
    Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";

interface Testimonial {
    name: string;
    feedback: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "João Silva",
        feedback: "Excelente atendimento e corte perfeito! Recomendo a todos.",
        avatar: "/images/joao.jpg",
        rating: 5,
    },
    {
        name: "Maria Oliveira",
        feedback: "Serviço de barbearia impecável. Ambiente agradável e profissionais qualificados.",
        avatar: "/images/maria.jpg",
        rating: 5,
    },
    {
        name: "Carlos Souza",
        feedback: "Cortes modernos e atendimento personalizado. Fiquei muito satisfeito!",
        avatar: "/images/carlos.jpg",
        rating: 4,
    },
    // Adicione mais depoimentos conforme necessário
];

const MotionBox = motion(React.forwardRef<HTMLDivElement, any>((props, ref) => (
    <Text ref={ref} {...props} />
)));

const TestimonialsSection: React.FC = () => {
    

    return (
        <Box id="testimonials" bg="#202024" color="white" py={16} px={8}>
            <VStack spacing={8} align="center">
                {/* Título da Seção */}
                <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
                    O Que Nossos Clientes Dizem
                </Text>

                {/* Depoimentos */}
                <HStack
                    spacing={8}
                    flexWrap="wrap"
                    justify="center"
                    width="100%"
                >
                    {testimonials.map((testimonial, index) => (
                        <MotionBox
                            key={index}
                            bg="#2D2E33"
                            borderRadius="md"
                            boxShadow="lg"
                            p={6}
                            maxW="sm"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <VStack spacing={4} align="start">
                                {/* Avatar do Cliente */}
                                <Avatar src={testimonial.avatar} name={testimonial.name} size="lg" />

                                {/* Feedback do Cliente */}
                                <Text fontSize="md" fontStyle="italic">
                                    "{testimonial.feedback}"
                                </Text>

                                {/* Nome do Cliente */}
                                <Text fontWeight="bold">{testimonial.name}</Text>

                                {/* Avaliação (Estrelas) */}
                                <HStack>
                                    {Array(5)
                                        .fill("")
                                        .map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                color={i < testimonial.rating ? "yellow.400" : "gray.300"}
                                            />
                                        ))}
                                </HStack>
                            </VStack>
                        </MotionBox>
                    ))}
                </HStack>
            </VStack>
        </Box>
    );
};

export default TestimonialsSection;
