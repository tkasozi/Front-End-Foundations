import React from 'react';
//import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';
import {callApi} from './utils';

export class Repo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoaded: false,
            tems: []
        }
    }
    componentDidMount(){
     fetch("https://github.com/tkasozi/repos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render(){
        return(
            <p>Repository will go here.</p>
        );
    }
}