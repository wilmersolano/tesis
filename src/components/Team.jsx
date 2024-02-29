import React from "react";

export const Team = (props) => {
  return (
    <div >

      <div id="team" className=" section-title text-center">
        <h2>Equipo de trabajo</h2>
      </div>

      <section className="ody">

        <div className="container">
          <div className="row flex-center sm-no-flex">

            <div className="pull-right sm-no-float col-md-8">
              {props.data
                ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4 team" style={{ marginLeft: '60px' }}>
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4 id="ti">{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                      <div id="soci">
                        <a href={d.git} target="_blank"><i class="mdi--github"></i></a>
                        <a href={d.face} target="_blank"><i class="ic--baseline-facebook"></i></a>
                      </div>
                    </div>
                  </div>
                ))
                : "loading"}
            </div>

            <div className="pull-left col-md-4 sm-text-center">
              <div className="team-overview">
                <h2>¿Quiénes somos?</h2> <br></br>
                <p><div>Cedeño Héctor y Solano Wilmer son estudiantes de la Universidad de las Fuerzas Armadas ESPE, los cuales pertenecen a la carrera de Ingeniería en Tecnologías de la Información. Nos hemos comprometido con el desarrollo de la aplicación web Trackview para apoyar al área de visualización de datos espacio-temporales. </div></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Derechos reservados a Solano Wilmer y Hector Cedeño{" "}
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
