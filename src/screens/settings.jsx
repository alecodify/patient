import React from 'react';
import { Header, Orders, Reminders, SettingCard } from '../components';
import { BsCalendar2Check, BsGraphUp } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import "../styles/setting.scss";

const Settings = () => {
  return (
    <div className='content'>
      <main>
        <Header main={""} header={"Home"} title={"Settings"} />

        <div className='setting-insights'>
          <SettingCard icon={<BsCalendar2Check size={24} color='blue' />} numbers={"1,072"} status={"Paid Order"} bgColor={"lightblue"} />
          <SettingCard icon={<FaRegEye size={24} color='darkyellow' />} numbers={"3,944"} status={"Site Visit"} bgColor={"lightyellow"} />
          <SettingCard icon={<BsGraphUp size={24} color='blue' />} numbers={"14,721"} status={"Searches"} bgColor={"lightblue"} />
          <SettingCard icon={<BiDollarCircle size={28} color='darkred' />} numbers={"$6,742"} status={"Total Sales"} bgColor={"white"} />
        </div>

        <div className='lg:flex lg:gap-10 pb-10 lg:pb-4'>
          <Orders />
          <Reminders />
        </div>
      </main>
    </div>
  )
}

export default Settings