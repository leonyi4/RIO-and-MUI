import { Container, Fade, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
const Section = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Container
      sx={{
        height: "100vh",
        "background-color": "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={inView}>
        <Container sx={{ maxWidth: "500px", margin: "auto" }} ref={ref}>
          <Typography variant="h4" component="div" sx={{ color: "red" }}>
            Wikipedia has received praise for its enablement of the
            democratization of knowledge, extent of coverage, unique structure,
            culture, and reduced degree of commercial bias; but criticism for
            exhibiting systemic bias, particularly gender bias against women and
            alleged ideological bias.[11][12] The reliability of Wikipedia was
            frequently criticized in the 2000s, but has improved over time, as
            Wikipedia has been generally praised in the late 2010s and early
            2020s
          </Typography>
        </Container>
      </Fade>
    </Container>
  );
};

export default Section;
