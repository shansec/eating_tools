const Detail = props => {
  console.log(props)
  return (
    <div>
      detail
      <br />
      {/* <span>{props.location.state.day}</span> */}
      <span>{props.location.query.id}</span>
    </div>
  )
}

export default Detail
