import React from 'react';
import {Formik, Form, Field} from 'formik';
import executeSqlQueryValidationSchema from "../../configs/processSqlQuery/executeSqlQueryValidationSchema";

const executeSqlQueryForm = (props) => (
    <div>
        <Formik
            initialValues={{
                query:props.sqlQuery ? props.sqlQuery : ''
            }}
            validationSchema={executeSqlQueryValidationSchema}
            onSubmit={values => {
                const {executeSqlQuery, forwardProps} = props;
                const prevProps = {
                    sqlQuery : values.query
                };
                forwardProps(prevProps);
                executeSqlQuery(values.query);
            }}>
            {({errors, touched}) => (
                <Form>
                    <Field name="query" component="textarea"/>
                    {errors.query && touched.query ? (
                        <div>{errors.query}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);


export default executeSqlQueryForm;