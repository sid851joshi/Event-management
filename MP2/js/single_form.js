function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var college = document.getElementById('college').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var whatsapp = document.getElementById('whatsapp').value.trim();
    var paymentQR = document.getElementById('paymentQR').value.trim();
    var paymentScreenshot = document.getElementById('paymentScreenshot').value.trim();
    
    // Validate name
    if (name === '') {
        alert('Please enter your name');
        return false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Validate mobile number
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return false;
    }

    // Validate WhatsApp number
    if (!mobileRegex.test(whatsapp)) {
        alert('Please enter a valid WhatsApp number');
        return false;
    }


    // Validate payment screenshot (optional)
    if (paymentScreenshot !== '') {
        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(paymentScreenshot)) {
            alert('Please upload a valid image file for payment screenshot (jpg/jpeg/png)');
            return false;
        }
    }

    // Form submission successful
    alert('Form submitted successfully!');
    return true;
}
