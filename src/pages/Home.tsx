import { Link } from 'react-router-dom'
import Ticket from '../images/movie_tickets.jpg'

const Home = () => {
  return (
    <section className="w-10/12 text-center">
      <h2>Find a movie to watch tonight!</h2>
      <hr />
      <Link to="/movies">
        <img src={Ticket} alt="Movie Ticket" className="w-24" />
      </Link>
    </section>
  )
}

export default Home
