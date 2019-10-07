import React from 'react';
import ExecuteSqlQueryForm from "./executeSqlQueryForm";

const executeSqlQueryFormPresenter = (props) => {
    const {executeSqlQuery, sqlQuery, forwardProps} = props;
    return (

        <div>
            Execute Sql Query
            <ExecuteSqlQueryForm executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
        </div>

    );
};

export default executeSqlQueryFormPresenter;