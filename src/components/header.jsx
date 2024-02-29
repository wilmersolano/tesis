import React from "react";

export const Header = (props) => {
  return (
    <header id="header" >
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: "60px" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </p>
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: "60px" }}>
                  espacio-temporales
                  <span></span>
                </p>

              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100px', marginBottom: '200px' }}>
                <div style={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start', flex: 1, marginRight: '200px', fontSize: "20px" }}>
                  ¿Qué son los datos espacio-temporales? Son aquellos datos que contienen información sobre la ubicación geográfica de un evento o fenómeno, así como el momento en el que ocurrió.
                </div>
                <div style={{ color: 'white', fontWeight: 'bold', alignSelf: 'flex-start', flex: 1, marginLeft: '200px', fontSize: "20px" }}>
                  ¿De qué trata Trackview? <br></br>Trackview es una aplicación web que se encarga de cargar y presentar datos espacio-temporales en 2D y 3D, puede cargar datos de diferentes ambitos siempre y cuando se siga el formato establecido.
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>




  );
};
