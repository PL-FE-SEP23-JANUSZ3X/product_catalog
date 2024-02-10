import { Container } from "@mui/system";
import { useThemeContext } from "../../theme/ThemeContext";

type SectionType = {
  children: JSX.Element,
};

const Section = ({ children }: SectionType) => {
  const { theme } = useThemeContext();

  return (
    <Container
      sx={{
        px: 2,
        my: 7,
        [theme.breakpoints.up("sm")]: {
          px: 3,
          my: 8,
        },
        [theme.breakpoints.up("md")]: {
          px: 4,
          my: 10,
        },
        [theme.breakpoints.up("lg")]: {
          px: 19,
        },
      }}
    >
      { children }
    </Container>
  );
};

export default Section