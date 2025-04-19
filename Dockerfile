# using nginx official image 
FROM nginx:alpine 

# Rename Index.html to index.html and copy all files to nginx root dir
RUN mv /usr/share/nginx/html/Index.html /usr/share/nginx/html/index.html


#copying all files to nginx root dir 
COPY . /usr/share/nginx/html

#exposing port 80
EXPOSE 80

CMD [ "nginx" , "-g" , "daemon off;" ]