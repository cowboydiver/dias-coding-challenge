import { Box, Card, theme } from "@chakra-ui/react";

interface DefaultPageLayoutProps {
    children: React.ReactNode;
}

export default function DefaultPageLayout({ children }: DefaultPageLayoutProps) {
    return <Box p="5" bg={theme.colors.gray[200]}>
        {children}
    </Box>
}