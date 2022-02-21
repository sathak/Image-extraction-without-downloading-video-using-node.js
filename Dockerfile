FROM node:16

# Create src directory
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./
COPY tsconfig*.json ./
COPY tsoa*.json ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle source
COPY . .

RUN npm run build

COPY src/ffmpeg/ffmpeg.exe /usr/src/build/src/ffmpeg/

EXPOSE 8081
CMD [ "npm","run", "start"]
