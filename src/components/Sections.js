import { Container, Fade, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import Section from "./Section";
const Sections = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <Container
        sx={{
          height: "100vh",
          "background-color": "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={inView}>
          <Container sx={{ maxWidth: "500px", margin: "auto" }} ref={ref}>
            <Typography
              align="center"
              component="div"
              variant="h1"
              sx={{ color: "blue" }}
            >
              {`da ${inView}`}
            </Typography>
          </Container>
        </Fade>
      </Container>
      <Section />
    </>
  );
};

export default Sections;
