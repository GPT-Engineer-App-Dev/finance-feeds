import { Container, Text, VStack, Heading, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Financial Times</Heading>
          <Text fontSize="lg">Your trusted source for financial news and insights.</Text>
        </Box>
        
        <Box>
          <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Market Trends</Heading>
              <Text mt={2}>Stay updated with the latest market trends and analysis.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Investment Tips</Heading>
              <Text mt={2}>Get expert advice on how to make smart investments.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Economic Insights</Heading>
              <Text mt={2}>In-depth analysis of the current economic landscape.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>Follow Us</Heading>
          <Flex justify="center" spacing={4}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;