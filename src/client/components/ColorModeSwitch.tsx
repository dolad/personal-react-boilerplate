import { Switch, useColorMode, Flex, FlexProps, Box } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon } from 'react-icons/fa';

const gray = 'gray.500';
const yellow = 'yellow.500';

function useThemeMeta() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightTheme = colorMode === 'light';
  const isChecked = !isLightTheme;

  const sunColor = isLightTheme ? yellow : gray;
  const sunLabel = isLightTheme ? 'is-light-theme' : 'set-light-theme';

  const switchLabel = isLightTheme ? 'set-dark-theme' : 'set-light-theme';

  const moonColor = isLightTheme ? gray : yellow;
  const moonLabel = isLightTheme ? 'set-dark-theme' : 'is-dark-theme';

  return {
    isChecked,
    moonColor,
    moonLabel,
    sunColor,
    sunLabel,
    switchLabel,
    toggleColorMode,
  };
}

export type ColorModeSwitchAltProps = FlexProps;

export function ColorModeSwitch(props: ColorModeSwitchAltProps) {
  const { t } = useTranslation('theme');

  const {
    toggleColorMode,
    isChecked,
    sunColor,
    sunLabel,
    switchLabel,
    moonColor,
    moonLabel,
  } = useThemeMeta();

  return (
    <Flex cursor="pointer" d="inline-flex" {...props}>
      <Box
        d="inline-block"
        as={FaSun}
        focusable={false}
        height="6"
        color={sunColor}
        data-testid="theme-switch-sun"
        onClick={toggleColorMode}
        aria-label={t(sunLabel)}
      />
      <Flex
        as={Switch}
        aria-label={t(switchLabel)}
        isChecked={isChecked}
        onChange={toggleColorMode}
        alignItems="center"
        marginLeft="2"
        marginRight="2"
      />
      <Box
        d="inline-block"
        as={FaMoon}
        focusable={false}
        height="6"
        color={moonColor}
        data-testid="theme-switch-moon"
        onClick={toggleColorMode}
        aria-label={t(moonLabel)}
      />
    </Flex>
  );
}
