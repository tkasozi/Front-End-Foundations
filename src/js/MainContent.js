import React from 'react';
import * as DATA from '../about.json';

//<button onClick = {() => this.formatAbout()}>click</button>
export class Main extends React.Component{
    constructor(props){
        super(props);
        this.data = DATA.about;
        this.education = this.data.education;
        this.project = this.data.projects.map((item) => <p>{item}</p>);
    }
    render(){
        return(
            <div className="content col-md-12">
                <div className="col-md-8">
                    <section>
                        <h4>Summary</h4>
                        <p>{this.data.summary}</p>
                    </section>
                    <section>
                        <h4>Education</h4>
                        <p>{this.education}</p>
                    </section>
                    <section>
                        <h4>Projects</h4>
                        {this.project}
                    </section>
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