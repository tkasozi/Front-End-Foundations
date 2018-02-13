import React from 'react';
import * as DATA from '../about.json';

const style ={
    textAlign: "left"
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

//<button onClick = {() => this.formatAbout()}>click</button>
export class Main extends React.Component{
    constructor(props){
        super(props);
        this.data = DATA.about;
        this.education = this.data.education;
        this.project = this.data.projects.map((item,index) => <p key={index}>{item}</p>);
    }
    render(){
        return(
            <div className="content col-md-12">
                <div className="col-md-8">
                   <About summary={this.data.summary} edu={this.education} proj={this.project}/>
                   {this.props.location}
                </div>
                <div className="col-md-2">
                    <section className="row">
                        <img src= {this.data.img}/>
                    </section>
                    <section className="row">
                        <h4>{this.data.name}</h4>
                    </section>
                </div>
            </div>
        );
    }
}