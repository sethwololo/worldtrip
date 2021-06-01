import { useBreakpointValue, Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";


export function TravelTypes() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Grid 
      templateColumns={["1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mx="auto"
      my={["9", "20"]}
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Type iconSrc="/images/cocktail.svg" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Type iconSrc="/images/surf.svg" text="praia" />
      </GridItem>
      <GridItem>
        <Type iconSrc="/images/building.svg" text="moderno" />
      </GridItem>
      <GridItem>
        <Type iconSrc="/images/museum.svg" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 1]}>
        <Type iconSrc="/images/earth.svg" text="e mais..." />
      </GridItem>
    </Grid>
  );
}