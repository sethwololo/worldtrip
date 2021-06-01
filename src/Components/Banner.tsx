import { Flex, Box, VStack, Heading, Text, Img, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';

export function Banner() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex
      w="100%"
      h={["163px", "335px"]}
      bgImage="url('/images/BannerBg.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      px="4"
    >
      <Flex maxW={1240} w="100%" mx="auto" align="center">
        <Box color="gray.50" mr="auto" maxW="524px">
          <Heading fontSize={["xl", "4xl"]} fontWeight="medium">
            5 Continentes, <br />infinitas possibilidades.
          </Heading>
          <Text fontSize={["sm", "xl"]} fontWeight="normal" mt="20px" >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {!isMobile && <Img src="/images/Airplane.svg" pt="24"/>}
      </Flex>
    </Flex>
  );
}