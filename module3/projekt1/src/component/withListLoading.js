import React from "react";

function withListLoading(Component) {
    return function withLoadingComponent({ isLoading, ...props}) {
        if(!isLoading){
            return <Component {...props}/>
        }
        return(
                <p>Подождите, запрос выполняется</p>
                )
    }
}

export default withListLoading;