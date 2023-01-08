import Ticket from '../images/movie_tickets.jpg'

const Home = () => {
  return (
    <section className="w-10/12 text-center">
      <h2>Find a movie to watch tonight!</h2>
      <hr />
      <img src={Ticket} alt="Movie Ticket" className="w-24" />
    </section>
  )
}

export default Home
