import React, { useState } from "react";
import "./form.css";

const Form = () => {
  /* Crear State de Tarea */
  const [task, setTask] = useState({
    nombre: "",
    autor: "",
    fecha: "",
    hora: "",
    descripcion: "",
  });

  /* Funcion actualizarTask */

  const actualizarTask = () => {
    console.log("escribiendo...");
  };

  return (
    <div className="form">
      {/* BLOQUE 1 */}
      <div className="form__block">
        <div className="form__name">
          <label className="form__label">Nombre</label>
          <input
            type="text"
            className="form__input"
            onChange={actualizarTask}
          ></input>
        </div>
        <div className="form__autor">
          <label className="form__label">Autor</label>
          <input
            type="text"
            className="form__input"
            onChange={actualizarTask}
          ></input>
        </div>
      </div>
      {/* BLOQUE 2 */}
      <div className="form__block">
        <div className="form__date">
          <label className="form__label">Fecha</label>
          <input
            type="date"
            className="form__input"
            onChange={actualizarTask}
          ></input>
        </div>
        <div className="form__time">
          <label className="form__label">Hora</label>
          <input
            type="time"
            className="form__input"
            onChange={actualizarTask}
          ></input>
        </div>
      </div>
      {/* BLOQUE 3 */}
      <div className="form__block">
        <div className="form__description">
          <label className="form__label">Descripción</label>
          <textarea
            type="textarea"
            className="form__input"
            onChange={actualizarTask}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Form;
