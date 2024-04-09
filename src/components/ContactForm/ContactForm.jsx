import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactScheme = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("This is a requarid field"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("This is a required field"),
});

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactScheme}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={css.error} component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={numberFieldId}>Number:</label>
          <Field className={css.field} type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" className={css.error} component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
