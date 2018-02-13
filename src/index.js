import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import  {Route, Link}  from 'react-router-dom';
import './index.css';
import {Header} from './js/header.js';
import {Main} from './js/MainContent.js';
import {Footer} from './js/footer.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: ''
        };
    }
    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('/api/about');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    };
    render(){
        //const {header, main, footer} = this.props;
        return(
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
                                    <p className="App-intro">{this.state.response}</p>
                                    {console.log(this.props)}
                                </section>
                                <div className="col-md-1"></div>                                                            
                            </section>
                        </section>
                </section>
                <footer id="footer" class="site-footer">
                    <Footer />
                </footer>
            </div>    
            
        );
    }
}
 
ReactDOM.render(
    <App />,
    document.getElementById('content')
); 