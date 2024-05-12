import SideMenuButton from "@/components/SideMenuButton";
import { Card, ChakraProvider, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dias Coding Challenge",
  description: "A coding challenge for Dias",
};

const MENU_ITEMS = [
  { url: "/admissions", label: "Admissions" },
  { url: "/journals", label: "Journals" },
  { url: "/", label: "Doctors" },
];

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
                <Flex direction="column" gap="5px" p="2">
                  {MENU_ITEMS.map((item, index) => (
                    <SideMenuButton key={index} url={item.url} label={item.label} />
                  ))}
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
