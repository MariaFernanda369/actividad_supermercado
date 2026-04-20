import { useState, useEffect } from "react";
import ProductoForm from "./components/ProductoForm";
import ProductoList from "./components/ProductoList";
import { getProductos, crearProducto, eliminarProducto } from "./services/productoService";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      const datos = await getProductos();
      setProductos(datos);
    } catch (error) {
      setMensajeError("Error al cargar los productos.");
    } finally {
      setCargando(false);
    }
  };

  const handleAgregar = async (nuevoProducto) => {
    const productoCreado = await crearProducto(nuevoProducto);
    setProductos([...productos, productoCreado]);
  };

  const handleEliminar = async (id) => {
    try {
      await eliminarProducto(id);
      setProductos(productos.filter((p) => p.productos !== id));
    } catch (error) {
      setMensajeError("Error al eliminar el producto.");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>🛒 Supermercado</h1>
        <p>Sistema de registro de productos</p>
      </header>

      <main>
        {mensajeError && (
          <div className="alerta-error">
            <p>{mensajeError}</p>
            <button onClick={() => setMensajeError("")}>✕</button>
          </div>
        )}

        <ProductoForm onAgregar={handleAgregar} />

        {cargando ? (
          <p className="cargando">Cargando productos...</p>
        ) : (
          <ProductoList productos={productos} onEliminar={handleEliminar} />
        )}
      </main>
    </div>
  );
}

export default App;