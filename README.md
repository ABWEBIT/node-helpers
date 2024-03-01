# Node-Helpers  

### OpenSSL
Официальный сайт  
https://www.openssl.org/  

Бесплатная книжка  
https://www.feistyduck.com/library/openssl-cookbook/online/  

Ссылки на сайты с установочными файлами OpenSSL для Windows  
https://wiki.openssl.org/index.php/Binaries  
https://slproweb.com/products/Win32OpenSSL.html  

Расширения файлов  
.pem - хранение SSL сертификатов, приватных и публичных ключей. Unix / Windows. Base64 ASCII  

.crt / .cer - хранение публичного ключа SSL/TLS сертификата. Unix системы - .crt, Windows - .cer. Base64 ASCII  

.key - хранение приватных ключей SSL сертификата. Файлы .key могут быть защищены паролем для дополнительной безопасности.  


### Инструкция по созданию самозаверенного SSL сертификата  

https://slproweb.com/products/Win32OpenSSL.html  
Скачать последнюю версию Win64 OpenSSL Light (~5Mb) и установить.  
Расположить DLL файлы можно и в директории системы, и в папке bin внутри папки с установленной OpenSSL.  

Чтобы OpenSSL работал из любой папки, надо добавить путь к программе в Environment Variables.  

ПКМ по меню Пуск -> System -> Advanced system settings -> Environment Variables.  
В разделе System Variables найти строку Path нажать Edit.  
Добавить новую строку с указанием пути к папке bin внутри папки с установленной OpenSSL.
Пример: C:\Program Files\OpenSSL\bin
  
  

