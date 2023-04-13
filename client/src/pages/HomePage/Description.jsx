import React from 'react';
import iconframe from '../../assets/icon-frame.svg';
import iconframe1 from '../../assets/icon-frame-1.svg';
import secure from '../../assets/secure-logo.svg';
import meetingImage from '../../assets/meeting.jpg';
import "./Description.css"

const Description = () => {
  return (
    <>
      <div id='description-head'>
        <div id='description-head-heading' >
          <h1>Powering organizations across industries and geographies</h1>
          <p>
            MeetNow helps consolidate communications, connect people, and
            collaborate better together in the boardroom, classroom, operating
            room, and everywhere in between.
          </p>
          <button>Explore Industry Solution</button>
        </div>
        <div id='description-head-box' >
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

      <div id='description-below-head' >
        <h1>Simplified video conferencing and messaging <br /> across any device</h1>
        <div id='description-below-box-collection' >
          <div>
            <div>
              <img src={iconframe1} alt="" />
            </div>
            <div>
              <h2>Unparalleled usability</h2>
              <p>
                Enable quick adoption with virtual meeting capabilities that
                make it easy to start, join, collaborate, and schedule meetings
                across any device.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={iconframe} alt="" />
            </div>
            <div>
              <h2>Join anywhere, on any device</h2>
              <p>
                MeetNow Meetings syncs with your calendar system and delivers
                streamlined enterprise-grade video conferencing from desktop,
                mobile and dedicated MeetNow for Home Devices
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={secure} alt="" />
            </div>
            <div>
              <h2>Powerful virtual meeting security</h2>
              <p>
                Robust security settings help to ensure disruption-free virtual
                meetings, with encryption, role-based security, Passcode
                protection, Waiting Rooms, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id='description-built'>
        <h1>Built for modern teams</h1>
        <div id='description-built-box-collection'>
          <div>
            <img src={meetingImage} alt="" />
            <h3>HD audio and video meetings</h3>
            <p>
              Bring HD video and audio to your virtual meetings with support for
              up to 1000 video participants and 49 videos on screen.
            </p>
          </div>
          <div>
            <img src={meetingImage} alt="" />
            <h3>Streamlined calendaring</h3>
            <p>
              Easily start or schedule meetings directly from Outlook, Gmail, or
              iCalendar.
            </p>
          </div>
          <div>
            <img src={meetingImage} alt="" />
            <h3>Built-in collaboration tools</h3>
            <p>
              Multiple video call participants can share their screens
              simultaneously and co-annotate for a more interactive virtual
              meeting.
            </p>
          </div>
          <div>
            <img src={meetingImage} alt="" />
            <h3>Made for Connecting</h3>
            <p>
              Filters, reactions, polls, hand raising, and music or video
              sharing make virtual meetings more fun and engaging.
            </p>
          </div>
          <div>
            <img src={meetingImage} alt="" />
            <h3>Meeting recording and transcripts</h3>
            <p>
              Record your virtual meetings locally or to the cloud, with
              searchable transcripts.
            </p>
          </div>
          <div>
            <img src={meetingImage} alt="" />
            <h3>Team Chat</h3>
            <p>
              Chat with groups, searchable history, integrated file sharing, and
              10 year archive. Easily escalate into 1:1 or group video calls.
            </p>
          </div>
        </div>
      </div>

      <div id='description-customers'>
        <h1>
          Customers who switch to MeetNow report an increase in performance, trust,
          and engagement
        </h1>
        <div>
          <div>
            <h2>95%</h2>
            <p>report an increase in performance</p>
          </div>
          <div>
            <h2>95%</h2>
            <p>report a greater sense of trust</p>
          </div>
          <div>
            <h2>93%</h2>
            <p>report a greater sense of engagement</p>
          </div>
          <div>
            <h2>85%</h2>
            <p>saw an increase in video usage</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
