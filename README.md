# E-commerce | StyleSwap 
[code on gitlab](https://github.com/Juan-Camilo-Suarez/Django-program-automation)


https://user-images.githubusercontent.com/71409094/221410477-0d799392-d4fc-4941-8790-bff04b679084.mp4



## 1. Introduction

### 1.1 Description
This project is a fully functional online marketplace that allows users to browse and purchase clothing items from various categories. The primary aim of this project was to explore the integration of full-stack development, combining a Django Rest Framework backend with a Vue js frontend.

One of the key features of this project is the integration of a payment system, which was achieved using Stripe. This allows for secure and reliable payment processing for buyers and sellers. Additionally, the project includes an example of Dockerization, demonstrating how the application can be deployed using Nginx.

### 1.2 Main features

* User authentication and registration.

* Product catalog: users can view a catalog of clothing items.

* Search and filtering: users can search for clothing items by keyword.

* Users can view their purchase history. 

* Shopping cart.

* Payment processing.

* Swagger API.

* Docker and Nginx.

* Configuration to deploy on a private serve.

### 1.3 Limitations & Unknowns
* learning vue js
* use Stripe

## 2. Architecture 
The proposed system is a web application that will utilize the Django Rest Framework to create an efficient and secure API for communication with the database. This API will serve as the backbone of the system, allowing it to receive requests from the frontend interface, which will be created using Vue.js and Bulma.
### 2.1 Data Base Structure
![image](https://user-images.githubusercontent.com/71409094/221420994-7e26b209-c29b-481f-ad34-de15113fd19c.png)

### 2.2 System Context Diagram
![image](https://user-images.githubusercontent.com/71409094/221655826-9a0ec327-4eb9-4283-b759-eeaf821ec62f.png)

### 2.3 Deploy diagram
![image](https://user-images.githubusercontent.com/71409094/221658654-1125c455-441c-42cf-86ca-869a39aa3322.png)

## Installing and running the project
1. Create a virtual environment:\
```python -m venv venv```
2. Activate virtual environment:\
```venv\Scripts\activate.bat``` - для Windows \
```source venv/bin/activate``` - для Linux и MacOS
3. Install poetry:\
```pip install poetry  ```
4. Enter the virtual environment:\
   ``` poetry shell  ```
5. Install dependencies:\
   ``` poetry install  ```
6. Installing pre-commit hooks to run linters before commit:\
```pre-commit install```
7. Install PostgreSQL from Docker:\
   ```docker-compose up -d```
8. Apply migrations to database:\
```python src/manage.py migrate```
9. Server start:\
```python src/manage.py runserver```

## Deploy project

1. deploy with docker-compose:\
   ```docker-compose -f docker-compose.prod.yml up -d  ```

