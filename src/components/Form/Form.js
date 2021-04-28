import React, { useState } from "react";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import "./form.css";

const Form = ({ addTask }) => {
  /* Crear State de Tarea */
  const [task, setTask] = useState({
    nombre: "",
    autor: "",
    fecha: "",
    hora: "",
    descripcion: "",
  });

  /* Estado del formulario */
  const [error, setError] = useState(false);

  /* Funcion actualizarTask */
  const actualizarTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  /* Extraer valores */
  const { nombre, autor, fecha, hora, descripcion } = task;

  /* Evento submit */
  const submitCita = (e) => {
    e.preventDefault();
    /* validamos campos */
    if (
      nombre.trim() === "" ||
      autor.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      descripcion.trim() === ""
    ) {
      setError(true);
      return;
    }

    /* Eliminamos mensaje previo */
    setError(false);

    /* Asignamos un ID */
    task.id = uuidv4();

    /* Creamos cita */
    addTask(task);

    /* Reinicar form */
    setTask({ nombre: "", autor: "", fecha: "", hora: "", descripcion: "" });
  };

  return (
    <form className="form" onSubmit={submitCita}>
      {/* BLOQUE 1 */}
      <div className="form__block">
        <div className="form__name">
          <label className="form__label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form__input"
            onChange={actualizarTask}
            value={nombre}
          ></input>
        </div>
        <div className="form__autor">
          <label className="form__label">Autor</label>
          <input
            type="text"
            name="autor"
            className="form__input"
            onChange={actualizarTask}
            value={autor}
          ></input>
        </div>
      </div>
      {/* BLOQUE 2 */}
      <div className="form__block">
        <div className="form__date">
          <label className="form__label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form__input"
            onChange={actualizarTask}
            value={fecha}
          ></input>
        </div>
        <div className="form__time">
          <label className="form__label">Hora</label>
          <input
            type="time"
            name="hora"
            className="form__input"
            onChange={actualizarTask}
            value={hora}
          ></input>
        </div>
      </div>
      {/* BLOQUE 3 */}
      <div className="form__block">
        <div className="form__description">
          <label className="form__label">Descripción</label>
          <textarea
            type="textarea"
            name="descripcion"
            className="form__input"
            onChange={actualizarTask}
            value={descripcion}
          ></textarea>
        </div>
      </div>

      <div className="form__mesage">
        <Button />
        {error ? (
          <p className="error">"Todos los campos son obligatorios"</p>
        ) : null}
      </div>
    </form>
  );
};

export default Form;
