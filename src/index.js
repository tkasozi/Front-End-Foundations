import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from './js/MainContent.js';
import {Footer} from './js/footer.js';

class App extends Component {
    render(){
        //const {header, main, footer} = this.props;
        return(
           <section className="App">
               <section className="main-content">
                    <section className="header">
                        <h1>Header goes here!!</h1>
                        <hr/>
                    </section>
                    <section className="main col-md-12">
                        <div className="col-md-2 red"></div>                        
                        <section className="col-md-8 center">
                            <Main />
                        </section>
                        <div className="col-md-2 red"></div>                                                            
                    </section>
                </section>
            </section>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
); 

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')    
);