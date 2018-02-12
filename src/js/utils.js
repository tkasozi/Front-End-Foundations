import React, {Component} from 'react';

export function addStyle(url = "", integrity="",crossorigin=""){
    const link = document.createElement('link');

    link.rel = "stylesheet";
    link.href = url;
    link.integrity = integrity;
    link.crossorigin = crossorigin;

    document.head.appendChild(link);
}
export function addScript(url = "", async = false, integrity="",crossorigin=""){
    const script = document.createElement('script');

    script.src = url;
    script.async = async;
    script.integrity = integrity;
    script.crossorigin = crossorigin;
    document.body.appendChild(script);
}

export function stickyFooter(){
    
}
/**
 * Linking [Bootstrap].css,.js & JQuery
 *
export class Link extends Component{
    render(){
        return(
            addStyle("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", "anonymous"),
            addScript("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"),
            addScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",false,
            "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa","anonymous"),
            <div></div>           
        );
    }
}
*/