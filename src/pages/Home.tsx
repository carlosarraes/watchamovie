import { Link } from 'react-router-dom'
import Ticket from '../images/movie_tickets.jpg'

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2>Find a movie to watch tonight!</h2>
      <hr className="border-1 w-full " />
      <Link to="/movies">
        <img src={Ticket} alt="Movie Ticket" className="w-24" />
      </Link>
    </section>
  )
}

export default Home
