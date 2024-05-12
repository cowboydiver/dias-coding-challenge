import { Box, Card, Flex, SlideFade, Text } from "@chakra-ui/react";

interface ListItemProps {
    data: {
        [key: string]: string | number | undefined;
    };
}

export default function ListItem({ data }: ListItemProps) {
  return (
    <SlideFade in={true}>
        <Card p="2">
            <Flex direction="row" w="100%" justify="flex-start" gap="5">
                {Object.values(data).map((item, index) => (    
                    <Box key={index} w="100%">
                        <Text>{item}</Text>
                    </Box>
                ))}
            </Flex>
        </Card>
    </SlideFade>
  );
}