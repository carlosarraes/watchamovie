package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {
	// set app config
	var app application
	app.Domain = "localhost"
	// read from cmd line

	// connect to db

	// start a web server
	fmt.Printf("Listening on: http://localhost:%d\n", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
