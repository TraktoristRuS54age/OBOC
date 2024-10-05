# создание образа
FROM node:14 
WORKDIR /usr/src/app

#Не копировать все йфалйы, описать только те, которые необходимо копировать для работы программы
COPY data.txt .
COPY game.js .
COPY highscore.js .
COPY index.html .
COPY server.js .
COPY style.css .
EXPOSE 8080

CMD ["node", "server.js"]