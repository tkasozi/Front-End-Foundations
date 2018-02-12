import React from 'react';

export class Main extends React.Component{
    render(){
        return(
            <div>
                <h1> Welcome by <em>Talik Kasozi </em> </h1>
                <button id="add">Add Content</button>
                <div class="content"></div>
            </div>
        );
    }
}