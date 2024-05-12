import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Card, Flex, Text, theme } from "@chakra-ui/react";
import ListItem from "@/components/ListItem";
import { DOCTORS } from "@/types/doctor";
import DefaultPageLayout from "@/components/DefualtPageLayout";

export default function Home() {
  return (
    <DefaultPageLayout>
      <Flex direction="column" gap="2">
        {Object.values(DOCTORS).map((doctor, index) => (
          <ListItem key={index} data={doctor} /> 
        ))}
      </Flex>
      
    </DefaultPageLayout>
  );
}
