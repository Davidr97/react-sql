import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";

const withErrorProcessQuestion = WrappedComponent => (

    function withErrorContainer(props){
        const {processQuestionError, processQuestion, question, forwardProps} = props;
        if(processQuestionError){
            return (
                <div>
                    <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
                    <div>
                        ERROR
                    </div>
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withErrorProcessQuestion;