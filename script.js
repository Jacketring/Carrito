document.addEventListener('DOMContentLoaded', function() {
    const btnMinus = document.querySelectorAll('.btn-minus');
    const btnPlus = document.querySelectorAll('.btn-plus');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const totalPriceElement = document.getElementById('total-price');
    const unitPrices = [1099.99, 49.99, 79.99]; // Precios de cada producto en orden
    const addToCartButton = document.getElementById('addToCart');

    function updateTotal() {
        let total = 0;
        quantityInputs.forEach((input, index) => {
            const quantity = parseInt(input.value);
            const totalPriceCell = input.closest('tr').querySelector('.total-price');
            const unitPrice = unitPrices[index];
            const itemTotal = quantity * unitPrice;

            // Actualizar precio total de cada producto
            totalPriceCell.textContent = itemTotal.toFixed(2) + "€";
            total += itemTotal;
        });

        // Actualizar precio total general
        totalPriceElement.textContent = total.toFixed(2) + "€";
    }

    // Agregar eventos para botones de + y -
    btnPlus.forEach((button, index) => {
        button.addEventListener('click', () => {
            const input = quantityInputs[index];
            input.value = parseInt(input.value) + 1;
            updateTotal();
        });
    });

    btnMinus.forEach((button, index) => {
        button.addEventListener('click', () => {
            const input = quantityInputs[index];
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotal();
            }
        });
    });

    // Actualizar total al cambiar la cantidad manualmente
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    // Evento para el botón "Enviar al Carrito"
    addToCartButton.addEventListener('click', () => {
        alert("Productos añadidos al carrito con éxito.");
        // Aquí puedes agregar funcionalidad adicional para el carrito, si lo deseas
    });

    // Inicializar el total en la carga de la página
    updateTotal();
});
