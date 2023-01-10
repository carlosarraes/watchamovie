import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Movie {
  id: number
  title: string
  releaseDate: string
  runtime: number
  mpaaRating: string
  description: string
}

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: '',
      releaseDate: '',
      runtime: 0,
      mpaaRating: '',
      description: '',
    },
  ])

  useEffect(() => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'GET',
      headers,
    }

    fetch(`http://localhost:8080/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section>
      <h1>Movies</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(({ id, title, releaseDate, mpaaRating }) => (
            <tr key={id}>
              <td>
                <Link to={`/movies/${id}`}>{title}</Link>
              </td>
              <td>{releaseDate}</td>
              <td>{mpaaRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Movies
