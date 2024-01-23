document.getElementById('photo3x4').addEventListener('change', updateFileName);
document.getElementById('idPhotoFront').addEventListener('change', updateFileName);
document.getElementById('idPhotoBack').addEventListener('change', updateFileName);
document.getElementById('idWithPhoto').addEventListener('change', updateFileName);

function updateFileName() {
    var fileName = this.value.split('\\').pop();
    this.parentElement.querySelector('.file-name').innerText = fileName || 'Файл не выбран';
}

function submitForm() {
    // Собрать данные формы
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

    // Можно отправить formData на сервер с использованием AJAX или выполнить другие действия по мере необходимости
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
    // Добавьте свою логику валидации здесь
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
    var alertString = "Внимание:";

    // Проверить, содержит ли fullNameCyrillic только кириллические буквы
    if (!/^[а-яА-Я\s]+$/.test(fullNameCyrillic.trim())) {
        alertString = alertString.concat("\n", 'ФИО (кириллица) должно содержать только кириллические буквы');
        fullNameCyrillicElement.style.borderColor = 'red';
        fullNameCyrillicElement.style.borderWidth = '5px';
        isValid = false; // Предотвратить отправку формы
    } else {
        fullNameCyrillicElement.style.borderColor = '';
        fullNameCyrillicElement.style.borderWidth = '1px';
    }

    // Проверить, содержит ли fullNameLatin только латинские буквы
    if (!/^[a-zA-Z\s]+$/.test(fullNameLatin.trim())) {
        alertString = alertString.concat("\n", 'ФИО (латиница) должно содержать только латинские буквы');
        fullNameLatinElement.style.borderColor = 'red';
        fullNameLatinElement.style.borderWidth = '5px';
        isValid = false; // Предотвратить отправку формы
    } else {
        fullNameLatinElement.style.borderColor = '';
        fullNameLatinElement.style.borderWidth = '1px';
    }

    // Преобразовать входную строку в объект Date
    var birthDateObject = new Date(birthdate);

    // Получить текущую дату
    var currentDate = new Date();

    // Рассчитать разницу в годах
    var age = currentDate.getFullYear() - birthDateObject.getFullYear();

    // Проверить, произошел ли день рождения в этом году
    if (
        currentDate.getMonth() < birthDateObject.getMonth() ||
        (currentDate.getMonth() === birthDateObject.getMonth() &&
            currentDate.getDate() < birthDateObject.getDate())
    ) {
        age--;
    }

    // Проверить, что человек старше 18 лет
    if (age < 18) {
        alertString = alertString.concat("\n", 'Для подачи заявления вам должно быть 18 лет или старше');
        birthdateElement.style.borderColor = 'red';
        birthdateElement.style.borderWidth = '5px';
        isValid = false; // Предотвратить отправку формы
    } else {
        birthdateElement.style.borderColor = '';
        birthdateElement.style.borderWidth = '1px';
    }

    // Проверить RMA

    if (!/^\d{9}$/.test(rma.trim())) {
        rmaElement.style.borderColor = 'red';
        rmaElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'ИНН должно содержать 9 цифр');
        isValid = false; // Предотвратить отправку формы
    } else {
        rmaElement.style.borderColor = '';
        rmaElement.style.borderWidth = '1px';
    }

    // Проверить phoneNumber
    if (!/^\d{9}$/.test(phoneNumber.trim())) {
        phoneNumberElement.style.borderColor = 'red';
        phoneNumberElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'Номер телефона должен содержать 9 цифр');
        isValid = false; // Предотвратить отправку формы
    } else {
        phoneNumberElement.style.borderColor = '';
        phoneNumberElement.style.borderWidth = '1px';
    }

    // Проверить номер паспорта
    if (!/^[AА]\d{8}$/.test(passportNumber.trim())) {
        alertString = alertString.concat("\n", 'Номер паспорта должен начинаться с "A" и содержать 8 цифр');
        passportNumberElement.style.borderColor = 'red';
        passportNumberElement.style.borderWidth = '5px';
        isValid = false; // Предотвратить отправку формы
    } else {
        passportNumberElement.style.borderColor = '';
        passportNumberElement.style.borderWidth = '1px';
    }

    if (!/^[а-яА-Я0-9\s'.,\/\\]+$/.test(address.trim())) {
        alertString = alertString.concat("\n", 'Адрес должен содержать только кириллические буквы, цифры, и символы \', . / \\');
        addressElement.style.borderColor = 'red';
        addressElement.style.borderWidth = '5px';
        isValid = false; // Предотвратить отправку формы
        console.log('False validation')
    } else {
        addressElement.style.borderColor = '';
        addressElement.style.borderWidth = '1px';
        console.log('True validation')
    }

    // Преобразовать attentionDate и completionDate в объекты Date
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    var completionDateObj = new Date(completionDate.value);
    completionDateObj.setHours(0, 0, 0, 0);

    // Проверить, является ли completionDate сегодняшней или будущей датой
    if (completionDateObj > currentDate) {
        completionDateElement.style.borderColor = 'red';
        completionDateElement.style.borderWidth = '5px';
        alertString = alertString.concat("\n", 'Введите действительную дату истечения паспорта');
        isValid = false; // Предотвратить отправку формы
    } else {
        completionDateElement.style.borderColor = '';
        completionDateElement.style.borderWidth = '1px';
    }

    // Преобразовать строки дат в объекты Date
    var attentionDateObj = new Date(attentionDate);
    var completionDateObj = new Date(completionDate);

    // Рассчитать разницу во времени в миллисекундах
    var timeDifference = completionDateObj - attentionDateObj;

    // Рассчитать разницу в днях
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Проверить, является ли разница 3651 день или более
    if (daysDifference >= 3651) {
        // Допустимый случай
        // Сбросить стили и продолжить отправку формы
        attentionDateElement.style.borderColor = '';
        attentionDateElement.style.borderWidth = '1px';
        completionDateElement.style.borderColor = '';
        completionDateElement.style.borderWidth = '1px';
    } else {
        // Недопустимый случай
        alertString = alertString.concat("\n", 'Разница между датой выдачи и датой истечения паспорта должна быть не менее 10 лет');
        attentionDateElement.style.borderColor = 'red';
        attentionDateElement.style.borderWidth = '5px';
        completionDateElement.style.borderColor = 'red';
        completionDateElement.style.borderWidth = '5px';
        isValid = false; // Предотвратить отправку формы
    }

    if (!isValid) {
        showCustomAlert(alertString);
    }
    // document.getElementById('popup').style.display = 'block';
    return isValid; // Разрешить отправку формы
}
