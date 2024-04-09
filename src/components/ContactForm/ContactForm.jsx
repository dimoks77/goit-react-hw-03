import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css'; 

const userScheme = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be at least 3 symb long")
        .required("This is a requarid field"),
    phone: Yup.string()
        .min(3, "Name must be at least 3 symb long")
        .required('This is a required field'),
});

export const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const phoneFieldId = useId();

    return ( 
    <Formik 
      initialValues={{
        username: '',
        phone: '',
    }}
    validationSchema={userScheme} 
    onSubmit={(values, actions) => {
        onAdd({ id: Date.now(), ...values});
        actions.reset.form;
    }}
    >
        <Form className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor={nameFieldId}>Name:</label>
                <Field className={css.field} type="text" name="name" id={nameFieldId} />
                <ErrorMessage name="name"  className={css.error} component="span" />
            </div>

             <div className={css.formGroup}>
                <label htmlFor={phoneFieldId}>Number:</label>
                <Field className={css.field} type="text" name="phone" id={phoneFieldId} />
                <ErrorMessage name="phone" className={css.error} component="span" />
            </div>

            <button className={css.button} type="submit">Add contact</button>
        </Form>
    </Formik>
    );
};

export default ContactForm;
