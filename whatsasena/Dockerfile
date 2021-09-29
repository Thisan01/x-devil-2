FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Thisan01/x-devil-2 /root/x-devil-2
WORKDIR /root/x-devil-2/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
