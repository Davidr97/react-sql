import React from 'react';
import ExecuteSqlQueryFormPresenter from "./executeSqlQueryFormPresenter";

const executeSqlQueryPresenter = ({executeSqlQuery, sqlQuery, forwardProps}) => (
    <div>
        <ExecuteSqlQueryFormPresenter executeSqlQuery={executeSqlQuery} sqlQuery={sqlQuery} forwardProps={forwardProps}/>
    </div>
);

export default executeSqlQueryPresenter;