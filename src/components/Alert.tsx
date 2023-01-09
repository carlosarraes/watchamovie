interface Props {
  message: string
  className: string
}

const Alert = (props: Props) => {
  return <div className={'bg-red-200 ' + props.className}>{props.message}</div>
}

export default Alert
