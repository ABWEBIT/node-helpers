# Node-Helpers  

### OpenSSL
Официальный сайт  
https://www.openssl.org/  

Бесплатная книжка  
https://www.feistyduck.com/library/openssl-cookbook/online/  

Ссылки на сайты с установочными файлами OpenSSL для Windows  
https://wiki.openssl.org/index.php/Binaries  
https://slproweb.com/products/Win32OpenSSL.html  

### Заметки  
Файлы с расширением .pem являются распространённым хранилищем SSL сертификатов, приватных и публичных ключей. Unix / Windows. Base64 ASCII  

---

### Инструкция по созданию самозаверенного SSL сертификата  

Скачать последнюю версию Win64 OpenSSL Light (~5Mb) и установить.  
Расположить DLL файлы можно и в директории системы, и в папке bin внутри папки с установленной OpenSSL.  
https://slproweb.com/products/Win32OpenSSL.html  

Чтобы OpenSSL работал из любого места, надо добавить путь к программе в Environment Variables.  

ПКМ по меню Start -> System -> Advanced system settings -> Environment Variables.  
В разделе System Variables найти строку Path нажать Edit.  
Добавить новую строку с указанием пути к папке bin внутри папки с установленной OpenSSL.  
Пример: C:\Program Files\OpenSSL\bin  
  
Открыть командную строку (новое окно) и прописать команду openssl version, если всё сделано правильно, то openssl покажет установленную версию.  

Далее открываем командную строку или терминал в директории для сертификатов и генерируем приватный ключ  
openssl genrsa -out key.pem 4096  

Далее генерируем "запрос на подпись сертификата" (Certificate signing request / CSR)  
