import React from 'react';

export class Header extends React.Component{
    render(){
        return(
                <nav id="header" className="navbar sticky-top navbar-light header">
                    <div className="navbar-brand" >
                        <span className="h3 highlight">Talik Kasozi</span>                                            
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