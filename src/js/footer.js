import React from 'react';
import ReactDOM from 'react-dom';
import * as utils from './utils.js';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "15rem",
    width: "100%",
};//60px

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