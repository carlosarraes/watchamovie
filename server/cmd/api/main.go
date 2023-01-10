package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"server/internal/repository"
	"server/internal/repository/dbrepo"
)

const port = 8080

type application struct {
	DSN    string
	Domain string
	DB     repository.DatabaseRepo
}

func main() {
	// set app config
	var app application
	app.Domain = "localhost"

	// read from cmd line
	flag.StringVar(&app.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=movies sslmode=disable timezone=UTC connect_timeout=5", "Postgres Connection String")
	flag.Parse()

	// connect to db
	conn, err := app.connectDB()
	if err != nil {
		log.Fatal(err)
	}
	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer app.DB.Connnection().Close()

	// start a web server
	fmt.Printf("Listening on: http://localhost:%d\n", port)
	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
