import { Box, Card, Flex, Text, theme } from "@chakra-ui/react";

interface DefaultPageLayoutProps {
    header?: string;
    children: React.ReactNode;
}

export default function DefaultPageLayout({ children, header }: DefaultPageLayoutProps) {
    return (
        <Flex direction="column" p="5" bg={theme.colors.gray[200]} h="100%" overflowY="scroll">
            <Text fontSize="2xl" fontWeight="bold" mb="5">{header}</Text>
            {children}
        </Flex>
    )
}