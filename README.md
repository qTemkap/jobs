# Hunter Up

## Установка зависимостей

```console
composer install
```

## Создание файла окружения

on windows
```console
copy .env.example .env
```
## Настройка подключения к DB

в файле .env 
```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=username
DB_PASSWORD=secret
```

## Генерация ключа

```console
php artisan key:generate
```

## Создание символической ссылки в хранилище

```console
php artisan storage:link
``` 

## Выполнение миграций

```console
php artisan migrate
```

## Загрузка начальных данных в БД

```console
composer dump-autoload
```

```console
php artisan db:seed
```
