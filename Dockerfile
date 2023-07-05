FROM node:latest
WORKDIR /app
COPY . .
RUN npm run build
RUN npm install -g next
EXPOSE 3000
CMD ["next", "start", "-p", "3000"]
