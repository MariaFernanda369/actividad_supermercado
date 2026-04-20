import { useState } from "react";

function ProductoForm({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!nombre || !precio) {
      setError("Por favor completa todos los campos");
      return;
    }

    try {
      await onAgregar({ nombre, precio: Number(precio) });
      setNombre("");
      setPrecio("");
    } catch (err) {
      setError("No se pudo agregar el producto. Intenta de nuevo.");
    }
  };

  return (
    <div className="form-container">
      <h2>➕ Nuevo Producto</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default ProductoForm;