import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface Movie {
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
    let moviesList: Movie[] = [
      {
        id: 1,
        title: 'The Shawshank Redemption',
        releaseDate: '1994-09-23',
        runtime: 142,
        mpaaRating: 'R',
        description:
          'Two imprisoned guys bond over a number of years, finding hope and eventual redemption through acts of common decency.',
      },
      {
        id: 2,
        title: 'The Godfather',
        releaseDate: '1972-03-24',
        runtime: 175,
        mpaaRating: 'R',
        description:
          'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      },
    ]

    setMovies(moviesList)
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
