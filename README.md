## Команды


```
npm сi 
npm run util:remove-rep  
npm run util:init-rep  
```

Установить проект 

```
git clone "ссылка на репозиторий проекта" .
npm сi 
```

Запустить дев для разработки

```
npm run dev
```

Собрать проект

```
npm run build
```

Запустить деплой

```
npm run deploy
```

Создать шаблон файловой структуры

```
npm run gen:block
npm run gen:layout
npm run gen:page
```

Перегнать шрифты из ttf в woff & woff2 (см. инструкцию #1)

```
npx gulp transformFonts
```
  
## Инструкции

#1
1. Создать в корне проекта папку .transform/
2. Создать в папке .transform/ папку fonts/
3. Создать в папке fonts/ папку с шрифтом, например, Roboto/
4. Загрузить файлы формата .ttf в папку, созданную на предыдущем шаге 
