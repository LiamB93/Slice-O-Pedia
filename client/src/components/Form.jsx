function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <label>Name</label>
        <input
          type="text"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        <br />
        <label>Location</label>
        <input
          type="text"
          value={props.location}
          onChange={(e) => props.setLocation(e.target.value)}
        />
        <br />
        <label>Rating</label>
        <input
          type="number"
          value={props.rating}
          onChange={(e) => props.setRating(e.target.valueAsNumber)}
        />
        <br />
        <button>{props.type}</button>
      </form>

    </div>
  )
}
export default Form;
