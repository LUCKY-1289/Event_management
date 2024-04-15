import './Home.css';
import logo from "./LOGO.jpg";
import './Profile'
import { useNavigate } from 'react-router-dom';
import './Budget';
import './Calandar'
import './About.css'
import './ClubPage'
const About= ()=>{
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
    navigate("/ClubPage")
  }
    
      // const [data, setData] = useState([]);
    
      // useEffect(() => {
      //   fetch('http://localhost:5000/team')
      //   .then((response) => {
      //    return response.json()
      //   })
      //   .then((responseData) => {
      //       console.log(responseData)
      //       setData(responseData);
      //     })
      //   .catch((error) => {
      //       console.log('error', error);
      //     });
      // }, []);

        
    return(
      <div className='AboutPage'>
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
            <div className="Container">
            <h1 className='AboutUs'>About Us</h1>
        </div>
        <div className='Content'>
            <p>Welcome to the Mahindra University Club's Management Page, where the party never ends! We're a team of 8 enthusiastic individuals who have come together to create a website that will bring you an experience like no other.
Imagine a group of fun-loving folks on a mission to make you smile from ear to ear. We've worked our magic and created this page just for you.
What makes us special? Well, besides our incredible dance moves and sense of humor, we've designed a platform that's all about YOU. Explore our gallery page for amazing event photos that will blow your mind!
And let's not forget our Post page! Get ready for hilarious updates about clubs and upcoming events that will keep you hooked. It's like having a front-row seat to the best show on campus!
But wait, there's more! Club heads, listen up! Our Budget and Booking Slots pages are exclusively for you. Take control of your club's events and finances like a pro. It's where dreams come true and budgets get a little sprinkle of magic.
So, get ready for a wild ride filled with laughter, friendship, and unforgettable memories. The Mahindra University Club's Management Page is your ultimate destination for fun and excitement. Join us on this adventure, and let's create memories that will last a lifetime!</p>
        </div>
        {/* {
          data.map(member=> {
            return(
              <div>
                <h1>Name : {member.name}</h1>
                <h1>Branch : {member.branch}</h1>
              </div>
            )
          })
        } */}
        
    </div>

    )
}
export default About;