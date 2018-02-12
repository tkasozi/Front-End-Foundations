import React from 'react';

//#F8F8F8
var style = {
    backgroundColor: "purple",
    borderTop: "1px solid #E7E7E7",
    padding: "3rem",
    marginTop: "1rem",
    minHeight: "21rem",
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