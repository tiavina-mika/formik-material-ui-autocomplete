/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Form, Formik } from "formik";
import { Button, FormControl, makeStyles } from "@material-ui/core";

const ingredients = [
  { name: "Salt", objectId: "objectId1" },
  { name: "Oil", objectId: "objectId2" }
];

const useStyles = makeStyles({
  buttons: {
    marginTop: 20
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
    <Formik initialValues={{ ingredient: "" }} onSubmit={_onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <FormControl>
              <Autocomplete
                id="ingredient"
                name="ingredient"
                options={ingredients}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                onChange={(_, value) => setIngredientId(value.objectId)}
                getOptionSelected={(option, value) =>
                  option.name === value.name
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Ingredient"
                    value={values.ingredient}
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default Demo;
