import React from 'react';
import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';
import {Resume} from './resume';
import {callApi} from './utils';

const style ={
    textAlign: "right"
}

class Repo extends React.Component{
    render(){
        return(
            <p>Repository will go here.</p>
        );
    }
}
//TODO: How to from re-route [/] to [/about]
class Welcome extends React.Component{
    render(){
        return(
            <p className="h1">Welcome to my site. <em>A Front End Foundations </em> WozU project </p>
        );
    }
}
class Main extends React.Component{
    constructor(props){
        super(props);
    }
    // Themes	#E0FFFF , #F08080
    render(){
        return(
            <section className="content">  
                <div className="shadow-wrapper">
                    <Route path="/about" component={Resume} />
                    <Route path="/repo" component={Repo} /> 
                </div>
            </section>   
        );
    }
}

export default Main;