import React from 'react';

export class Header extends React.Component{
    render(){
        return(
                <nav id="header" className="navbar sticky-top navbar-light header">
                    <a href="/about" className="navbar-brand">About</a>                            
                    <a href="/repo" className=" navbar-brand">Repositories</a>
                </nav>
        );
    }
}