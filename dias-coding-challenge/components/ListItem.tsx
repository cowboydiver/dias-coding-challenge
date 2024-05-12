import { Box, Card, Flex, Text } from "@chakra-ui/react";
import { useId } from "react";

interface ListItemProps {
    data: {
        [key: string]: string | number | undefined;
    };
}

export default function ListItem({ data }: ListItemProps) {
  return (
    <Card p="2">
      <Flex direction="row" w="100%" justify="space-between" gap="5">
        {Object.values(data).map((item, index) => (    
            <Box key={index} w="100%">
                <Text>{item}</Text>
            </Box>
        ))}
      </Flex>
    </Card>
  );
}