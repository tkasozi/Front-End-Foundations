import React from 'react';
//import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';
import {callApi} from '../utils';

 class Repo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoaded: false,
            items: []
        }
    }
    componentDidMount(){
      callApi('https://api.github.com/users/tkasozi/repos')
      .then(res => this.setState({items: res}))
        .catch(err => console.log(err));
    }
/** 
 <a href={item.html_url}>{item.name}</a>
*/
    render(){
        return(
            <section id="repo">
                <div className="list-group">
                  <li className="h1 list-group-item active">Current Repositories</li>
                  {
                    this.state.items.map(
                      (item, i) => 
                        <a target="_blank" href={item.html_url} 
                            className="list-group-item list-group-item-action" key={i}>
                          {item.name}
                        </a>
                    )
                  }
                </div>
            </section>
        );
    }
}

export default Repo;