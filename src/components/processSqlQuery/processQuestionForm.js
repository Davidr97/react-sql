import React from 'react';
import {Formik, Form, Field} from 'formik';
import processQuestionValidationSchema from "../../configs/processSqlQuery/processQuestionValidationSchema";

const processQuestionForm = (props) => (
    <div>
        <Formik
            initialValues={{
                question: props.question ? props.question : ''
            }}
            validationSchema={processQuestionValidationSchema}
            onSubmit={values => {
                const {processQuestion, forwardProps} = props;
                const prevProps = {
                    question: values.question
                };
                forwardProps(prevProps);
                processQuestion(values.question);
            }}>
            {({errors, touched}) => (
                <Form>
                    <Field name="question" component="textarea"/>
                    {errors.question && touched.question ? (
                        <div>{errors.question}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default processQuestionForm;