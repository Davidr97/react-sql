import React from 'react';
import postData from "../../utilities/postData";

const executeSqlQueryHoc = url =>
    WrappedComponent => (

        function executeSqlQueryHocContainer(props){

            const executeSqlQuery = query => postData(url, query);

            return (
                <WrappedComponent {...props} executeSqlQuery={executeSqlQuery}/>
            )
        }

    );

export default executeSqlQueryHoc;