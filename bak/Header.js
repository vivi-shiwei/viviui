/** @jsx jsx */
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Link,
  Stack,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import Logo from "./Logo";
import GitHubButton from "./GitHubButton";
// import { Container } from "../pages";
import { StorybookIcon } from "./Storybook-icon";
import {
  Header as HeaderContainer,
  GithubLink,
  StorybookLink,
} from "./DocsHeader";
import SponsorButton from "./SponsorButton";


const Container = props => (
  <Box width="full" maxWidth="1280px" mx="auto" px={6} {...props} />
);

const Header = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: "white", dark: "gray.800" };
  return (
    <HeaderContainer bg={bg[colorMode]} >
      <Container h="100%">
        <Flex
          size="100%"
          px={["0", "0", "6"]}
          align="center"
          justify="space-between"
        >
          <Box display="flex" alignItems="center">
            <Logo logo={props.logo} />
            <Box ml="5" mb="-8px" display={["none", "flex"]}>
              <GitHubButton title={props.title} href={props.href} />
            </Box>
          </Box>
          <Flex
            flex={{ sm: "1", md: "none" }}
            ml={5}
            align="center"
            color="gray.500"
            justify="flex-end"
          >
            <SponsorButton mr="4" />
            <Stack align="center" isInline spacing="3">
              <GithubLink github={props.github} />
              <StorybookLink storybook={props.storybook} />
            </Stack>
            <IconButton
              aria-label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
                } mode`}
              variant="ghost"
              color="current"
              ml="2"
              fontSize="20px"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? "moon" : "sun"}
            />
          </Flex>
        </Flex>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
