## Настройка NodeJS для работы в Windows с помощью Visual Studio Code

Скачать и установить Visual Studio Code. https://code.visualstudio.com/  
Никаких специальных настроек делать не надо, просто установить.

Скачать NodeJS (LTS) и установить. https://nodejs.org/  
В процессе установки ничего менять не надо, все нужные компоненты уже выбраны.  

Создать папку под проект.  
Открыть VS Code кликнув по папке правой кнопкой мышки, и выбрав пункт "Open with Code".

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/code.jpg?raw=true)

В редакторе кода открыть терминал

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/terminal.jpg?raw=true)

В терминале выполнить команду инициализации  
```
npm init --yes
```
Приписка --yes автоматически ответит на все вопросы в процессе инициализации, а дополнительную информацию можно будет внести позже в файл package.json, который будет создан по окончанию процесса, он отвечает за хранение информации о проекте, модулях, плагинах, связках и тд.  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/init.jpg?raw=true)

Установить Nodemon. https://github.com/remy/nodemon  

Nodemon - это инструмент, который автоматически перезапускает запущенное ранее приложение NodeJS при обнаружении изменений в файлах проекта.  
```
npm install --global nodemon
```
Приписка --global установит данный инструмент как глобальный пакет, который будет доступен во всех папках / проектах.  

Проверить работоспособность инструмента можно командой проверки версии.  
```
npm nodemon --version
```
![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/nodemon.jpg?raw=true)

Открыть файл package.json и внести изменения:  
- в строке "main": "index.js" изменить расширение файла на mjs - "main": "index.mjs"
- в блоке "scripts" добавить строку "start": "nodemon index.mjs"

### Оригинал
```
{
  "name": "site",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

### После изменений
```
{
  "name": "site",
  "version": "1.0.0",
  "main": "index.mjs",
  "scripts": {
    "start": "nodemon index.mjs",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Добавив строку "start": "nodemon index.mjs" мы сделали запуск nodemon командой npm start, теперь о nodemon можно забыть.

Типы расширений  
.js  - стандартное расширение JS, подходит для всего.  
.cjs - расширение для модульных систем JS, используется в серверных средах. (module.exports)  
.mjs - расширение для модульных систем JS со стандартом ECMAScript, используется в серверных средах. (import / export)  

Создать файл index.mjs в папке проекта и прописать в нём код запуска простого http сервера.  
Код стандартный, его разбирать не надо, можно взять готовый блок с сайта NodeJS. https://nodejs.org/

```
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Последний этап - это запуск сервера, для этого надо выполнить команду
```
npm start
```
Если в терминале не будет сообщений о ошибках, а в браузере по адресу http://127.0.0.1:3000/ появится Hello World, то это будет значить, что запуск прошёл успешно.

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/server.jpg?raw=true)

## Полезные команды NPM
### Локальные модули
Список всех локальных модулей
```
nmp list
```
Поиск устаревших локальных модулей
```
npm outdated
```
Обновление конкретного устаревшего локального модуля с сохранением версии в package.json
```
npm update <package_name> --save
```
Обновление всех устаревших локальных модулей с сохранением версий в package.json
```
npm update --save
```

### Глобальные модули
Список всех глобальных модулей
```
nmp list --global
```
Поиск устаревших глобальных модулей
```
npm outdated --global
```
Обновление конкретного устаревшего глобального модуля
```
npm update --global <package_name>
```
