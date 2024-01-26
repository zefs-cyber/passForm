document.getElementById('photo3x4').addEventListener('change', updateFileName);
document.getElementById('idPhotoFront').addEventListener('change', updateFileName);
document.getElementById('idPhotoBack').addEventListener('change', updateFileName);
document.getElementById('idWithPhoto').addEventListener('change', updateFileName);

function updateFileName() {
    var fileName = this.value.split('\\').pop();
    this.parentElement.querySelector('.file-name').innerText = fileName || 'File not selected';
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
        idPhotoFront: document.getElementById('idPhotoFront').files[0],
        idPhotoBack: document.getElementById('idPhotoBack').files[0],
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

function toggleForm(school, university, company, department, eduType, studentCard, photo3x4) {

    if(school == 'enable'){
        document.getElementById('schoolLabel').removeAttribute("required");
    } 

    if(university == 'enable'){
        document.getElementById('university').removeAttribute("required");
    }

    if(company == 'enable'){
        document.getElementById('company').removeAttribute("required");
    }

    if(department == 'enable'){
        document.getElementById('department').removeAttribute("required");
    }

    if(eduType == 'enable'){
        document.getElementById('eduType').removeAttribute("required");
    }
    
    if(studentCard == 'enable'){
        document.getElementById('studentCard').removeAttribute("required");
    }

    if(photo3x4 == 'enable'){
        document.getElementById('photo3x4').removeAttribute("required");
    }


    document.getElementById('school').className = school;
    document.getElementById('schoolLabel').className = school;

    document.getElementById('university').className = university;
    document.getElementById('universityLabel').className = university;

    document.getElementById('company').className = company;
    document.getElementById('companyLabel').className = company;

    document.getElementById('department').className = department;
    document.getElementById('departmentLabel').className = department;

    document.getElementById('eduType').className = eduType;
    document.getElementById('eduTypeLabel').className = eduType;

    document.getElementById('studentCard').className = studentCard;
    document.getElementById('studentCardLabel').className = studentCard;

    document.getElementById('3x4P').className = photo3x4;
    document.getElementById('3x4Label').className = 'file-input-button '.concat(photo3x4);
    document.getElementById('photo3x4').className = 'file-input '.concat(photo3x4);
    document.getElementById('3x4Span').className = 'file-name '.concat(photo3x4);

}

function closeUserType() {
    document.getElementById('userTypePop').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    var userType = document.getElementById('userType').value;
    if (userType == 'Талаба') {
        toggleForm('enable', 'disable', 'disable', 'disable', 'disable', 'disable', 'enable');
    } else if (userType == 'Донишчу') {
        toggleForm('disable', 'enable', 'disable', 'enable', 'enable', 'enable', 'enable');
    } else if (userType == 'Корманд') {
        toggleForm('disable', 'disable', 'enable', 'disable', 'disable', 'disable', 'disable');
    } else {
        showCustomAlert('Категорияро интихоб кунед!')
    }
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
    var alertString = "Attention:";

    // Check if fullNameCyrillic contains only Cyrillic letters
    if (!/^[а-яА-Я\s]+$/.test(fullNameCyrillic.trim())) {
        alertString = alertString.concat("\n", 'Full name (Cyrillic) should only contain Cyrillic letters');
        fullNameCyrillicElement.style.borderColor = 'red';
        fullNameCyrillicElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    } else {
        fullNameCyrillicElement.style.borderColor = '';
        fullNameCyrillicElement.style.borderWidth = '1px';
    }

    // Check if fullNameLatin contains only Latin letters
    if (!/^[a-zA-Z\s]+$/.test(fullNameLatin.trim())) {
        alertString = alertString.concat("\n", 'Full name (Latin) should only contain Latin letters');
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
        alertString = alertString.concat("\n", 'To proceed, you must be 18 years or older');
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
        alertString = alertString.concat("\n", 'ITN should be a 9-digit number');
        isValid = false; // Prevent form submission
    } else {
        rmaElement.style.borderColor = '';
        rmaElement.style.borderWidth = '1px';
    }

    // Validate phoneNumber
    if (!/^\d{9}$/.test(phoneNumber.trim())) {
        phoneNumberElement.style.borderColor = 'red';
        phoneNumberElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'Phone number should be a 9-digit number');
        isValid = false; // Prevent form submission
    } else {
        phoneNumberElement.style.borderColor = '';
        phoneNumberElement.style.borderWidth = '1px';
    }

    // validate passport number
    if (!/^[AА]\d{8}$/.test(passportNumber.trim())) {
        alertString = alertString.concat("\n", 'Passport number should start with "A" and be followed by 8 digits');
        passportNumberElement.style.borderColor = 'red';
        passportNumberElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    } else {
        passportNumberElement.style.borderColor = '';
        passportNumberElement.style.borderWidth = '1px';
    }

    if (!/^[а-яА-Я0-9\s'.,\/\\]+$/.test(address.trim())) {
        alertString = alertString.concat("\n", 'Address should only contain Cyrillic letters, numbers, and the following symbols: \', . / \\');
        addressElement.style.borderColor = 'red';
        addressElement.style.borderWidth = '5px';
        isValid = false; // Prevent form submission
    } else {
        addressElement.style.borderColor = '';
        addressElement.style.borderWidth = '1px';
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
        alertString = alertString.concat("\n", 'Please enter a valid passport expiry date');
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
        alertString = alertString.concat("\n", 'The difference between the issue date and expiry date of passport must be at least 10 years');
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
