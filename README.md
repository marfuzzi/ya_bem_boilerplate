Лента статей Яндекс.Дзен (bem-react)
-----------------------------------
Задание по БЭМ для ШРИ-2018

* [DEMO](https://shrouded-depths-78098.herokuapp.com/)

**Production**
```
npm i
npm run build
```
**Development**
```
npm i
npm run start
```
Открываем по адресу http://localhost:9000

**Linter**
```
npm run lint
```

**Описание**

В приложении использовано 4 уровня переопределения и собираются 3 бандла.

3 бандла для:
* PLATFORM=desktop
* PLATFORM=mobile
* PLATFORM=tablet

Уровни переопределения:
* Общий код для всех платформ
* Код для десктопов
* Код, для тач-устройств разделен на планшеты и телефоны

**Структура проекта**

* src/blocks - содержит блоки для всех платформ.
* src/desktop- содержит блоки для desktop.
* src/touch - содержит общие блоки для tablet и mobile.
* src/tablet - содержит блоки для tablet.
* src/mobile - содержит блоки для mobile.
