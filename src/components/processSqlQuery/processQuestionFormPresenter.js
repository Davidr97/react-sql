import React from 'react';
import ProcessQuestionForm from "./processQuestionForm";

const processQuestionFormPresenter = ({processQuestion, question, forwardProps}) => (

    <div>
        Process Question
        <ProcessQuestionForm processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
    </div>

);

export default processQuestionFormPresenter;