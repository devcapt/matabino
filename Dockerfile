FROM nginx:1.21.1-alpine
RUN mkdir /app
COPY . /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

