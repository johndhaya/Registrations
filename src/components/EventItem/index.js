import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageclass = isActive ? 'event-img active' : 'event-img'
  const onCLickEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={onCLickEvent}>
        <img src={imageUrl} alt="event" className={eventImageclass} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
