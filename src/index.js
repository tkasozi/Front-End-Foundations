import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './js/header';
import Main from './js/MainContent';
import {Footer} from './js/footer';
import  { BrowserRouter as Router, Route, Link}  from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <section className="App page-wrapper">
                        <header id="header">
                            <Header />
                        </header>
                        <section className="container">
                                <section className="col-md-12">
                                    <div className="col-md-1"></div>                        
                                    <section className="col-md-10">
                                        <Main />
                                    </section>
                                    <div className="col-md-1"></div>                                                            
                                </section>
                        </section>
                    </section>
                    <footer id="footer" className="site-footer">
                        <Footer />
                    </footer>
                </div>    
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
); 