import React from 'react';
import Search from './search';

export class Header extends React.Component{
    render(){
        return(
                <nav id="header" className="navbar sticky-top navbar-light header">
                    <div className="navbar-brand" >
                        <span className="h4">{this.props.title}</span>                                           
                    </div>
                    <div>
                        <a href="/about" className="navbar-brand nav-btn">About</a>                            
                        <a href="/repo" className=" navbar-brand nav-btn">Repositories</a>
                    </div>
                    <div style={{float: "right"}} className="navbar-brand">
                        <span className="h4">Software Developer</span>                        
                    </div>
                </nav>
        );
    }
}