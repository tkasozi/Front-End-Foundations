import React from 'react';
import {Redirect} from 'react-router';
import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';
import Resume from './resume';
import {Repo} from './repo';


class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="content">  
                <div className="shadow-wrapper">
                    <Route path="/about" component={Resume} />
                </div>
                <Route path="/repo" component={Repo} /> 
                <Route exact path="/" render={()=>
                    //isLoggedIn
                    true? <Redirect to="/about"/> : 
                    <Repo />
                } />                
            </section>   
        );
    }
}

export default Main;