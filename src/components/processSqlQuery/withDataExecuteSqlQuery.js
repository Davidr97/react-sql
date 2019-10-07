import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";
import DataTable from "./dataTable";

const withDataExecuteSqlQuery = WrappedComponent => (

    function withDataContainer(props){
        const {executeSqlQueryData, executeSqlQuery, sqlQuery, forwardProps} = props;
        if(executeSqlQueryData){
            return (
                <div>
                    <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
                    <DataTable data={executeSqlQueryData}/>
                </div>
            )
        }
        return <WrappedComponent {...props}/>
    }

);

export default withDataExecuteSqlQuery;