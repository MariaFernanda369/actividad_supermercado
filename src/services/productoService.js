const API_URL = "https://69e57c02ce4e908a155e1611.mockapi.io/productos";

export async function getProductos() {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) throw new Error("Error al obtener los productos");
  return await respuesta.json();
}

export async function crearProducto(producto) {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  if (!respuesta.ok) throw new Error("Error al crear el producto");
  return await respuesta.json();
}

export async function eliminarProducto(id) {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!respuesta.ok) throw new Error("Error al eliminar el producto");
  return await respuesta.json();
}