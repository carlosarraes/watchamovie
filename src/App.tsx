import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Alert from './components/Alert'

function App() {
  const [jwtToken, setJwtToken] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const [alertClass, setAlertClass] = useState('hidden')

  const navigate = useNavigate()

  const logout = () => {
    setJwtToken('')
    navigate('/login')
  }

  return (
    <>
      <header className="mx-2">
        <section className="flex justify-between items-center">
          <h1>Go Watch a Movie!</h1>
          {!jwtToken ? (
            <Link
              to="/login"
              className="border py-1 px-3 rounded-md shadow-md bg-green-200 hover:bg-green-400 duration-200"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="border py-1 px-3 rounded-md shadow-md bg-red-200 hover:bg-red-400 duration-200"
            >
              Logout
            </button>
          )}
        </section>
      </header>
      <main className="flex mx-2">
        <nav className="flex flex-col w-3/12">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/genres">Genre</Link>
          {jwtToken && <Link to="/admin/movie/0">Add Movie</Link>}
          {jwtToken && <Link to="/admin">Catalogue</Link>}
          {jwtToken && <Link to="/graphql">GraphQl</Link>}
        </nav>
        <section className="flex flex-col w-full justify-center">
          <Alert message={alertMsg} className={alertClass} />
          <Outlet
            context={{
              jwtToken,
              setJwtToken,
              setAlertMsg,
              setAlertClass,
            }}
          />
        </section>
      </main>
    </>
  )
}

export default App
