import Construction from '../public/static/images/icons/construction.svg'

const Callout = ({ type, text, title }) => {
  let icon = ''
  let bgClass = ''

  switch (type) {
    case 'Construction':
      icon = <Construction />
      bgClass = 'bg-primary-400'
      break
    default:
      icon = <Construction />
      bgClass = 'primary'
      break
  }

  return (
    <div className="m-4 rounded-md bg-primary-400 bg-opacity-30 p-3">
      <div className="justify-left mb-2 flex flex-row items-center">
        <div className="mr-2">{icon}</div>
        <p className="my-0 text-lg font-bold">{title}</p>
      </div>
      <div>{text ? <p className="my-0"> {text}</p> : null}</div>
    </div>
  )
}

export default Callout
