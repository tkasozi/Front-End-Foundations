import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from './js/MainContent.js';
import {Footer} from './js/footer.js';

class App extends Component {
    render(){
        const {header, main, footer} = this.props;
        return(
           <section class="App">
               <section class="content">
                    <section class="header">
                        <h1>Header goes here!!</h1>
                        <hr/>
                    </section>
                    <section class="main">
                        <div class="col-md-2"></div>                        
                        <section class="col-md-2 test">
                            <Main />
                        </section>
                        <div class="col-md-2"></div>                                                            
                    </section>
                </section>
                <Footer />
            </section>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
); 