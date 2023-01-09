import { forwardRef } from 'react'

interface Props {
  name: string
  title: string
  type: string
  className?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  value?: string
  errorMsg?: string
}

const Input = forwardRef((props: Props, ref) => {
  return (
    <section>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        type={props.type}
        id={props.name}
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={props.className}
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <div>{props.errorMsg}</div>
    </section>
  )
})

export default Input
