import React from 'react';

export class Header extends React.Component{
    render(){
        return(
                <nav id="header" className="navbar sticky-top navbar-light header">
                    <span className="navbar-brand">About</span>                            
                    <span id="repo" className=" navbar-brand">Repositories</span>
                </nav>
        );
    }
}