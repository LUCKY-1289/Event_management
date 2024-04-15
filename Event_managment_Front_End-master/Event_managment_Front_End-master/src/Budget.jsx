import React, { useState } from 'react';
import './Home.css'
import logo from "./LOGO.jpg";
import './Profile'
import { useNavigate } from 'react-router-dom';
import './Budget';
import './Calandar';
const Budget = () => {
  const [clubData, setClubData] = useState({
    MasterShot: {
      info: { date: '', eventName: '', budgetRequested: [''], status: '' },
      savedData: [],
    },
    Enigma: {
      info: { date: '', eventName: '', budgetRequested: [''], status: '' },
      savedData: [],
    },
    EIC: {
      info: { date: '', eventName: '', budgetRequested: [''], status: '' },
      savedData: [],
    },
    Outreach: {
      info: { date: '', eventName: '', budgetRequested: [''], status: '' },
      savedData: [],
    },
    Hurricane: {
      info: { date: '', eventName: '', budgetRequested: [''], status: '' },
      savedData: [],
    },
  });

  const [selectedClub, setSelectedClub] = useState('');

  const handleClubSelection = (clubName) => {
    setSelectedClub(clubName);
  };

  const handleInputChange = (event, clubName, field) => {
    const newData = { ...clubData };
    newData[clubName].info[field] = event.target.value;
    setClubData(newData);
  };

  const handleSave = (clubName) => {
    const newData = { ...clubData };
    newData[clubName].savedData.push(newData[clubName].info);
    newData[clubName].info = { date: '', eventName: '', budgetRequested: [''], status: '' };
    setClubData(newData);
  };
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

  return (
    <div className='BudgetPage'>
           <div className="NavBar">
          <div className="navLeft"><img src={logo} alt="Logo" className="logo" />MU-EVENTS</div>
          <ul className="navRight">
            <li onClick={handleSubmitH}>Home</li>
            <li onClick={handleSubmitR}>About</li>
            <li onClick={handleSubmitPO}>Posts</li>
            <li onClick={handleSubmitC}>Calander</li>
            <li onClick={handleSubmitB}>Budget</li>
            <li onClick={handleSubmitP}>Profile</li>

          </ul>
        </div>


    <div style={{ display: 'flex' }}>
      <div style={{ width: '23%'}}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Object.keys(clubData).map((clubName) => (
            <li
              key={clubName}
              onClick={() => handleClubSelection(clubName)}
              style={{
                margin: '10px 0',
                cursor: 'pointer',
                fontWeight: selectedClub === clubName ? 'bold' : 'normal',
                color: selectedClub === clubName ? 'blue' : 'black',
              }}
            >
              {clubName}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '75%' }}>
        {selectedClub && (
          <div>
            <h2>{selectedClub}</h2>
            <table style={{ width: '100%', marginBottom: '20px', border: '1px solid black' }}>
              <thead>
                <tr>
                  <th style={{ borderRight: '1px solid black', padding: '5px' }}>Date</th>
                  <th style={{ borderRight: '1px solid black', padding: '5px' }}>Event Name</th>
                  <th style={{ borderRight: '1px solid black', padding: '5px' }}>Budget Requested</th>
                  <th style={{ padding: '5px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ borderRight: '1px solid black', padding: '5px' }}>
                    <input
                      type="text"
                      value={clubData[selectedClub].info.date}
                      onChange={(e) => handleInputChange(e, selectedClub, 'date')}
                    />
                  </td>
                  <td style={{ borderRight: '1px solid black', padding: '5px' }}>
                    <input
                      type="text"
                      value={clubData[selectedClub].info.eventName}
                      onChange={(e) => handleInputChange(e, selectedClub, 'eventName')}
                    />
                  </td>
                  <td style={{ borderRight: '1px solid black', padding: '5px' }}>
                    <div>
                      {clubData[selectedClub].info.budgetRequested.map((budget, index) => (
                        <div key={index} style={{ marginBottom: '5px' }}>
                          <input
                            type="text"
                            value={budget}
                            onChange={(e) => {
                              const newBudget = [...clubData[selectedClub].info.budgetRequested];
                              newBudget[index] = e.target.value;
                              handleInputChange(
                                { target: { value: newBudget } },
                                selectedClub,
                                'budgetRequested'
                              );
                            }}
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const newBudget = [...clubData[selectedClub].info.budgetRequested, ''];
                          handleInputChange(
                            { target: { value: newBudget } },
                            selectedClub,
                            'budgetRequested'
                          );
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </td>
                  <td style={{ padding: '5px' }}>
                    <input
                      type="text"
                      value={clubData[selectedClub].info.status}
                      onChange={(e) => handleInputChange(e, selectedClub, 'status')}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => handleSave(selectedClub)}>Save</button>
            <div>
              {clubData[selectedClub].savedData.map((data, index) => (
                <div key={index}>
                  <p>Date: {data.date}</p>
                  <p>Event Name: {data.eventName}</p>
                  <p>Budget Requested: {data.budgetRequested.join(', ')}</p>
                  <p>Status: {data.status}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Budget;
