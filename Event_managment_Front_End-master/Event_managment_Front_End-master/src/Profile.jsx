import './Profile.css';
import logo from "./LOGO.jpg";
import './Home.css';
import './Profile'
import './Calandar';
import './About'
import { useNavigate } from 'react-router-dom';
import koushikUncle from "./koushik.jpg"
import Cricket from "./cricket.jpeg"
const Profile= ()=>{    
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
  const handleSubmitL =(e) =>{
    navigate("/")
  }
  const handleSubmitPO =(e) =>{
    navigate("/ClubPage")
  }
    return(
        <div className='ProfilePage'>
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
            <div className='PicSec'>
                  <img className='FloatingCover' src={Cricket} alt="Cover" />
                  <img className='ProfilePic' src={koushikUncle} alt="Profile Pic" /> 
                </div>
            <div className="Details">
                <h1>Koushik Avula</h1>
                <h3>Security Team MasterShot</h3>
            </div>
            <div className='AboutMe'>
                <p>Hey, I'm Koushik, a 3rd-year Computer Science student at Mahindra University. But beyond the world of coding, my heart beats for cricket! I'm a passionate player who thrives on the thrill of the game 
                I am always ready to conquer the cricket field and showcase my remarkable skills. My love for the game is infectious, and I am known for my thunderous sixes and clever batting tactics..</p>
            </div>
            <div className='SignOut'>
              <h3 onClick={handleSubmitL}>LogOut</h3>
            </div>
  </div>

  )
}
export default Profile;