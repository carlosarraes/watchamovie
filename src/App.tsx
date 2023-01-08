import Home from './pages/Home'

function App() {
  return (
    <>
      <header className="mx-2">
        <section className="flex justify-between items-center">
          <h1>Go Watch a Movie!</h1>
          <button>Login</button>
        </section>
      </header>
      <main className="flex mx-2">
        <nav className="flex flex-col w-2/12">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">Genre</a>
          <a href="#">Add Movie</a>
          <a href="#">Manage Catalogue</a>
          <a href="#">GraphQl</a>
        </nav>
        <Home />
      </main>
    </>
  )
}

export default App
