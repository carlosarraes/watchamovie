import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const {
    error: { statusText, message },
  } = useRouteError() as any

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-4xl">Oops!</h2>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <em>{statusText || message}</em>
      </p>
    </section>
  )
}

export default ErrorPage
