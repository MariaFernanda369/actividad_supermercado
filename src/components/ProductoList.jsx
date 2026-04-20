function ProductoList({ productos, onEliminar }) {
  if (productos.length === 0) {
    return (
      <div className="list-container">
        <h2>📦 Productos</h2>
        <p className="empty-msg">No hay productos registrados aún.</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>
        📦 Productos <span className="badge">{productos.length}</span>
      </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td><span className="id-badge">#{p.id}</span></td>
              <td>{p.nombre}</td>
              <td><span className="precio-text">${p.precio.toLocaleString()}</span></td>
              <td>
                <button className="btn-eliminar" onClick={() => onEliminar(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductoList;