import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";

const withErrorExecuteSqlQuery = WrappedComponent => (

    function withErrorContainer(props){
        const {executeSqlQueryError, executeSqlQuery, sqlQuery, forwardProps} = props;
        if(executeSqlQueryError){
            return (
                <div>
                    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                    <div>
                        ERROR
                    </div>
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withErrorExecuteSqlQuery;