## Подготовка NodeJS к работе в Windows 11 с помощью Visual Studio Code

Скачать и установить Visual Studio Code. https://code.visualstudio.com/  
Никаких настроек делать не надо, просто установить.

Скачать NodeJS (LTS) и установить. https://nodejs.org/  
В процессе установки ничего менять не надо, все нужные компоненты уже выбраны. После выбора компонентов, будет предложена установка дополнительных инструментов, для базовой настройки и простой работы они не требуются, можно пропустить.

Компоненты  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/node-features.webp?raw=true)

Дополнительные инструменты  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/node-tools.webp?raw=true)

Создать папку под проект. Кликнуть по папке проекта правой кнопкой мышки и выбрать пункт "Open with Code".

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/vscode.webp?raw=true)

В редакторе кода открыть терминал. Все последующие команды вводить в терминале.

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/terminal.webp?raw=true)

Проверить доступность NodeJS командой с запросом версии
```
node --version
```
![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/node.webp?raw=true)

Выполнить команду инициализации
```
npm init --yes
```
Приписка --yes автоматически ответит на все вопросы в процессе инициализации, изменить или дополнить информацию можно будет позже в файле package.json, который будет создан по окончанию процесса, он отвечает за хранение информации о проекте, пакетах, связках и тд.  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/init.webp?raw=true)

Nodemon - это инструмент, который автоматически перезапускает запущенное ранее приложение NodeJS при обнаружении изменений в файлах проекта. https://github.com/remy/nodemon  

Установить Nodemon выполнив команду установки
```
npm install --global nodemon
```
Приписка --global установит данный инструмент как глобальный пакет, который будет доступен во всех папках / проектах.  

Проверить доступность Nodemon командой с запросом версии 
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
- .js стандартное расширение JS, подходит для всего.  
- .cjs расширение для модульных систем JS, используется в серверных средах. (module.exports)  
- .mjs расширение для модульных систем JS (стандарт ECMAScript), используется в серверных средах. (import / export)  

Создать файл index.mjs в папке проекта и прописать в нём код запуска простого http сервера.  
Код стандартный и вникать в него не надо, готовый блок кода можно взять тут или с сайта NodeJS. https://nodejs.org/

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
Если в терминале нет сообщений о ошибках, а в браузере по адресу http://127.0.0.1:3000/ есть Hello World, то это означает, что запуск прошёл успешно.

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-start/images/server.webp?raw=true)
