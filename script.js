document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.querySelector('#filterInput');
    const carElements = document.querySelectorAll('.car');

    filterInput.addEventListener('input', function() {
        const filterValue = filterInput.value.toLowerCase();
        let hasVisibleCars = false;

        carElements.forEach(car => {
            const carType = car.querySelector('h2').textContent.toLowerCase();
            if (carType.includes(filterValue)) {
                car.style.display = '';
                hasVisibleCars = true;
            } else {
                car.style.display = 'none';
            }
        });

        // Provide visual feedback if no cars match the filter
        if (!hasVisibleCars) {
            filterInput.style.borderColor = 'red';
        } else {
            filterInput.style.borderColor = '#333'; // Reset border color on valid input
        }
    });

    filterInput.addEventListener('focus', function() {
        filterInput.style.borderColor = '#333';
    });

    filterInput.addEventListener('blur', function() {
        // Reset border color when input loses focus
        filterInput.style.borderColor = '';
    });
});
