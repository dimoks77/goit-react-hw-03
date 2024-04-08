import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css'; 

const userScheme = Yup.object().shape({
    username: Yup.string()
        .min(3, "Name must be at least 3 symb long")
        .required("This is a requarid field"),
    access: Yup.string()
        .oneOf(['r','w','m'], 'Access must be w r or m')
        .required('This is a required field'),
});

export const ContactForm = ({ onAdd }) => {
    const nameFieldId = useId();
    const accessFieldId = useId();

    return ( 
    <Formik 
      initialValues={{
        username: 'example',
        access: 'r',
    }}
    validationSchema={userScheme} 
    onSubmit={(values, actions) => {
        onAdd({ id: Date.now(), ...values});
        actions.reset.form;
    }}
    >
        <Form className={css.form}>
            <div className={css.formGroup}>
                <label htmlFor={nameFieldId}>Username:</label>
                <Field type="text" name="username" id={nameFieldId} />
                <ErrorMessage name="username"  className={css.error} component="span" />
            </div>

             <div className={css.formGroup}>
                <label htmlFor={accessFieldId}>Access:</label>
                <Field as="select" name="access" id={accessFieldId}>
                    <option value="r">Read</option>
                    <option value="w">Write</option>
                    <option value="m">Maintain</option>
                </Field>
                <ErrorMessage name="access" className={css.error} component="span" />
            </div>

            <button type="submit">Add user</button>
        </Form>
    </Formik>
    );
};

export default ContactForm;
