module.exports = {
    "name": "default",
    "type": "postgres",
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "entities": [
        "./src/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
};