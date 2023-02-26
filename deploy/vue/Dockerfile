FROM node:19.6.0-alpine

WORKDIR /frontend

# Install @vue/cli
RUN npm install -g @vue/cli@5.0.8

# Copy project files
COPY ./market_vue .
COPY ./market_vue/src/main.js ./frontend/src/

# Install project dependencies
RUN npm install


# Expose port 8080
EXPOSE 8080

# Start the app
CMD ["npm", "run", "serve"]
