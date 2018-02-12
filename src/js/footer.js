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
    height: "13rem",
    width: "100%",
};//60px

export class Footer extends React.Component{
    render(){
        return(
            utils.addStyle("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", "anonymous"),
            utils.addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"),
            utils.addScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",false,
            "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa","anonymous"),
            <footer class="modal-footer" style={style}>
                <div>
                    <div>TESTING ONE TWO</div>
                </div>
            </footer>
        );
    }
}