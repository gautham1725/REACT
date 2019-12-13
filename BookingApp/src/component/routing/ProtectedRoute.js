import React from 'react'
import {Route , Redirect} from 'react-router-dom'

export const ProtectedRoute = ( {component:Component, ...rest} )  => {
    return (
        <div>
            <Route {...rest} 
                render={
                    (props) => {
                        const isLoggedIn = sessionStorage.getItem('isLoggedIn')

                        if(isLoggedIn == 'LoggedIn'){
                            console.log(sessionStorage.getItem('isLoggedIn'))
                            return <Component {...props} />
                        }else{
                            return <Redirect to={
                                    {
                                        pathname :'/',
                                        state :{
                                            from : props.location
                                        }
                                    }
                            }/>
                        }
                    }
                } />
        </div>
    )
}