import React from 'react';
import ReactDOM from 'react-dom';
import * as utils from './utils.js';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    padding: "20px",
    height: "21em",
    width: "100%",
};

export class Footer extends React.Component{
    render(){
        return(
            <footer style={style}>
                <div>
                    <div>TESTING ONE TWO</div>
                </div>
            </footer>
        );
    }
}