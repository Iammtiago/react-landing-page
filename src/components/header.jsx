import React from "react";
import './../components.css';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 pt-5 pb-5 text-center " style={{ paddingTop: '160px', paddingBottom: '150px', fontSize: '32px' }}>
                <h1 className="text-color-p">
                  {props.data ? props.data.title : "Loading"}
                  {/* intro-text */}
                  <span className="text-color-p"></span>
                </h1>
                <p className="text-color-p ">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
