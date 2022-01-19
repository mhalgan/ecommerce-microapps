# ecommerce-microapps
Basic Javascript micro apps integration project

# Running the project
This project has 2 micro apps that can run in standalone mode. To start them just go to `products` or `cart` folders and then run the following commands:
```
npm i
npm start
```

Products will be available at http://localhost:8081 and Cart will be available at http://localhost:8082

You can also go to the `container` folder after initializing the micro apps and then run the same commands to initialize it. The `container` project will be available at http://localhost:8080 and it will load both micro apps at runtime.
