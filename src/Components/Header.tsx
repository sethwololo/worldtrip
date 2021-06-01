import { Flex, Box, IconButton, Img, useBreakpointValue } from '@chakra-ui/react';
import {FiChevronLeft} from 'react-icons/fi';
import Link from 'next/link';

export function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Flex as="header" w="100vw" px="4" h={['50px', '100px']}>
      <Flex maxW="1160" mx="auto" w="100%" align="center">
        {/* <IconButton 
            mr="4" size={isMobile ? 'sm' : 'md'} 
            aria-label="Voltar"
            icon={<FiChevronLeft size={24} />} 
            variant="ghost"
          /> */}
        <Link href="/">
          <Img src="/images/Logo.png" h={['20px', '46px']} justifySelf="center" mx="auto" cursor="pointer" />
        </Link>
      </Flex>
    </Flex>
  );
}