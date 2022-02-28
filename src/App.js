/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Demo from "./Demo";

const useStyles = makeStyles({
  container: {
    minHeight: "97vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  content: {
    flex: 1
  },
  footer: {
    display: "flex",
    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    flex: 0.1
  },
  title: {
    marginBottom: 20
  },
  link: {
    marginLeft: 10,
    color: "#33a024",
    letterSpacing: 0.6
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          Formik with Material UI Autocomplete
        </Typography>
        <Demo />
      </div>
      <div className={classes.footer}>
        <Typography>
          by
          <a href="https://github.com/tiavina-mika" className={classes.link}>
            Tiavina Michael Ralainirina
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default App;
