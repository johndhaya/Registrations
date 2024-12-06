import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props
  const renderNoActiveEventView = () => (
    <p className="no-active-event-descp">
      Click on an event, to view its registration details
    </p>
  )
  const renderRegistrationClosedView = () => (
    <div className="view-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="regis-closed-img"
      />
      <h1 className="regis-closed-head">Registrations Are Closed Now!</h1>
      <p className="regis-closed-descp">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  const renderRegisteredView = () => (
    <div className="view-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="regis-img"
      />
      <h1 className="regis-head">You have already registered for the event</h1>
    </div>
  )
  const renderYetToRegisterView = () => (
    <div className="view-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetto-reg-img"
      />
      <p className="register-descp">
        A live performance brings so much to your relationship with
        dance.Seeing dance live can often make you fall totally in love with
        this beautiful art form.
      </p>
      <button type="button" className="register-here-btn">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="regis-state-cont">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
