import React from 'react';
import iconframe from '../../assets/icon-frame.svg';
import iconframe1 from '../../assets/icon-frame-1.svg';
import secure from '../../assets/secure-logo.svg';
const Description = () => {
  return (
    <>
      <div
        style={{
          paddingTop: '70px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '50%' }}>
          <h2>Powering organizations across industries and geographies</h2>
          <p>
            MeetNow helps consolidate communications, connect people, and
            collaborate better together in the boardroom, classroom, operating
            room, and everywhere in between.
          </p>
          <button>Explore Industry Solution</button>
        </div>
        <div
          style={{
            width: '50%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr )',
          }}
        >
          <div>
            <h5>Education</h5>
          </div>
          <div>
            <h5>Gvernmenet</h5>
          </div>
          <div>
            <h5>Financial Services</h5>
          </div>
          <div>
            <h5>Healthcare</h5>
          </div>
          <div>
            <h5>Manufacturing</h5>
          </div>
          <div>
            <h5>Retail</h5>
          </div>
        </div>
      </div>



      <div>
        <h1>Simplified video conferencing and messaging across any device</h1>
        <div>
          <div>
            <div>
              <img src={iconframe1} alt="" />
            </div>
            <div>
              <h2>Unparalleled usability</h2>
              <p>Enable quick adoption with virtual meeting capabilities that make it easy to start, join, collaborate, and schedule meetings across any device.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={iconframe} alt="" />
            </div>
            <div>
              <h2>Join anywhere, on any device</h2>
              <p>MeetNow Meetings syncs with your calendar system and delivers streamlined enterprise-grade video conferencing from desktop, mobile and dedicated Zoom for Home Devices</p>
            </div>
          </div>
          <div>
            <div>
              <img src={secure} alt="" />
            </div>
            <div>
              <h2>Powerful virtual meeting security</h2>
              <p>Robust security settings help to ensure disruption-free virtual meetings, with encryption, role-based security, Passcode protection, Waiting Rooms, and more.</p>
            </div>
          </div>
        </div>
      </div>
      

      <div>
        <h1>Built for modern teams</h1>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Description;
