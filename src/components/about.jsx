import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/formato1.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Una sola trayectoria</h2>
              <p>Para visualizar datos espacio-temporales que contengan una sola trayectoria debe de seguir la estructura del archivo JSON que se encuentra en la parte izquierda. <br></br>El archivo JSON tiene la clave “paths” y dentro tiene la clave “points” que representa la trayectoria que se desea visualizar. Cada punto tiene coordenadas x, y, y z, donde las coordenadas x e y representan la posición en un plano horizontal y la coordenada z puede representar una coordenada de tiempo.<br></br> <b>Normas a considerar:</b> <br></br>Los valores de x e y deben de estar entre 15 y -15, y el valor de Z se considera en horas, minutos y segundos entre las 00:00:00 hasta 24:00:00. Por último, la clave “imageURL” debe ser la imagen del mapa que debe de estar subido a internet.</p>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/formato2.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Formato JSON</h2>
              <p>Para visualizar datos espacio-temporales que contengan una sola trayectoria debe de seguir la estructura del archivo JSON que se encuentra en la parte izquierda. <br></br>El archivo JSON tiene la clave “paths” y dentro tienen las claves “points” que representa las trayectorias que se desea visualizar. Cada punto tiene coordenadas x, y, y z, donde las coordenadas x e y representan la posición en un plano horizontal y la coordenada z puede representar una coordenada de tiempo.<br></br> <br></br> <b>Normas a considerar:</b> <br></br>Los valores de x e y deben de estar entre 15 y -15, y el valor de Z se considera en horas, minutos y segundos entre las 00:00:00 hasta 24:00:00. <br></br>Por último, la clave “imageURL” debe ser la imagen del mapa que pertenece a los datos, dicho imagen debe de estar subida a internet.</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
