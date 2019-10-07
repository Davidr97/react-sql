import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";

const withLoadingProcessQuestion = WrappedComponent => (

        function withLoadingContainer(props){
            const {processQuestionLoading, processQuestion, question, forwardProps} = props;
            if(processQuestionLoading){
                return (
                    <div>
                        <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
                        <div>
                            LOADING
                        </div>
                    </div>
                )
            }
            return <WrappedComponent {...props}/>
        }

);

export default withLoadingProcessQuestion;