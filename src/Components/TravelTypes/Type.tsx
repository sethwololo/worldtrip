import { useBreakpointValue, Flex, Img, Text } from "@chakra-ui/react";

interface TypeProps {
  iconSrc: string;
  text: string;
}

export function Type({ iconSrc, text }: TypeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  
  return (
    <Flex justifyContent="center" textAlign="center" direction={["row", "column"]}>
      {!isMobile && <Img src={iconSrc} w={[null, null, "64px", "84px"]} mx="auto" />}
      <Text fontSize={["lg", "2xl"]} fontWeight="semibold">
        {isMobile && <Text color="yellow.500" fontSize="4xl" display="inline-block">.</Text>}
        {' '} {text}
        </Text>
    </Flex>
  );
}