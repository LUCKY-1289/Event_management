import './Home.css';
import logo from "./LOGO.jpg";
import './Profile'
import { useNavigate } from 'react-router-dom';
import './Budget';
import './Calandar';
import './ClubPage';
const Home = () => {
  const navigate = useNavigate();
  const handleSubmitH = (e) => {
    navigate("/home")
  }
  const handleSubmitR = (e) => {
    navigate("/About")
  }
  const handleSubmitP =(e) =>{
    navigate("/Profile")
  }
  const handleSubmitC =(e) =>{
    navigate("/Calander")
  }
  const handleSubmitB =(e) =>{
    navigate("/Budget")
  }
  const handleSubmitPO =(e) =>{
    navigate('/ClubPage')
  }
  // const handleSubmitG =(e) =>{
  //   navigate("/Gallery")
  // }
    return(
      <div className='HomePage'>
          <div className="NavBar">
          <div className="navLeft"><img src={logo} alt="Logo" className="logo" />MU-EVENTS</div>
          <ul className="navRight">
            <li onClick={handleSubmitH}>Home</li>
            <li onClick={handleSubmitR}>About</li>
            <li onClick={handleSubmitPO}>Posts</li>
            <li onClick={handleSubmitC}>Calender</li>
            <li onClick={handleSubmitB}>Budget</li>
            <li onClick={handleSubmitP}>Profile</li>

          </ul>
        </div>

        <div className="ContentContainer">
            <h1 className='tittle' >ALL YOUR EVENTS ONE PLATFORM</h1>
            <h2 className="subtittle">EVENTS, ACTIVITIES & EXPERIENCES</h2>
            <div className="ButtonsContainer">
              <button className="ViewEventButton" onClick={handleSubmitPO}>VIEW EVENTS</button>
              <button className="PlanEventButton"onClick={handleSubmitC}>PLAN EVENT</button>
            </div>
          </div>
    </div>
    )

};
export default Home;