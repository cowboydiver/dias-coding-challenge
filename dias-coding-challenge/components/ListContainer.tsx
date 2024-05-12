import { Flex } from "@chakra-ui/react";

interface ListContainerProps {
    children: React.ReactNode;
}   

export default function ListContainer({ children }: ListContainerProps) {
    return (
        <Flex direction="column" gap="2">{children}</Flex>
    );
}