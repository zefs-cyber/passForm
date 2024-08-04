# myapp/models.py
from django.db import models
import os

def custom_photo_filename(instance, filename):
    return os.path.join('3x4', f'{instance.fullNameCyrillic}_photo3x4.jpg')

def custom_back_id_photo_filename(instance, filename):
    return os.path.join('passportFront', f'{instance.fullNameCyrillic}_idPhotoFront.jpg')

def custom_front_id_photo_filename(instance, filename):
    return os.path.join('passportBack', f'{instance.fullNameCyrillic}_idPhotoBack.jpg')

def custom_id_with_photo_filename(instance, filename):
    return os.path.join('selfie', f'{instance.fullNameCyrillic}_idWithPhoto.jpg')

class FormData(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    MARITAL_STATUS_CHOICES = [
        ('Married', 'Married'),
        ('Single', 'Single'),
        ('Divorced', 'Divorced'),
    ]

    DEPARTMENT_CHOICES = [
        ('факултети идоракунии давлат', 'факултети идоракунии давлат'),
        ('факултети хукукшиноси', 'факултети хукукшиноси'),
        ('факултети дипломатия ва сиёсат', 'факултети дипломатия ва сиёсат'),
        ('факултети тахсилоти фосилави ва тахсилоти дуюми олии касби', 'факултети тахсилоти фосилави ва тахсилоти дуюми олии касби'),
        ('шуъбаи магистратура', 'шуъбаи магистратура'),
        ('магистратураи "мактаби давлатдории Эмомали Рахмон"', 'магистратураи "мактаби давлатдории Эмомали Рахмон"'),
        ('шуъбаи омодакунии кадрхои илми ва илми-педагоги', 'шуъбаи омодакунии кадрхои илми ва илми-педагоги'),
    ]
    
    EDU_TYPE_CHOICES = [
        ('Рӯзона','Рӯзона'),
        ('Ғоибона','Ғоибона')
    ]

    JOB_LOCATION_CHOICES = [
        ('РВКД дар шаҳри Душанбе', 'РВКД дар шаҳри Душанбе'),
        ('ШВКД дар ноҳияи И.Сомонӣ', 'ШВКД дар ноҳияи И.Сомонӣ'),
        ('ШВКД-1 дар ноҳияи Шоҳмансур', 'ШВКД-1 дар ноҳияи Шоҳмансур'),
        ('ШВКД-2 дар ноҳияи Шоҳмансур', 'ШВКД-2 дар ноҳияи Шоҳмансур'),
        ('ШВКД-1 дар ноҳияи Фирдавсӣ', 'ШВКД-1 дар ноҳияи Фирдавсӣ'),
        ('ШВКД-2 дар ноҳияи Фирдавсӣ', 'ШВКД-2 дар ноҳияи Фирдавсӣ'),
        ('ШВКД -1 дар ноҳияи Сино', 'ШВКД -1 дар ноҳияи Сино'),
        ('ШВКД -2 дар ноҳияи Сино', 'ШВКД -2 дар ноҳияи Сино'),
        ('ШВКД дар ноҳияи Варзоб', 'ШВКД дар ноҳияи Варзоб'),
        ('ШВКД дар ноҳияи Ҳисор', 'ШВКД дар ноҳияи Ҳисор'),
        ('ШВКД дар ноҳияи Ваҳдат', 'ШВКД дар ноҳияи Ваҳдат'),
        ('ШВКД-1 дар ноҳияи Рӯдакӣ', 'ШВКД-1 дар ноҳияи Рӯдакӣ'),
        ('ШВКД-2 дар ноҳияи Рӯдакӣ', 'ШВКД-2 дар ноҳияи Рӯдакӣ'),
        ('ШВКД дар ноҳияи Турсунзода', 'ШВКД дар ноҳияи Турсунзода'),
        ('ШВКД дар ноҳияи Шаҳринав', 'ШВКД дар ноҳияи Шаҳринав'),
        ('ШВКД дар ноҳияи Файзобод', 'ШВКД дар ноҳияи Файзобод'),
        ('ШВКД дар шаҳри Роғун', 'ШВКД дар шаҳри Роғун'),
        ('РВКД дар вилояти Хатлон', 'РВКД дар вилояти Хатлон'),
        ('ШВКД дар ш.Бохтар', 'ШВКД дар ш.Бохтар'),
        ('Қисми минтақавӣ оид ба гуруҳи ноҳияҳои Кӯлоб', 'Қисми минтақавӣ оид ба гуруҳи ноҳияҳои Кӯлоб'),
        ('ШВКД дар шаҳри Кӯлоб', 'ШВКД дар шаҳри Кӯлоб'),
        ('ШВКД дар ноҳияи А.Ҷомӣ', 'ШВКД дар ноҳияи А.Ҷомӣ'),
        ('ШВКД дар ноҳияи Балҷувон', 'ШВКД дар ноҳияи Балҷувон'),
        ('ШВКД дар ноҳияи Кӯшониён', 'ШВКД дар ноҳияи Кӯшониён'),
        ('ШВКД дар ноҳияи Вахш', 'ШВКД дар ноҳияи Вахш'),
        ('ШВКД дар ноҳияи Восеъ', 'ШВКД дар ноҳияи Восеъ'),
        ('ШВКД дар ноҳияи Данғара', 'ШВКД дар ноҳияи Данғара'),
        ('ШВКД дар ноҳияи Ёвон', 'ШВКД дар ноҳияи Ёвон'),
        ('ШВКД дар шаҳри Норак', 'ШВКД дар шаҳри Норак'),
        ('ШВКД дар ноҳияи Панҷ', 'ШВКД дар ноҳияи Панҷ'),
        ('ШВКД дар ноҳияи Леваканд', 'ШВКД дар ноҳияи Леваканд'),
        ('ШВКД дар ноҳияи Қубодиён', 'ШВКД дар ноҳияи Қубодиён'),
        ('ШВКД дар ноҳияи Ҷайҳун', 'ШВКД дар ноҳияи Ҷайҳун'),
        ('ШВКД дар ноҳияи Ҳамадонӣ', 'ШВКД дар ноҳияи Ҳамадонӣ'),
        ('ШВКД дар ноҳияи Муъминобод', 'ШВКД дар ноҳияи Муъминобод'),
        ('ШВКД дар ноҳияи Н.Хусрав', 'ШВКД дар ноҳияи Н.Хусрав'),
        ('ШВКД дар ноҳияи Темурмалик', 'ШВКД дар ноҳияи Темурмалик'),
        ('ШВКД дар ноҳияи Фархор', 'ШВКД дар ноҳияи Фархор'),
        ('ШВКД дар ноҳияи Ховалинг', 'ШВКД дар ноҳияи Ховалинг'),
        ('ШВКД дар ноҳияи Хуросон', 'ШВКД дар ноҳияи Хуросон'),
        ('ШВКД дар ноҳияи Ҷ.Балхӣ', 'ШВКД дар ноҳияи Ҷ.Балхӣ'),
        ('ШВКД дар ноҳияи Дӯстӣ', 'ШВКД дар ноҳияи Дӯстӣ'),
        ('ШВКД дар ноҳияи Шаҳритус', 'ШВКД дар ноҳияи Шаҳритус'),
        ('ШВКД дар ноҳияи Ш.Шоҳин', 'ШВКД дар ноҳияи Ш.Шоҳин'),
        ('РВКД дар вилояти Суғд', 'РВКД дар вилояти Суғд'),
        ('ШВКД дар шаҳри Хуҷанд', 'ШВКД дар шаҳри Хуҷанд'),
        ('ШВКД дар ноҳияи Айнӣ', 'ШВКД дар ноҳияи Айнӣ'),
        ('ШВКД дар ноҳияи Ашт', 'ШВКД дар ноҳияи Ашт'),
        ('ШВКД дар ноҳияи Б.Ғафуров', 'ШВКД дар ноҳияи Б.Ғафуров'),
        ('ШВКД дар ноҳияи Гулистон', 'ШВКД дар ноҳияи Гулистон'),
        ('ШВКД дар ноҳияи Ғончӣ', 'ШВКД дар ноҳияи Ғончӣ'),
        ('ШВКД дар ноҳияи Кӯҳистони Мастчоҳ', 'ШВКД дар ноҳияи Кӯҳистони Мастчоҳ'),
        ('ШВКД дар ноҳияи Мастчоҳ', 'ШВКД дар ноҳияи Мастчоҳ'),
        ('ШВКД дар ноҳияи Ҷ.Расулов', 'ШВКД дар ноҳияи Ҷ.Расулов'),
        ('ШВКД дар ноҳияи Исфара-1', 'ШВКД дар ноҳияи Исфара-1'),
        ('ШВКД дар ноҳияи Исфара-2', 'ШВКД дар ноҳияи Исфара-2'),
        ('ШВКД дар шаҳри Бӯстон', 'ШВКД дар шаҳри Бӯстон'),
        ('ШВКД дар ноҳияи Спитамен', 'ШВКД дар ноҳияи Спитамен'),
        ('ШВКД дар ноҳияи Истаравшан', 'ШВКД дар ноҳияи Истаравшан'),
        ('ШВКД дар ноҳияи Шаҳристон', 'ШВКД дар ноҳияи Шаҳристон'),
        ('ШВКД дар шаҳри Истиқлол', 'ШВКД дар шаҳри Истиқлол'),
        ('ШВКД дар шаҳри Конибодом', 'ШВКД дар шаҳри Конибодом'),
        ('ШВКД дар шаҳри Панҷакент', 'ШВКД дар шаҳри Панҷакент'),
        ('ШВКД дар ноҳияи Зафаробод', 'ШВКД дар ноҳияи Зафаробод'),
        ('РВКД дар ВМКБ', 'РВКД дар ВМКБ'),
        ('ШВКД дар шаҳри Хоруғ', 'ШВКД дар шаҳри Хоруғ'),
        ('ШВКД дар ноҳияи Ванҷ', 'ШВКД дар ноҳияи Ванҷ'),
        ('ШВКД дар ноҳияи Дарвоз', 'ШВКД дар ноҳияи Дарвоз'),
        ('ШВКД дар ноҳияи Ишкошим', 'ШВКД дар ноҳияи Ишкошим'),
        ('ШВКД дар ноҳияи Мурғоб', 'ШВКД дар ноҳияи Мурғоб'),
        ('ШВКД дар ноҳияи Роштқалъа', 'ШВКД дар ноҳияи Роштқалъа'),
        ('ШВКД дар ноҳияи Рушон', 'ШВКД дар ноҳияи Рушон'),
        ('ШВКД дар ноҳияи Шуғнон', 'ШВКД дар ноҳияи Шуғнон'),
        ('РВКД дар минтақа ва ноҳияи Рашт', 'РВКД дар минтақа ва ноҳияи Рашт'),
        ('ШВКД дар шаҳраки Навобод', 'ШВКД дар шаҳраки Навобод'),
        ('ШВКД дар ноҳияи Нуробод', 'ШВКД дар ноҳияи Нуробод'),
        ('ШВКД дар ноҳияи Сангвор', 'ШВКД дар ноҳияи Сангвор'),
        ('ШВКД дар ноҳияи Тоҷикобод', 'ШВКД дар ноҳияи Тоҷикобод'),
        ('ШВКД дар ноҳияи Лахш', 'ШВКД дар ноҳияи Лахш')
    ]

    fullNameCyrillic = models.CharField(max_length=100)
    fullNameLatin = models.CharField(max_length=100)
    birthdate = models.DateField()
    department = models.CharField(max_length=100, choices=DEPARTMENT_CHOICES, blank=True, null=True)
    eduType = models.CharField(max_length=100, choices=EDU_TYPE_CHOICES, blank=True, null=True)
    studentCard = models.CharField(max_length=12, blank=True)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    issueDate = models.DateField()
    expiryDate = models.DateField()
    passportNumber = models.CharField(max_length=255)
    address = models.TextField()
    rma = models.CharField(max_length=9)
    jobLocation = models.CharField(max_length=255, choices=JOB_LOCATION_CHOICES)
    phoneNumber = models.CharField(max_length=255)
    photo3x4 = models.ImageField(upload_to=custom_photo_filename, blank=True, null=True)
    idPhotoFront = models.ImageField(upload_to=custom_front_id_photo_filename)
    idPhotoBack = models.ImageField(upload_to=custom_back_id_photo_filename)
    idWithPhoto = models.ImageField(upload_to=custom_id_with_photo_filename)
    school = models.CharField(max_length=255, blank=True)
    company = models.CharField(max_length=255, blank=True)
    university = models.CharField(max_length=255, blank=True)
    userType = models.CharField(max_length=20)
    region = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.fullNameLatin} - {self.rma}"


