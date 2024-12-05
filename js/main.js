const productos = [
    { nombre: "rack", categoria: "hogar", precio: "100000", cantidad: "16", descuento: "10" },
    { nombre: "audifonos", categoria: "electronica", precio: "150000", cantidad: "13", descuento: "10" },
    { nombre: "palta", categoria: "alimentos", precio: "8000", cantidad: "15", descuento: "10" },
];
function calcularDescuento(precio, descuento) {
    return precio - precio * (descuento / 100);
}
const productoEnDescuento = productos
    .filter(producto => producto.descuento > 0).map(producto => ({
        ...producto,
        precioFinal: calcularDescuento(producto.precio, producto.descuento),
    }));
console.log('Producto en descuento', productoEnDescuento);

const stock = productos.filter(producto => producto.cantidad < 5);
if (stock.length > 0) {
    console.log('Unidades disponibles', stock);
} else {
    console.log('Pocas Unidades');
}
try {
    const stockCategoria = productos.reduce((categorias, producto) => {
        categorias[producto.categoria] = (categorias[producto.categoria] || 0) + producto.cantidad;
        return categorias;
    }, {});
    console.log('Stock disponible por categoria', stockCategoria);
} catch (sinStock) {
    console.log('Stock no disponible', sinStock);
}