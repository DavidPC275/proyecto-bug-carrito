// VERSIÓN CON BUG - El botón eliminar no funciona y el cupón no se aplica

// Variables
let total = 787;
const productos = document.querySelectorAll('.producto');

// FUNCIÓN CON BUG: No asigna correctamente los event listeners
function configurarBotonesEliminar() {
    const botonesEliminar = document.getElementsByClassName('btn-eliminar');
    
    // BUG 1: Esto no funciona como esperamos
    for (let i = 0; i < botonesEliminar.length; i++) {
        const boton = botonesEliminar[i];
        boton.onclick = function() {
            // Este código nunca se ejecuta correctamente
            console.log('Click detectado en botón eliminar');
            const producto = boton.parentElement;
            const precioElemento = producto.querySelector('.precio');
            const precio = parseInt(precioElemento.textContent.replace('$', ''));
            
            // Eliminar producto
            producto.remove();
            
            // Actualizar total
            total = total - precio;
            document.getElementById('total').textContent = total;
            
            // BUG 2: No actualiza correctamente el mensaje
            alert('Producto eliminado (pero no funciona bien)');
        };
    }
}

// FUNCIÓN CON BUG: No procesa el cupón correctamente
function configurarBotonCupon() {
    const botonCupon = document.getElementById('btn-aplicar-cupon');
    const inputCupon = document.getElementById('cupon-input');
    const mensajeCupon = document.getElementById('mensaje-cupon');
    
    // BUG 3: El evento se asigna pero la lógica es incorrecta
    botonCupon.addEventListener('click', function() {
        const codigo = inputCupon.value;
        
        // Esto debería verificar el código pero no lo hace bien
        if (codigo = "DESCUENTO10") {  // BUG: Usa = en lugar de ===
            total = total * 0.9; // 10% de descuento
            document.getElementById('total').textContent = total;
            mensajeCupon.textContent = '✅ Cupón aplicado: 10% descuento';
        } else {
            mensajeCupon.textContent = '❌ Cupón inválido';
        }
    });
}

// Inicializar
configurarBotonesEliminar();
configurarBotonCupon();

// BUG 4: Si se eliminan productos, los nuevos botones no tienen eventos
console.log('Versión con bugs cargada - Los botones no funcionan correctamente');