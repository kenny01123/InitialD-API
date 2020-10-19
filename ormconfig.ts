import dotenv = require("dotenv");
dotenv.config();
export={  
   type: "postgres",
   host: process.env.DB_HOST || "localhost",
   port: process.env.DB_PORT || 5432,
   username: process.env.DB_USER || "kenny01123",
   database: process.env.DB_NAME || "jdm",
   logging: false,
   synchronize: true,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
   }
}