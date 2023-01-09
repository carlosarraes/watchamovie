import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Movie {
  id: number
  title: string
  releaseDate: string
  runtime: number
  mpaaRating: string
  description: string
}

const Movie = () => {
  const [movie, setMovie] = useState({} as Movie)
  let { id } = useParams()

  useEffect(() => {
    const myMovie = {
      id: 1,
      title: 'The Shawshank Redemption',
      releaseDate: '1994-09-23',
      runtime: 142,
      mpaaRating: 'R',
      description:
        'Two imprisoned guys bond over a number of years, finding hope and eventual redemption through acts of common decency.',
    }

    setMovie(myMovie)
  }, [id])

  return (
    <section>
      <h3>My movie {movie.title}</h3>
      <small>
        <em>
          {movie.releaseDate} - {movie.runtime} minutes - {movie.mpaaRating}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </section>
  )
}

export default Movie
