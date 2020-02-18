FROM nginx:stable-alpine

MAINTAINER emighino emighino123@gmail.com

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# RUN ufw allow 80/tcp \
# RUN ufw allow 443/tcp
# RUN ufw allow 5000/tcp
# RUN ufw reload

# RUN systemctl status nginx 
# RUN systemctl enable nginx
# RUN systemctl status nginx

EXPOSE 80
