/** @jsx jsx */
import { Box } from "@chakra-ui/core";
import { jsx } from "@emotion/core";

const GitHubButton = ({ title, href }) => (
  <Box
    as="a"
    className="github-button"
    href={href}
    data-icon="octicon-star"
    data-size="large"
    data-show-count="true"
    aria-label="Star Chakra UI on GitHub"
  >
    {title}
  </Box>
);

export default GitHubButton;
