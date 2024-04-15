// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import enigma1Image from './enigma1.jpg';
// import enigma2Image from './enigma2.jpg';
// import enigma3Image from './enigma3.jpg';
// import mastershot1Image from './mastershot1.jpg';
// import mastershot2Image from './mastershot2.jpg';
// import mastershot3Image from './mastershot3.jpg';
// import eic1Image from './eic1.jpg';
// import eic2Image from './eic2.jpg';
// import eic3Image from './eic3.jpg';
// import outreach1Image from './outreach1.jpg';
// import outreach2Image from './outreach2.jpg';
// import outreach3Image from './outreach3.jpg';
// import './Profile'
// import './Calandar';
// import './About'
// import './Gallery.css';
// import logo from "./LOGO.jpg";
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       clubs: ["Enigma", "Mastershot", "EIC", "OutReach"],
//       selectedClub: null
//     };
//   }
  
//   render() {
//    const navigate = useNavigate()
//     const { clubs, selectedClub } = this.state;
//     const images = {
//       Enigma: [
//         { image: enigma1Image, subheading: 'The Data Challenge @ 9 Apr, 3PM' },
//         { image: enigma2Image, subheading: 'Tech Talk EP1 Algorithms with "Dr.Zvi Galil" @ 18 Feb 6:30PM' },
//         { image: enigma3Image, subheading: 'Alumni Talk @7 Dec 4:30PM' },
//       ],
//       Mastershot: [
//         { image: mastershot1Image, subheading: 'Mastershot Image 1' },
//         { image: mastershot2Image, subheading: 'Mastershot Image 2' },
//         { image: mastershot3Image, subheading: 'Mastershot Image 3' },
//       ],
//       EIC: [
//         { image: eic1Image, subheading: 'ideaStorm @48 hour long challenge' },
//         { image: eic2Image, subheading: 'Talk by Neil C. Tarallo @ideaStorm' },
//         { image: eic3Image, subheading: 'E-SUMMIT-23' },
//       ],
//       OutReach: [
//         { image: outreach1Image, subheading: 'Chalo Chale Pochampalli!' },
//         { image: outreach2Image, subheading: 'Farmscape' },
//         { image: outreach3Image, subheading: 'MU Cleanliness Drive' },
//       ]
//     };
//     const handleSubmitH = (e) => {
//         navigate("/home")
//       }
//      const handleSubmitR = (e) => {
//         navigate("/About")
//       }
//       const handleSubmitP =(e) =>{
//         navigate("/Profile")
//       }
//       const handleSubmitC =(e) =>{
//         navigate("/Calander")
//       }
//       const handleSubmitB =(e) =>{
//         navigate("/Budget")
//       }
//       const handleSubmitPO =(e) =>{
//         navigate("/ClubPage")
//       }
//       const handleClubClick = (clubName) => {
//         this.setState({ selectedClub: clubName });
//       }
    
//     const selectedClubImages = images[selectedClub];
  
//     return (
//         <div className='Galery'>
//          <div className="NavBar">
//           <div className="navLeft"><img src={logo} alt="Logo" className="logo" />MU-EVENTS</div>
//           <ul className="navRight">
//             <li onClick={handleSubmitH}>Home</li>
//             <li onClick={handleSubmitR}>About</li>
//             <li onClick={handleSubmitPO}>Posts</li>
//             <li onClick={handleSubmitC}>Calender</li>
//             <li>Gallery</li>
//             <li onClick={handleSubmitB}>Budget</li>
//             <li onClick={handleSubmitP}>Profile</li>
//           </ul>
//         </div>
//       <div className="club-container">
//         <div className="club-names">
//           {clubs.map((clubName) => (
//             <div
//               key={clubName}
//               className={clubName === selectedClub ? "selected" : ""}
//               onClick={() => this.handleClubClick(clubName)}
//             >
//               {clubName}
//             </div>
//           ))}
//         </div>
//         <div className="club-info">
//           <h2>{selectedClub} Club</h2>
//           <div className="image-gallery">
//             {selectedClubImages &&
//               selectedClubImages.map((item, index) => (
//                 <div key={index} className="image-container">
//                   <h3 className="subheading">{item.subheading}</h3>
//                   <img src={item.image} alt={item.subheading} className="club-image" />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }

// export default Gallery;