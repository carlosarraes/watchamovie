package repository

import (
	"database/sql"
	"server/internal/models"
)

type DatabaseRepo interface {
	Connnection() *sql.DB
	AllMovies() ([]*models.Movie, error)
}
