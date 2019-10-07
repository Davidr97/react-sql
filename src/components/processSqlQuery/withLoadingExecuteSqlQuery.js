import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";

const withLoadingExecuteSqlQuery = WrappedComponent => (

    function withLoadingContainer(props){
        const {executeSqlQueryLoading, executeSqlQuery, sqlQuery, forwardProps} = props;
        if(executeSqlQueryLoading){
            return (
                <div>
                    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                    <div>
                        LOADING
                    </div>
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withLoadingExecuteSqlQuery;