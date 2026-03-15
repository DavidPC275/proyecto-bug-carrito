// VERSIÓN CORREGIDA - Todos los botones funcionan correctamente

// Variables
let total = 787;
const totalElement = document.getElementById('total');
const container = document.querySelector('.container');

// Función corregida para eliminar productos
function configurarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    
    botonesEliminar.forEach(boton => {
        // Eliminar event listeners anteriores para evitar duplicados
        boton.removeEventListener('click', manejarEliminar);
        boton.addEventListener('click', manejarEliminar);
    });
}

// Manejador separado para eliminar productos
function manejarEliminar(event) {
    const boton = event.currentTarget;
    const producto = boton.closest('.producto');
    
    if (!producto) return;
    
    // Obtener precio
    const precioElemento = producto.querySelector('.precio');
    const precioTexto = precioElemento.textContent.replace('$', '');
    const precio = parseInt(precioTexto);
    
    // Eliminar producto con animación
    producto.style.transition = 'all 0.3s';
    producto.style.opacity = '0';
    
    setTimeout(() => {
        producto.remove();
        
        // Actualizar total
        total = total - precio;
        totalElement.textContent = total;
        
        // Mostrar mensaje temporal
        mostrarMensaje(`✅ Producto eliminado. Nuevo total: $${total}`, 'success');
        
        // Si no quedan productos, mostrar mensaje
        if (document.querySelectorAll('.producto').length === 0) {
            mostrarMensaje('🛒 Carrito vacío', 'info');
        }
    }, 300);
}

// Función corregida para aplicar cupón
function configurarBotonCupon() {
    const botonCupon = document.getElementById('btn-aplicar-cupon');
    const inputCupon = document.getElementById('cupon-input');
    
    botonCupon.removeEventListener('click', manejarCupon);
    botonCupon.addEventListener('click', manejarCupon);
}

function manejarCupon() {
    const inputCupon = document.getElementById('cupon-input');
    const codigo = inputCupon.value.trim();
    const mensajeCupon = document.getElementById('mensaje-cupon');
    
    // CORRECCIÓN 1: Usar === en lugar de =
    if (codigo === "DESCUENTO10" || codigo === "descuento10") {
        // CORRECCIÓN 2: Verificar que el cupón no se haya aplicado ya
        if (!window.cuponAplicado) {
            const descuento = total * 0.1;
            total = total * 0.9;
            totalElement.textContent = Math.round(total);
            
            mensajeCupon.textContent = '✅ Cupón aplicado: 10% descuento';
            mensajeCupon.style.color = '#27ae60';
            window.cuponAplicado = true;
            
            // Deshabilitar el botón después de aplicar
            document.getElementById('btn-aplicar-cupon').disabled = true;
            inputCupon.disabled = true;
        } else {
            mensajeCupon.textContent = '⚠️ Cupón ya aplicado';
            mensajeCupon.style.color = '#e67e22';
        }
    } else {
        mensajeCupon.textContent = '❌ Cupón inválido';
        mensajeCupon.style.color = '#e74c3c';
    }
    
    // Limpiar mensaje después de 3 segundos
    setTimeout(() => {
        if (mensajeCupon.textContent !== '✅ Cupón aplicado: 10% descuento') {
            mensajeCupon.textContent = '';
        }
    }, 3000);
}

// Función helper para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = texto;
    mensajeDiv.style.padding = '10px';
    mensajeDiv.style.marginTop = '10px';
    mensajeDiv.style.borderRadius = '5px';
    
    if (tipo === 'success') {
        mensajeDiv.style.backgroundColor = '#d4edda';
        mensajeDiv.style.color = '#155724';
        mensajeDiv.style.border = '1px solid #c3e6cb';
    } else if (tipo === 'info') {
        mensajeDiv.style.backgroundColor = '#d1ecf1';
        mensajeDiv.style.color = '#0c5460';
        mensajeDiv.style.border = '1px solid #bee5eb';
    }
    
    // Eliminar mensajes anteriores
    const mensajesAntiguos = document.querySelectorAll('.mensaje-temporal');
    mensajesAntiguos.forEach(m => m.remove());
    
    mensajeDiv.className = 'mensaje-temporal';
    document.querySelector('.container').appendChild(mensajeDiv);
    
    setTimeout(() => mensajeDiv.remove(), 3000);
}

// CORRECCIÓN 3: Usar MutationObserver para manejar botones dinámicos
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            configurarBotonesEliminar();
        }
    });
});

observer.observe(document.querySelector('.container'), {
    childList: true,
    subtree: true
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    configurarBotonesEliminar();
    configurarBotonCupon();
    console.log('✅ Versión corregida: Todos los botones funcionan correctamente');
});