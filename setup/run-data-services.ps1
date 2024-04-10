# * Data services

## Database (MySQL)
docker run --name ambassador -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
docker exec -it ambassador mysql -uroot -proot -e "CREATE DATABASE IF NOT EXISTS ambassador;"

## Cache
docker run --name redis -p 6379:6379 -d redis

## Email 
docker run --name mailhog -p 1025:1025 -p 8025:8025 -d mailhog/mailhog

# * Seed Data

## Run all seed scripts to populate the database with data.
npm run seed