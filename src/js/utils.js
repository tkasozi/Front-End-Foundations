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