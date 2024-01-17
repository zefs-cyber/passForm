document.getElementById('photo3x4').addEventListener('change', updateFileName);
document.getElementById('idPhoto').addEventListener('change', updateFileName);
document.getElementById('idWithPhoto').addEventListener('change', updateFileName);


function updateFileName() {
    var fileName = this.value.split('\\').pop();
    this.parentElement.querySelector('.file-name').innerText = fileName || 'Файл интихоб нашудааст';
}

function submitForm() {
    // Collect form data
    var formData = {
        fullNameCyrillic: document.getElementById('fullNameCyrillic').value,
        fullNameLatin: document.getElementById('fullNameLatin').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        attentionDate: document.getElementById('issueDate').value,
        completionDate: document.getElementById('expiryDate').value,
        passportNumber: document.getElementById('passportNumber').value,
        address: document.getElementById('address').value,
        rma: document.getElementById('rma').value,
        jobLocation: document.getElementById('jobLocation').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        photo3x4: document.getElementById('photo3x4').files[0],
        idPhoto: document.getElementById('idPhoto').files[0],
        idWithPhoto: document.getElementById('idWithPhoto').files[0]
    };

    // You can send the formData to a server using AJAX or perform other actions as needed
}

function showCustomAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function validateForm() {

    // Add your validation logic here
    var fullNameCyrillic = document.getElementById('fullNameCyrillic').value;
    var fullNameLatin = document.getElementById('fullNameLatin').value;
    var birthdate = document.getElementById('birthdate').value;
    var attentionDate = document.getElementById('issueDate').value;
    var completionDate = document.getElementById('expiryDate').value;
    var passportNumber = document.getElementById('passportNumber').value;
    var rma = document.getElementById('rma').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;


    var fullNameCyrillicElement = document.getElementById('fullNameCyrillic');
    var fullNameLatinElement = document.getElementById('fullNameLatin');
    var passportNumberElement = document.getElementById('passportNumber');
    var rmaElement = document.getElementById('rma');
    var phoneNumberElement = document.getElementById('phoneNumber');
    var attentionDateElement = document.getElementById('issueDate');
    var completionDateElement = document.getElementById('expiryDate');
    var birthdateElement = document.getElementById('birthdate');
    var addressElement = document.getElementById('address');

    var isValid = true;
    var alertString = "Диккат:";



    // Check if fullNameCyrillic contains only Cyrillic letters
    if (!/^[а-яА-Я\s]+$/.test(fullNameCyrillic.trim())) {
        alertString = alertString.concat("\n", 'Номи пурра (кирилӣ) танҳо бо ҳарфҳои кирилӣ');
        fullNameCyrillicElement.style.borderColor = 'red';
        fullNameCyrillicElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    } else {
        fullNameCyrillicElement.style.borderColor = '';
        fullNameCyrillicElement.style.borderWidth = '1px';
    }

    // Check if fullNameLatin contains only Latin letters
    if (!/^[a-zA-Z\s]+$/.test(fullNameLatin.trim())) {
        alertString = alertString.concat("\n", 'Номи пурра (лотинӣ) танҳо бо ҳарфҳои лотинӣ');
        fullNameLatinElement.style.borderColor = 'red';
        fullNameLatinElement.style.borderWidth = '5px';

        isValid = false; // Prevent form submission
    } else {
        fullNameLatinElement.style.borderColor = '';
        fullNameLatinElement.style.borderWidth = '1px';
    }

    // Convert the input string to a Date object
    var birthDateObject = new Date(birthdate);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in years
    var age = currentDate.getFullYear() - birthDateObject.getFullYear();

    // Check if the birthday has occurred this year
    if (
        currentDate.getMonth() < birthDateObject.getMonth() ||
        (currentDate.getMonth() === birthDateObject.getMonth() &&
            currentDate.getDate() < birthDateObject.getDate())
    ) {
        age--;
    }

    // Check if the person is above 18
    if (age < 18) {
        alertString = alertString.concat("\n", 'Барои идома додан шумо бояд 18 сола ё калонтар бошед');
        birthdateElement.style.borderColor = 'red';
        birthdateElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    } else {
        birthdateElement.style.borderColor = '';
        birthdateElement.style.borderWidth = '1px';
    }

    // Validate RMA

    if (!/^\d{9}$/.test(rma.trim())) {
        rmaElement.style.borderColor = 'red';
        rmaElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'РМА бояд аз 9 рақам иборат бошад');
        isValid = false; // Prevent form submission
    } else {
        rmaElement.style.borderColor = '';
        rmaElement.style.borderWidth = '1px';
    }


    // Validate phoneNumber
    if (!/^\d{9}$/.test(phoneNumber.trim())) {
        phoneNumberElement.style.borderColor = 'red';
        phoneNumberElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'Рақами телефон бояд аз 9 рақам иборат бошад');

        isValid = false; // Prevent form submission
    } else {
        phoneNumberElement.style.borderColor = '';
        phoneNumberElement.style.borderWidth = '1px';
    }

    // validate passport number
    if (!/^[AА]\d{8}$/.test(passportNumber.trim())) {
        alertString = alertString.concat("\n", 'Рақами шиноснома бояд бо "A" оғоз шавад ва аз 8 рақам иборат бошад');
        passportNumberElement.style.borderColor = 'red';
        passportNumberElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    } else {
        passportNumberElement.style.borderColor = '';
        passportNumberElement.style.borderWidth = '1px';
    }

    if (!/^[а-яА-Я0-9\s'.,\/\\]+$/.test(address.trim())) {
        alertString = alertString.concat("\n", 'Нишона танҳо бояд аз ҳарфҳои кирилӣ, ракамхо, ва символҳои \', . / \\ иборат бошад');
        addressElement.style.borderColor = 'red';
        addressElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
        console.log('False validation')
    } else {
        addressElement.style.borderColor = '';
        addressElement.style.borderWidth = '1px';
        console.log('True validation')
    }

    // Convert attentionDate and completionDate to Date objects
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    var completionDateObj = new Date(completionDate.value);
    completionDateObj.setHours(0, 0, 0, 0);

    // Check if completionDate is today or a future date
    if (completionDateObj > currentDate) {
        completionDateElement.style.borderColor = 'red';
        completionDateElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'Санаи дурустро ворид кунед');
        isValid = false; // Prevent form submission
    } else {
        completionDateElement.style.borderColor = '';
        completionDateElement.style.borderWidth = '1px';
    }

    // Parse the date strings into Date objects
    var attentionDateObj = new Date(attentionDate);
    var completionDateObj = new Date(completionDate);

    // Calculate the time difference in milliseconds
    var timeDifference = completionDateObj - attentionDateObj;

    // Calculate the difference in days
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Validate if the difference is 3651 days or more
    if (daysDifference >= 3651) {
        // Valid case
        // Reset styles and proceed with form submission
        attentionDateElement.style.borderColor = '';
        attentionDateElement.style.borderWidth = '1px';
        completionDateElement.style.borderColor = '';
        completionDateElement.style.borderWidth = '1px';
    } else {
        // Invalid case
        alertString = alertString.concat("\n", 'Фарқи байни санаи  ва санаи оғози эътибор ва анҷоми эътибор бояд 10 сол бошад');
        attentionDateElement.style.borderColor = 'red';
        attentionDateElement.style.borderWidth = '5px';
        completionDateElement.style.borderColor = 'red';
        completionDateElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    }

    if (!isValid) {
        showCustomAlert(alertString);
    }
    // document.getElementById('popup').style.display = 'block';
    return isValid; // Allow form submission
}