## OpenSSL
Официальный сайт  
https://www.openssl.org/  

Ссылки на сайты с дистрибутивами OpenSSL  
https://wiki.openssl.org/index.php/Binaries   

## Файлы и расширения 
Файлы с расширением .pem универсальные и предназначены для хранения: приватных и публичных ключей, SSL сертификатов.  
Подходит для Unix / Windows систем. Кодировка файла: Base64 ASCII  

## Установка OpenSSL в Windows 11

Скачать последнюю версию OpenSSL Win64 Light (~5Mb) и установить.  
При установке будет предложен выбор с вариантами расположения DLL файлов.  
Выбрать вариант с расположением DLL файлов в папке bin.  
https://slproweb.com/products/Win32OpenSSL.html  

Чтобы OpenSSL работал из любого места в системе, надо добавить путь к OpenSSL в Environment Variables.  
Открыть командную строку от имени Админа и ввести команду  
```
rundll32.exe sysdm.cpl,EditEnvironmentVariables
```

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/OpenSSL/images/env.jpg?raw=true)

В блоке System variables выбрать пункт Path и начать изменение (Edit).  
Добавить новую строку с указанием пути к папке bin внутри папки с установленной OpenSSL.  
Обратную косую черту в конце пути добавлять не надо.  
Важно проверить у себя путь к папке, он может быть другой.  
Пример: C:\Program Files\OpenSSL\bin  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/OpenSSL/images/path.jpg?raw=true)

После внесённых изменений в Environment Variables открыть новую командную строку и прописать команду openssl version, если всё хорошо, будет показана версия установленного openssl.  

## Cоздание самозаверенного SSL сертификата

Открываем командную строку в нужной нам директории.  

Генерируем "приватный ключ" (Private Key).  
```
openssl genrsa -out key.pem 4096  
```

Генерируем "запрос на подпись" (Certificate signing request / CSR).  
При генерации будут заданы вопросы, их можно пропустить, создание пароля тоже можно пропустить.  
```
openssl req -new -key key.pem -out csr.pem  
```

Генерируем сертификат, кол-во дней можно сделать больше.
```
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out crt.pem
```
