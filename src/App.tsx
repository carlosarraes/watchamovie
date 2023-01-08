import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="mx-2">
        <section className="flex justify-between items-center">
          <h1>Go Watch a Movie!</h1>
          <Link to="/login">Login</Link>
        </section>
      </header>
      <main className="flex mx-2">
        <nav className="flex flex-col w-2/12">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/genres">Genre</Link>
          <Link to="/admin/movie/0">Add Movie</Link>
          <Link to="/admin">Catalogue</Link>
          <Link to="/graphql">GraphQl</Link>
        </nav>
        <Outlet />
      </main>
    </>
  )
}

export default App
