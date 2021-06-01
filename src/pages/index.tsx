import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../Components/Header';
import { Banner } from '../Components/Banner';
import { TravelTypes } from '../Components/TravelTypes';
import { Divider } from '../Components/Divider';



export default function Home() {

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Header />
      <Box as="main" w="100vw">
        <Banner />

        <Box maxW={1240} mx="auto">
          <TravelTypes />
          <Divider />
        </Box>
      </Box>
    </>
  )
}
