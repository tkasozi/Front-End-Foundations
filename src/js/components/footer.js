import React from 'react';

let style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    minWidth: "100%",
    padding: "3rem",
    minHeight: "21rem",
    fontSize: "1.7rem"
};
let copy ={
    position:"relative",
    marginTop: "35%",
    float:"right"
};
let email ={
    paddingTop: "5rem",
}
let imgStyle={
    width: "2.5rem",
    height: "2.5rem"
}
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
                            <a target="_blanck" className="btn btn-social-icon btn-leetcode"href="https://leetcode.com/tkasozi/">
                              <img alt={""} style={imgStyle} src="https://d2wnixsywa9nb4.cloudfront.net/wp-content/uploads/2017/12/02135818/LeetCode_logo.png"/>leetcode 
                            </a>
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
                        <span>Personal Information</span><br/><br/>
                        {
                            <div>
                                <span style={email}>
                                    <i className="glyphicon glyphicon-envelope">&nbsp;talik.aziizi@gmail.com</i>
                                </span>
                                <span style={copy}>Copyrights &copy; 2018 by Talik Kasozi</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}