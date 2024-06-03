## Базовая настройка NodeJS в Windows 11 с помощью Visual Studio Code

Скачать и установить Visual Studio Code. https://code.visualstudio.com/  
Никаких настроек делать не надо, просто установить.

Скачать NodeJS (LTS) и установить. https://nodejs.org/  
В процессе установки ничего менять не надо, все нужные компоненты уже выбраны. После выбора компонентов, инсталлятор предложит установку дополнительных инструментов, для базовой настройки и простой работы они не требуется, можно пропустить.

Компоненты  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/node-features.webp?raw=true)

Дополнительные инструменты  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/node-tools.webp?raw=true)

Создать папку под проект.  
Открыть VS Code, кликнув по папке проекта правой кнопкой мышки и выбрав пункт "Open with Code".

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/vscode.webp?raw=true)

В редакторе кода открыть терминал. Все последующие команды вводить в терминале.

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/terminal.webp?raw=true)

Проверить доступность NodeJS можно командой проверки версии.
```
node --version
```
![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/node.webp?raw=true)

Выполнить команду инициализации.
```
npm init --yes
```
Приписка --yes автоматически ответит на все вопросы в процессе инициализации, изменить или дополнить информацию можно будет позже в файле package.json, который будет создан по окончанию процесса, он отвечает за хранение информации о проекте, пакетах, связках и тд.  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/init.webp?raw=true)

Nodemon - это инструмент, который автоматически перезапускает запущенное ранее приложение NodeJS при обнаружении изменений в файлах проекта. https://github.com/remy/nodemon  

Установить Nodemon выполнив команду установки.
```
npm install --global nodemon
```
Приписка --global установит данный инструмент как глобальный пакет, который будет доступен во всех папках / проектах.  

Проверить доступность Nodemon можно командой проверки версии.  
```
npm nodemon --version
```
![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/nodemon.webp?raw=true)

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

Добавив строку "start": "nodemon index.mjs" мы сделали запуск nodemon командой npm start, теперь о Nodemon можно забыть.

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/package.webp?raw=true)

## Типы расширений  
-> .js стандартное расширение JS, подходит для всего.  
-> .cjs расширение для модульных систем JS, используется в серверных средах. (module.exports)  
-> .mjs расширение для модульных систем JS (стандарт ECMAScript), используется в серверных средах. (import / export)  

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

Последний этап - это запуск сервера, для этого надо выполнить команду.
```
npm start
```
Если в терминале не будет сообщений о ошибках, а в браузере по адресу http://127.0.0.1:3000/ появится Hello World, то это будет значить, что запуск прошёл успешно.

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/server.webp?raw=true)

## Полезные команды NPM
<package_name> - заменяется названием пакета, без посторонних символов, например nodemoon.

Список всех локальных пакетов
```
nmp list
```
Список всех глобальных пакетов
```
nmp list --global
```
Поиск устаревших локальных пакетов
```
npm outdated
```
Поиск устаревших глобальных пакетов
```
npm outdated --global
```
Обновление конкретного устаревшего локального пакета, файл package.json будет автоматически обновлён
```
npm update <package_name> --save
```
Обновление конкретного устаревшего глобального пакета
```
npm update --global <package_name>
```
Обновление всех устаревших локальных пакетов, файл package.json будет автоматически обновлён
```
npm update --save
```
Обновление всех устаревших глобальных пакетов
```
npm update --global
```
Установка конкретного пакета, файл package.json будет автоматически обновлён
```
npm install <package_name>
```
Установка конкретного пакета, как глобальный пакет, никаких изменений в package.json
```
npm install --global <package_name>
```
Удаление конкретного пакета, файл package.json будет автоматически обновлён
```
npm uninstall <package_name>
```
Удаление конкретного устаревшего глобального пакета
```
npm uninstall --global <package_name>
```
