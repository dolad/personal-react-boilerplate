import { useColorMode, Box, Button, ButtonProps } from '@chakra-ui/core';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';

import theme from '../../../theme';

export default function ThemeSwitchAlt(props: Omit<ButtonProps, 'children'>) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation('theme');

  const isLightTheme = colorMode === 'light';

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={isLightTheme ? theme.colors.white : theme.colors.gray[800]}
        />
      </Head>
      <Button
        type="button"
        onClick={toggleColorMode}
        variant={isLightTheme ? 'outline' : undefined}
        role="checkbox"
        aria-checked={!isLightTheme}
        aria-label={t(isLightTheme ? 'set-dark-theme' : 'set-light-theme')}
        border="none"
        background="none"
        _hover={{ backgroundColor: isLightTheme ? 'gray.300' : 'gray.600' }}
        {...props}
      >
        <Box
          as={isLightTheme ? FaSun : FaMoon}
          aria-hidden="true"
          color="yellow.500"
        />
      </Button>
    </>
  );
}