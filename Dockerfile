# using nginx official image 
FROM nginx:alpine 

#copying all files to nginx root dir 
COPY . /usr/share/nginx/html

#exposing port 80
EXPOSE 80

CMD [ "nginx" , "-g" , "daemon off;" ]