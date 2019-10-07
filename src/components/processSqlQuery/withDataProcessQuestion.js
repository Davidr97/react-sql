import React from 'react';
import ProcessQuestionFormPresenter from "./processQuestionFormPresenter";
import ExecuteSqlQuery from "../../configs/processSqlQuery/executeSqlQuery";

const withDataProcessQuestion = WrappedComponent => (

    function withDataContainer(props){
        const {processQuestionData, processQuestion, question, forwardProps} = props;
        if(processQuestionData){
            const sqlQuery = "SELECT * FROM MOVIES AS m where m.year > 1997";
            return (
                <div>
                    <ProcessQuestionFormPresenter processQuestion={processQuestion} question={question} forwardProps={forwardProps}/>
                    <div>
                        <ExecuteSqlQuery sqlQuery={sqlQuery}/>
                    </div>
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withDataProcessQuestion;