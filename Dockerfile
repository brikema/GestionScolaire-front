FROM node:current-alpine as build
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/
# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build
# Pull the latest base nginx image used to final docker images
FROM nginx:stable-alpine
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/angular-init /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait
# Expose port 80
EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]

