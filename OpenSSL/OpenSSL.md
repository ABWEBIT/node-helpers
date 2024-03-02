## OpenSSL
Официальный сайт  
https://www.openssl.org/  

Ссылки на сайты с дистрибутивами OpenSSL  
https://wiki.openssl.org/index.php/Binaries   

## Заметки  
Файлы с расширением .pem универсальные и предназначены для хранения: приватных и публичных ключей, SSL сертификатов.  
Подходит для Unix / Windows систем. Кодировка файла: Base64 ASCII  

## Cоздание самозаверенного SSL сертификата в Windows 11

Скачать последнюю версию OpenSSL Win64 Light (~5Mb) и установить.  
При установке будет предложен выбор с вариантами расположения DLL файлов.  
Рекомендую выбрать вариант с расположением DLL файлов в папке bin.  
https://slproweb.com/products/Win32OpenSSL.html  

Чтобы OpenSSL работал из любого места в системе, надо добавить путь к папке OpenSSL в Environment Variables.
Открыть командную строку от имени Админа и ввести команду  
```
rundll32.exe sysdm.cpl,EditEnvironmentVariables
```
Добавить новую строку с указанием пути к папке bin внутри папки с установленной OpenSSL.  
Пример: C:\Program Files\OpenSSL\bin  
  
Открыть командную строку (новое окно) и прописать openssl version, если всё хорошо, то будет показана версия openssl.  

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
