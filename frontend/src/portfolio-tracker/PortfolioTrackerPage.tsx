// HomePage.tsx
import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f7fc",
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#2a3d66",
    marginBottom: "20px",
  },
  tagline: {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#5f6368",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1.1rem",
    padding: "10px 20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#2a3d66",
  },
});

export const PortfolioTrackerPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.icon}>
        <span role="img" aria-label="money bag">
          💰
        </span>
      </Box>
      <Typography className={classes.title}>
        Welcome to Your Future Portfolio
      </Typography>
      <Typography className={classes.tagline}>
        Track your investments with ease and watch your wealth grow!
      </Typography>
      <Button className={classes.button} variant="contained">
        Get Started
      </Button>
    </Container>
  );
};
