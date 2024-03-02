## OpenSSL
Официальный сайт  
https://www.openssl.org/  

Wiki с cсылками на сайты с инсталляторами OpenSSL  
https://wiki.openssl.org/index.php/Binaries   

## Заметки  
Файлы с расширением .pem являются распространённым типом файлов предназначенным для хранения: приватных и публичных ключей, SSL сертификатов.  
Подходит для Unix / Windows систем. Кодировка файла: Base64 ASCII  

## Cоздание самозаверенного SSL сертификата в Windows 11

Скачать последнюю версию OpenSSL Win64 Light (~5Mb) и установить.  
При установке будет задан вопрос о расположении DLL файлов.  
Расположить их можно в директории системы и в папке bin внутри папки с установленной OpenSSL.  
https://slproweb.com/products/Win32OpenSSL.html  

Чтобы OpenSSL работал из любого места, надо добавить путь к папке OpenSSL в Environment Variables.  
  
ПКМ по меню Start -> System -> Advanced system settings -> Environment Variables.  
В разделе System Variables найти строку Path нажать Edit.  
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
