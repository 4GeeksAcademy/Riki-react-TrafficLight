import React, { useState } from "react";

const Semaforo = () => {
    const [color, setColor] = useState("verde");

    // Función para alternar el color
    const cambiarColor = () => {
        if (color === "verde") {
            setColor("roja");
        } else if (color === "roja") {
            setColor("amarilla");
        } else {
            setColor("verde");
        }
    };

    return (
        <>
            <p>Esto es el semáforo</p>
            <div className="caja">
                <div
                    className={`luz-verde ${color === "verde" ? "encendido" : ""}`}
                    onClick={() => setColor("verde")}
                ></div>
                <div
                    className={`luz-roja ${color === "roja" ? "encendido" : ""}`}
                    onClick={() => setColor("roja")}
                ></div>
                <div
                    className={`luz-amarilla ${color === "amarilla" ? "encendido" : ""}`}
                    onClick={() => setColor("amarilla")}
                ></div>
            </div>
            {/* Botón para cambiar el color automáticamente */}
            <button onClick={cambiarColor}>Cambiar color</button>
        </>
    );
};

export default Semaforo;
