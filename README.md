# E-commerce | StyleSwap


https://user-images.githubusercontent.com/71409094/221410477-0d799392-d4fc-4941-8790-bff04b679084.mp4



## 1. Introduction

### 1.1 Description
This project is a fully functional online marketplace that allows users to browse and purchase clothing items from various categories. The primary aim of this project was to explore the integration of full-stack development, combining a Django Rest Framework backend with a Vue js frontend.

One of the key features of this project is the integration of a payment system, which was achieved using Stripe. This allows for secure and reliable payment processing for buyers and sellers. Additionally, the project includes an example of Dockerization, demonstrating how the application can be deployed using Nginx.

### 1.2 Main features
### 1.3 Assumptions
### 1.4 Limitations & Unknowns
## 2. Architecture 
### 2.1 Data Base Structure
![image](https://user-images.githubusercontent.com/71409094/221420994-7e26b209-c29b-481f-ad34-de15113fd19c.png)

### 2.2 System Context Diagram
### 2.3 Container diagram
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

