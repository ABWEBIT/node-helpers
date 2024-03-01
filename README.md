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

Скачать последнюю версию Win64 OpenSSL Light (~5Mb) и установить.  
Расположить DLL файлы можно как в директории системы, так и в папке /bin.  
https://slproweb.com/products/Win32OpenSSL.html  

Чтобы OpenSSL работал из любой папки, надо добавить путь к программе в Environment Variables.  
1. ПКМ по меню Пуск -> System -> Advanced system settings -> Environment Variables
1.1 В разделе System Variables найти строку Path нажать Edit и добавить новую запись, путь к папке bin, в  
  

