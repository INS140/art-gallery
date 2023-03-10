export default function Gallery(props) {
  const { title, primaryImage, objectID, artistDisplayName, medium } = props.data

  return <div className="gallery">
    <h2><span>{objectID}</span> {title}</h2>
    <img src={primaryImage} alt={title} width='200' />
    <h3>{artistDisplayName}</h3>
    <p>{medium}</p>
  </div>
}