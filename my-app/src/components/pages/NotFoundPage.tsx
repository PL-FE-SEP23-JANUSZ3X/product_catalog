import { Stack, Typography } from "@mui/material";
import Section from "../section/Section";
import Eyes from "../eyes/Eyes";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  const buttonStyle = {
    color: 'secondary.main',
    '&:hover': {
      color: 'primary.main',
    },
  };

  return (
    <Section>
      <Stack flexDirection="column" alignItems="center" gap={4}>
        <Eyes />
        <Typography variant="h3" color="text.primary" align="center">Looks Like You're Lost</Typography>
        <Typography variant="h1" sx={{color: '#fed85d'}}>404</Typography>
        <Typography maxWidth={260} variant="body1" color="text.primary" align="center">That can happen when you follow a link to something that has since been deleted. Or the link was incorrect to begin with.</Typography>
        <Typography variant="button" to="/" component={NavLink} sx={buttonStyle}>Go to home page</Typography>
      </Stack>
    </Section>
  )
};

export default NotFoundPage;