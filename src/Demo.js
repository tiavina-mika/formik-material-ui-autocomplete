/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Form, Formik } from "formik";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles
} from "@material-ui/core";

const ingredients = [
  { name: "Salt", objectId: "objectId1" },
  { name: "Oil", objectId: "objectId2" }
];

const useStyles = makeStyles({
  buttons: {
    marginTop: 20
  },
  formContainer: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    background: "#fff",
    padding: 10
  }
});

const Demo = () => {
  const classes = useStyles();
  const [ingredientId, setIngredientId] = useState("");

  const _onSubmit = (values) => {
    const newValues = { ...values, ingredient: ingredientId };
    console.log("values: ", newValues);
  };

  return (
    <Formik initialValues={{ ingredient: "", name: "" }} onSubmit={_onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={classes.formContainer}>
              <FormControl>
                <TextField
                  name="name"
                  inputProps={{
                    placeholder: "Nom de l'article"
                  }}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormControl>
              <FormControl>
                <Autocomplete
                  id="ingredient"
                  name="ingredient"
                  options={ingredients}
                  getOptionLabel={(option) => option.name}
                  loading
                  onChange={(_, value) => setIngredientId(value.objectId)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Ingredient"
                      value={values.ingredient}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {true ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        )
                      }}
                    />
                  )}
                />
              </FormControl>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  ENREGISTRER
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Demo;
