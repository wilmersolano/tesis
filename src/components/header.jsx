import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <br></br>
                <p style={{ color: 'white', fontWeight: 'bold' }}>Los datos espacio-temporales son aquellos que contienen información sobre la ubicación geográfica de un evento o fenómeno, así como el momento en el que ocurrió.</p>

                <br></br>
                <br></br>
                <br></br>
                <p style={{ color: 'white', fontWeight: 'bold' }}>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
