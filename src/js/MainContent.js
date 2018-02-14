import React from 'react';
import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';

const style ={
    textAlign: "right"
}

let callApi = async (query) => {
    let path =  '/api/'+query;
    const response = await fetch(path);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);        
    return body;
};

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
            img: "",
            edu: [],
            summary: [],
            proj: [[]],
            key: []
        }
    }
    
    componentDidMount(){
            callApi('edu')
            .then(res => this.setState({edu: res.express}))
              .catch(err => console.log(err));
              console.log(this.state.user)
            callApi('summary')
              .then(res => this.setState({summary: res.express}))
              .catch(err => console.log(err));
            callApi('proj')
              .then(res => this.setState({proj: res.express}))
              .catch(err => console.log(err));
            callApi('key')
              .then(res => this.setState({key: res.express}))
              .catch(err => console.log(err));

    }
    render(){
        return(
            <section style={{float: "left"}}>
                <section className="text">
                    <h1 className="h1">{this.state.key[1]}</h1>
                    {this.state.summary.map((i,j) => <p key={j}>{i}</p>)}
                </section>
                <section className="text">
                    <h1 className="h1">{this.state.key[2]}</h1>
                    {this.state.edu.map((i,j) => <p key={j}>{i}</p>)}
                </section>
                <section className="text">
                    <h1 className="h1">{this.state.key[3]}</h1><br/>
                    <div style={{clear:"left"}}>
                        {
                            this.state.proj.map(
                                (_Array, i) => <div key={i}>
                                    {
                                        _Array.map(
                                            (item, j) => j === 0 ? <span key={j} className="h4">{item}</span> :
                                                        <p key={j}>{item}</p>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
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
        this.state = {
            key:[]
        };
    }
    loading ={
        color: "green"
    }
    componentDidMount(){
        callApi('key')
              .then(res => this.setState({key: res.express}))
              .catch(err => console.log(err));
    }// Themes	#E0FFFF , #F08080
    render(){
        return(
            <div className="content">           
                <div className="col-md"  >
                    <section>
                            {this.state.key.length > 1? 
                                <div className="shadow-wrapper">
                                    <img src={this.state.key[0].img} className="rcorners"/>
                                    <br/>
                                    <span className="h3 highlight">{this.state.key[0].name}</span>
                                </div>
                                : <div></div>}
                            <Route path="/about" component={About} />
                            <Route path="/repo" component={Repo} />  
                    </section>   
                </div>
            </div>
        );
    }
}

export default Main;