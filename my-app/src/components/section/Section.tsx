import { Container } from "@mui/system";
import { useThemeContext } from "../../theme/ThemeContext";

type SectionType = {
  children: JSX.Element,
};

const Section = ({ children }: SectionType) => {
  const { theme } = useThemeContext();

  const containerStyle = {
    px: 2,
    mb: 7,
    [theme.breakpoints.up("sm")]: {
      px: 3,
      mb: 8,
    },
    [theme.breakpoints.up("md")]: {
      px: 4,
      mb: 10,
    },
    [theme.breakpoints.up("lg")]: {
      px: 19,
    },
  }

  return (
    <Container
      sx={containerStyle}
    >
      { children }
    </Container>
  );
};

export default Section