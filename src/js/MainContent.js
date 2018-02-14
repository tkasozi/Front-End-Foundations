import React from 'react';
import * as DATA from '../about.json'; // will be done using Nodejs BackEnd
import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';

const style ={
    textAlign: "right"
}

class About extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            summary: null,
            edu: null,
            proj: null
        }
    }
    
    render(){
        return(
            <section>
                <section>
                    <h4>Summary</h4>
                    <p>{this.props.summary}</p>
                </section>
                <section>
                    <h4>Education</h4>
                    <p>{this.props.edu}</p>
                </section>
                <section>
                    <h4>Projects</h4>
                    {this.props.proj}
                </section>
            </section>
        );
    }
} 

class Repo extends React.Component{
    render(){
        return(
            <p>Repository will go here.</p>
        );
    }
}
class Main extends React.Component{
    constructor(props){
        super(props);
        this.data = DATA.about;
    }
    callApi = async () => {

    }
    render(){
        return(
            <div className="content col-md-12">
                <div className="col-md-8">
                  <Route path="/about" render={
                      (props) => <About summary={this.data.summary} 
                                        edu={this.data.education} 
                                        proj={this.data.projects.map((item,index) => <p key={index}>{item}</p>)}/>}
                  />
                  <Route path="/repo" component={Repo} />
                </div>
                <div className="col-md-2">
                    <section className="row" style={style}>
                        <img src= {this.data.img} className="rcorners"/>
                        <h4 >{this.data.name}</h4>
                    </section>
                </div>
            </div>
        );
    }
}

export default Main;