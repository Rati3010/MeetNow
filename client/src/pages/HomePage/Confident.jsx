import React from 'react';
import workFromHome from '../../assets/work-from-home-1.jpg';
import meetingSoftware from '../../assets/meetings-software-1.jpg';
import chatMobile from '../../assets/chat-mobile.gif';
import chatImage from '../../assets/zoom-chat-1.jpg';

const Confident = () => {
  return (
    <>
      <div>
        <div>
          <img src={workFromHome} alt="" />
        </div>
        <div>
          <h1>Confidently work from home</h1>
          <h5>Features to help you work from home and have fun doing it.</h5>
          <ul>
            <li>Clear audio with advanced background noise suppression</li>
            <li>Share slides as your virtual background</li>
            <li>Feel camera-ready with adjustable appearance touch up</li>
            <li>Look well in any situation by adjusting advanced lighting</li>
            <li>More reactions to let your feelings show</li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <h1>Modernize your virtual meeting software</h1>
          <h5>
            MeetNow Meetings for desktop and mobile provide the virtual meeting
            tools to make every meeting a great one.
          </h5>
          <ul>
            <li>
              Focus on your virtual meeting – click record to leave the note
              taking to Zoom’s auto-generated, searchable transcripts
            </li>
            <li>
              Share and play videos with full audio and video transmit without
              uploading the content
            </li>
            <li>
              Feel meeting ready with virtual backgrounds, touch up my
              appearance, and lighting controls
            </li>
          </ul>
        </div>
        <div>
          <img src={meetingSoftware} alt="" />
        </div>
      </div>

      <div>
        <div>
          <img src={chatMobile} alt="" />
        </div>
        <div>
          <h1>A thoughtful approach to mobile meetings</h1>
          <h5>
            Today’s professionals need to be able to work and video conference
            wherever they are. Talkies Meetings for mobile provides the same
            great video conferencing experience that you’d expect from the
            desktop client and more.
          </h5>
          <ul>
            <li>
              Focus on your virtual meeting – click record to leave the note
              taking to MeetNow’s auto-generated, searchable transcripts
            </li>
            <li>
              Turn on Virtual Backgrounds and select the image of your choice
              (iPhone 8+ required)
            </li>
            <li>Use Safe Driving Mode or Apple Carplay (iPhone only)</li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <h1>Communicate instantly on Zoom Team Chat</h1>
          <h5>
            Integrated persistent instant messaging streamlines workspace
            collaboration for team members across the desktop and mobile
            clients.
          </h5>
          <ul>
            <li>Instantly start a virtual meeting or phone call</li>
            <li>Share files and search content in public or private groups</li>
            <li>Connect external users while keeping information safe</li>
          </ul>
        </div>
        <div>
          <img src={chatImage} alt="" />
        </div>
      </div>
      <div>
        <h2>Ready to get started</h2>
        <button>Sign up</button>
      </div>
    </>
  );
};

export default Confident;
