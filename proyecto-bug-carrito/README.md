Proyecto de Portafolio: Depuración de Carrito de Compras

Este proyecto demuestra mi capacidad para **identificar y corregir bugs** en una interfaz de usuario funcional, específicamente en un simulador de carrito de compras.

El Desafío

El cliente (en este caso, un proyecto de práctica) reportó dos problemas principales:

1. Botones "Eliminar" no funcionaban correctamente** - Al hacer clic, el producto no se eliminaba o la acción era inconsistente.
2. Cupón de descuento no se aplicaba** - El botón "Aplicar cupón" no respondía o aplicaba el descuento incorrectamente.

Análisis del Problema

Bugs identificados en la versión original:

| # |                                 Bug                                    |                                 Impacto                               |
|---|------------------------------------------------------------------------|-----------------------------------------------------------------------|
| 1 | Uso incorrecto de `getElementsByClassName()` vs `querySelectorAll()`   | Los event listeners no se asignaban correctamente                     |
| 2 | Asignación de eventos con `onclick` que sobrescribía listeners previos | Solo el último botón funcionaba                                       |
| 3 | Error en operador de comparación (`=` en lugar de `===`)               | El cupón nunca se validaba correctamente                              |
| 4 | No se manejaban elementos eliminados dinámicamente                     | Los botones dejaban de funcionar después de eliminar productos        |
| 5 | Falta de feedback visual para el usuario                               | Mala experiencia de usuario                                           |

Mi Solución

Correcciones implementadas:

Event Listeners robustos: Usé `addEventListener` con manejadores separados y `removeEventListener` para evitar duplicados.

Comparación corregida: Cambié `=` por `===` en la validación del cupón.

Manejo de elementos dinámicos: Implementé un `MutationObserver` para que los nuevos elementos también tengan funcionalidad.

Feedback visual mejorado: Añadí mensajes temporales, animaciones al eliminar y estados deshabilitados para el cupón.

Código organizado: Separé la lógica en funciones pequeñas y reutilizables.

 Antes y Después

Antes (con bugs):
- Los botones de eliminar no respondían consistentemente
- El cupón nunca se aplicaba aunque se ingresara el código correcto
- Sin feedback para el usuario

(corregido):
- Todos los botones funcionan correctamente
- Cupón "DESCUENTO10" aplica 10% de descuento (una sola vez)
- Mensajes claros para cada acción del usuario
- Animaciones suaves al eliminar productos

Tecnologías Utilizadas

- HTML5
- CSS3 (diseño responsive)
- JavaScript Vanilla (ES6+)
- MutationObserver para elementos dinámicos

Cómo probarlo

1. Clona este repositorio
2. Abre `index.html` en tu navegador
3. Prueba los botones de eliminar y el cupón "DESCUENTO10"
4. Revisa la consola del navegador para ver los logs

Resultados

- **100% de los botones funcionales** después de la corrección
- **Mejora en la experiencia de usuario** con feedback visual inmediato
- **Código mantenible y escalable** listo para futuras ampliaciones

Enlaces

- [Repositorio en GitHub](https://github.com/tuusuario/proyecto-bug-carrito) *(cuando lo subas)*

---

*Este proyecto forma parte de mi portafolio personal como desarrollador freelance. Busco oportunidades para aplicar mis habilidades en depuración y mejora de interfaces de usuario.*