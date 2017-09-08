# Setting the base to nodejs 8.4.0
FROM node:8.4.0-alpine

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Extra tools for native dependencies
# RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV SERVER_PORT 3000
ENV LIMIT 5

# Expose 3000
EXPOSE ${SERVER_PORT}

# Startup
ENTRYPOINT micro -p ${SERVER_PORT}
