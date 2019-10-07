import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";

const processQuestionPresenter = ({processQuestion, question, forwardProps}) => (
    <div>
        <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
    </div>
);

export default processQuestionPresenter;