## Подготовка рабочего пространства в Windows
Скачать NodeJS (LTS) с сайта и установить, в процессе установки ничего менять не надо, все нужные компоненты уже выбраны.
```
https://nodejs.org/
```
Создать папку под будущий проект.  

В папке с проектом открыть редактор кода и в терминале редактора выполнить команду инициализации:  
```
npm init --yes
```
Приписка --yes автоматических ответит на все вопросы в процессе инициализации, а дополнительную информацию можно будет внести позже в файл package.json, который будет создан по окончанию процесса, он отвечает за хранение информации о приложении.  

![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/init.jpg?raw=true)

Далее надо установить Nodemon. https://github.com/remy/nodemon  

Nodemon - это инструмент, который автоматически перезапускает приложение NodeJS при обнаружении изменений в файле каталога.  
```
npm install --global nodemon
```
Приписка --global установит данный инструмент как глобальный пакет, который будет доступен во всех папках / проектах.  

Проверить работоспособность инструмента можно командой проверки версии.  
```
npm nodemon --version
```
![image](https://github.com/ABWEBIT/Node-Helpers/blob/main/node-project/images/nodemon.jpg?raw=true)

Далее надо открыть файл package.json и внести следующие изменения:  
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

В этом этапе мы заменили стандартное расширение файла на mjs, который является стандартном ECMAScript для модульных систем с функциями import / export и добавили запуск nodemon через команду npm start.

Заметка по типам расширений.
.js  - стандартное расширение JS, подходит для всего.  
.cjs - расширение для модульных систем JS, используется в серверных средах. (module.exports)  
.mjs - расширение для модульных систем JS со стандартом ECMAScript, используется в серверных средах. (import / export)  

