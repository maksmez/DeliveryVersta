# DeliveryVersta
Тестовое задание
Небольшой проект для управления заказами, разработанный на **ASP.NET 9 + React + SQLite**.

## Используемый стек
- **Backend:** ASP.NET 9, Entity Framework Core, SQLite
- **Frontend:** React 19, React Router, Axios
- **Контейнеризация:** Docker, Docker Compose

---

## Установка и запуск

Убедитесь, что на вашем компьютере установлено:
- Node.js версии 22 и выше;
- .NET SDK: 9.0.100 и выше.

### 1. Локальная разработка (без Docker)
#### Запуск бэкенда:
В корневой папке проекта выполнить следующую команду:
```
dotnet run
```
#### Запуск фронтенда:
Перейти в папку "react-app", установить зависимости, запустить React:
```
cd react-app
npm install
npm start
``` 
- **API доступно по адресу** `http://localhost:5009`  
- **Фронтенд доступен по адресу** `http://localhost:3000`  

---

### 2. Запуск в Docker
В корневой папке проекта выполнить следующую команду:
```
docker-compose up --build -d
```
- **Фронтенд доступен по адресу** `http://localhost:3000`  
- **API доступнопо адресу** `http://localhost:5009`  

Остановить контейнеры:
```
docker-compose down
```
