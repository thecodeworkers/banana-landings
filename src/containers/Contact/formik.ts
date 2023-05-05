import { useFormik } from 'formik';
import * as Yup from 'yup';

export const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const FormikConfig = (handleSubmit: any) =>
  useFormik({
    initialValues: {
      company: '',
      email: '',
      subject: '',
    },

    validationSchema: Yup.object({
      company: Yup.string()
        .required('Campo requerido')
        .min(3, `Este campo debe poseer un minimo de ${3} caracteres `)
        .max(255, `Este campo no debe tener más de ${255} caracteres`),
      email: Yup.string()
        .required('Campo requerido')
        .matches(emailRegex, 'Ingrese un formato válido, por ejemplo email@gmail.com'),
      subject: Yup.string()
        .required('Campo requerido')
        .min(3, `Este campo debe poseer un minimo de ${3} caracteres `)
        .max(255, `Este campo no debe tener más de ${255} caracteres`),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
