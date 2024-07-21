import React from 'react';
import { IoMdMic } from "react-icons/io";
import "../styles/message.scss";

const Message = () => {
  const staff = [
    { name: 'Haroon Ameer', avatar: '/avatar1.png', lastTimeOnline: "8:00am", lastmessage: "Okay" },
    { name: 'Zohaib Jameel', avatar: 'avatar2.png', lastTimeOnline: "7:00pm", lastmessage: "Best of luck" },
    { name: 'Zainab Khan', avatar: 'avatar3.png', lastTimeOnline: "7:45pm", lastmessage: "bye" },
    { name: 'Kinza Shah', avatar: 'avatar4.png', lastTimeOnline: "2:00pm", lastmessage: "interesting" },
    { name: 'Shahnoor Altaf', avatar: 'avatar5.png', lastTimeOnline: "3:00am", lastmessage: "good morning" },
    { name: 'Awais Salamat', avatar: 'avatar1.png', lastTimeOnline: "7:45pm", lastmessage: "good evening" },
    { name: 'Usman Dogar', avatar: 'avatar2.png', lastTimeOnline: "6:00pm", lastmessage: "have a good day" },
    { name: 'Aliza Rajput', avatar: 'avatar3.png', lastTimeOnline: "3:00am", lastmessage: "good bye" },
    { name: 'Mah Noor', avatar: 'avatar4.png', lastTimeOnline: "2:00pm", lastmessage: "nice to meet you" }
  ];
  return (
    <div className='content'>
      <main>
        <div className="chat-container">
          {/* chatbar side */}
          <div className="chatbar">
            <div className='chatbar-wrapper'>
              <ul className="chatbarFriendList">
                {staff.map((data) => (
                  <li className="chatbarFriend relative" key={data.name}>
                    <div className="chatbarProfileImageContainer">
                      <img src={data.avatar} alt="" className="chatbarProfileImage" />
                      <span className="chatbarOnline"></span>
                    </div>
                    <div className='flex flex-col'>
                      <span className="chatbarUsername">{data.name}</span>
                      <span className='chatbarLastMessage text-sm text-gray-400'>{data.lastmessage}</span>
                    </div>

                    <span className='chatbarLastSeen text-sm text-gray-300 absolute right-[10px] top-2'>{data.lastTimeOnline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* chat side screen */}
          <div className="chatSide">
            {/* chat header */}
            <div className="chat-header">
              <img src="avatar2.png" alt="user" className="logo rounded-2xl" />
              <div className='flex flex-col'>
                <span className="chat-title">Zohaib Jameel</span>
                <span className='text-sm text-gray-200'>available</span>
              </div>
            </div>

            {/* chat body */}
            <div className="chat-body">
              <div className='bg-Image'>
                <div className="chat-message doctor">
                  <div className='message-container '>
                    <div className='text-lg text-[#2a3556] font-semibold'>Dr. Erica</div>
                    <div className="text-white text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </div>
                  </div>
                  <img src="avatar1.png" alt="Dr. Erica" className="h-16 w-16 rounded-full " />
                </div>
                <div className="chat-message user">
                  <div className='message-container'>
                    <div className='text-lg text-[#2a3556] font-semibold'>You</div>
                    <div className=" text-white text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </div>
                  </div>
                  <img src="avatar2.png" alt="You" className="h-16 w-16 rounded-full" />
                </div>
              </div>
            </div>

            {/* chat footer  */}
            <div className="chat-footer">
              <span className='' style={{ fontSize: "24px" }}>😊</span>
              <span className='' style={{ fontSize: "24px" }}>🔗</span>
              <input type="text" className="footer-message-input text-black " placeholder="Type your message" />
              <IoMdMic color='black' size={24} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Message