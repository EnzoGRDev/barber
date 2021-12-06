import 'components/CardLocation/index.css'

export default function CardLocation ({title, location, path}){
  return(
  <figure className="card-location">
    <h2>{title}</h2>
    <hr/>
    <h3>{location}</h3>
    <p>{path}</p>
  </figure>
  )
}