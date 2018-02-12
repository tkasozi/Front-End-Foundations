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
               <section className="container">
                    <section className="col-md-12">
                        <div className="col-md-2"></div>                        
                        <section className="col-md-8">
                            <section className="header">
                                <h1>Header goes here!!</h1>
                                <hr/>
                            </section>
                            <Main />
                        </section>
                        <div className="col-md-2"></div>                                                            
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