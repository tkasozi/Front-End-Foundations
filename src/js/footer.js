import React from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    minWidth: "100%",
    padding: "3rem",
    minHeight: "21rem"
};
var copy ={
    position:"relative",
    marginTop: "50%",
    float:"right"
};
export class Footer extends React.Component{
    render(){
        return(
            <div style={style} className="container">
                <div className="col-md-12">
                    <div className="col-md-4">
                        <span className="">Professional Accounts</span>
                       <div>
                            <a target="_blanck" href="https://github.com/tkasozi" className="btn btn-social-icon btn-github">
                                <span className="fa fa-github">&nbsp;github</span>
                            </a><br/>
                            <a target="_blanck" href="https://twitter.com/tkasozi91" className="btn btn-social-icon btn-twitter">
                                <span className="fa fa-twitter">&nbsp;twitter</span>
                            </a><br/>
                            <a target="_blanck" className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/tkasozi">
                                <span className="fa fa-facebook">&nbsp;facebook</span>
                            </a><br/>
                            <a target="_blanck" className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/tkasozi/">
                            <span className="fa fa-linkedin">&nbsp;linkedIn</span>
                            </a><br/>
                            <a target="_blanck" className="btn btn-social-icon btn-leetcode"href="https://leetcode.com/tkasozi/">leetcode</a>
                       </div>
                    </div>
                    <div className="col-md-4">
                        <span className="">Directory</span>
                        {
                            <div>
                                <a href="/about" className="btn">about</a> <br/>
                                <a href="/repo" className="btn">repository</a>
                            </div>
                        }
                    </div>
                    <div className="col-md-4">
                        {
                            <span style={copy}>Copyrights &copy; 2018 by Talik Kasozi</span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}