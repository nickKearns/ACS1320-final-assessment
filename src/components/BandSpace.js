
function BandSpace(props) {
    const { name, fans, formed, origin, split, style } = props
  return (
    <div>
      <h1>
          {name}
      </h1>
      <div>Fans: {fans}</div>
      <div>Formed: {formed}</div>
      <div>Origin: {origin}</div>
      <div>Split: {split}</div>
      <div>{style}</div>
    </div>
  )
}

export default BandSpace