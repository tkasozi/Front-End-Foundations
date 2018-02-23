import React from 'react';
import {callApi} from '../utils';

class Resume extends React.PureComponent{
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
        callApi('/api/edu')
            .then(res => this.setState({edu: res.express}))
            .catch(err => console.log(err));
        callApi('/api/summary')
            .then(res => this.setState({summary: res.express}))
              .catch(err => console.log(err));
        callApi('/api/proj')
            .then(res => this.setState({proj: res.express}))
            .catch(err => console.log(err));
        callApi('/api/key')
            .then(res => this.setState({key: res.express}))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <section>
                <section>
                    {this.state.key.length > 1 ? 
                        <img alt={""} src={this.state.key[0].img} className="rcorners"/> : 
                        <div></div>
                    }
                </section><br/>
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
                                (_Array, i) => 
                                    <div key={i}>
                                        {
                                            _Array.map(
                                                (item, j) => j === 0 ? 
                                                    <span key={j} className="h4"><em>{item}</em></span> :
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

export default Resume;