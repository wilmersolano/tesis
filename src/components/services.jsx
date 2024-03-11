import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>¿Cómo usar la aplicación web?</h2>
          <p>
            A continuación, se presenta el paso a paso para visualizar los datos espacio-temporales.
          </p>
        </div>
        <div className="row">

          <div className="col-md-4">
            {" "}
            <img
              src="https://i.postimg.cc/6qZTw7Vt/menu.png"
              alt="Logo"
              style={{ height: "45px", marginRight: "0px", marginBottom: "250px" }}
            />
            <div className="service-desc">
              <h3>1. Ir a Gráfica</h3>
              <p>En el menú superior dar clic en la opción de Gráfica para dirigirse a la página para visualizar los datos.</p>
            </div>
          </div>

          <div className="col-md-4">
            {" "}
            <img
              src="https://i.postimg.cc/d0Dswkvp/abrir-Menu.png"
              alt="Logo"
              style={{ height: "300px", width: "350px", marginRight: "3px" }}
            />
            <div className="service-desc">
              <h3>2. Abrir el menú</h3>
              <p>Ya en la página de Gráfica, en la parte izquierda abrir el menú para observar las opciones.</p>
            </div>
          </div>

          <div className="col-md-4">
            {" "}
            <img
              src="https://i.postimg.cc/KYZ28Kbx/cargar-Json.png"
              alt="Logo"
              style={{ height: "300px", marginRight: "3px", width: "350px" }}
            />
            <div className="service-desc">
              <h3>3. Cargar datos</h3>
              <p>En la opción de Cargar Información subir el archivo JSON con el formato anteriormente mencionado, de igual manera se puede descargar los datos que se visualizan.</p>
            </div>
          </div>

          <div className="col-md-4">
            {" "}
            <img
              src="https://i.postimg.cc/TPLg4Pyq/visualizacion.png"
              alt="Logo"
              style={{ height: "300px", marginRight: "3px", width: "350px" }}
            />
            <div className="service-desc">
              <h3>4. Personalización</h3>
              <p>Para mostrar/ocultar los puntos, líneas,y los datos en perspectiva 2d elegir la opción Visualizaciones <br></br></p>
            </div>
          </div>

          <div className="col-md-4">
            {" "}
            <img
              src="https://i.postimg.cc/hv4KjpdD/zoom.png"
              alt="Logo"
              style={{ height: "300px", marginRight: "3px", width: "350px" }}
            />
            <div className="service-desc">
              <h3>5. Zoom</h3>
              <p>Se aumenta o disminuye la vista del escenario, y Fullscreen para pantalla completa</p>
            </div>
          </div>

          <div className="col-md-4">
            {" "}
            <img
              src="https://i.postimg.cc/BbzR0g5w/filtro.png"
              alt="Logo"
              style={{ height: "300px", marginRight: "3px", width: "350px" }}
            />
            <div className="service-desc">
              <h3>6. Filtro</h3>
              <p>Elija la hora de inicio y la hora final que desea ver los datos.</p>
            </div>
          </div>
          <br></br>
          <div className="text-center">

            <div className="col-md-4">
              {" "}
              <img
                src="https://i.postimg.cc/wBmfYPxk/trayectorias-Fil2.png"
                alt="Logo"
                style={{ height: "300px", marginRight: "3px", width: "350px" }}
              />
              <div className="service-desc">
                <h3>6. Filtro de Trayectorias</h3>
                <p>Desmarcar la casilla de la trayectoria que quiera ocultar</p>
              </div>
            </div>

            <div className="col-md-4">
              {" "}
              <img
                src="https://i.postimg.cc/zDscvTCP/flechas.png"
                alt="Logo"
                style={{ height: "150px", marginRight: "3px", width: "175px", marginBottom: "140px" }}
              />
              <br></br>
              <div className="service-desc">
                <h3>6. Movimiento</h3>
                <p>Para mover la escena es posible por medio del mouse y las flechas del teclado.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};


