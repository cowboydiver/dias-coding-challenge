import { Button, Card, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dias Coding Challenge",
  description: "A coding challenge for Dias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
            {/* Main Body */}
            <Flex h="100vh" w="100vw">
              {/* Navigation Bar */}
              <Card h="100%" w="250px">
                <Flex direction="column" gap="5px">
                  <Button>Admissions</Button>
                  <Button>Journals</Button>
                  <Button>Doctors</Button>
                </Flex>
              </Card>
              {/* Page Content */}
              <Flex direction="column" h="100%" w="100%">
                {children}
              </Flex>
            </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
