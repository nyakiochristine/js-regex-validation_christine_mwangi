
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const inputs = document.querySelectorAll('input');
    
    // Regular expression patterns
    const sequences = {
        fullName: /^[A-Za-z\s]{2,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    };

    
    function validateField(field, pattern) {
        const errorElement = field.nextElementSibling;
        const isValid = pattern.test(field.value.trim());
        
        if (!isValid) {
            field.classList.add('invalid');
            errorElement.style.display = 'block';
            return false;
        }
        
        field.classList.remove('invalid');
        errorElement.style.display = 'none';
        return true;
    }

    //validating inputs by user
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            validateField(e.target, sequences[e.target.name]);
        });
    });

  //when form is submitted
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formIsValid = true;
        
        inputs.forEach(input => {
            const isValid = validateField(input, sequences[input.name]);
            if (!isValid) formIsValid = false;
        });

        if (formIsValid) {
            alert('Registration Successful!');
            form.reset();
        }
    });
});
