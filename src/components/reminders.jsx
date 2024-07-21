import React from 'react';
import { BiSearch, BiNote, BiDotsVerticalRounded } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import "../styles/reminders.scss";

const Reminders = () => {
    return (
        <div className='reminder-container'>
            <div className='reminder-header flex'>
                <div className='flex items-center gap-4'>
                    <BiNote className="cursor-pointer icon" color="black" size={24} />
                    <h3 className='text-[18px] lg:text-[24px] cursor-pointer lg:font-[600]'>Reminders</h3>
                </div>
                <div className='flex gap-4'>
                    <IoFilter className='cursor-pointer icon' color='black' size={24} />
                    <BiSearch className='cursor-pointer icon' color='black' size={24} />
                </div>
            </div>

            <ul className='reminder-tasklist'>
                <li className='reminder-completed'>
                    <div className='reminder-task-title'>
                        <IoCheckmarkCircleOutline className='cursor-pointer icon' size={24} color='black' />
                        <p>Start Our Meeting</p>
                    </div>
                    <BiDotsVerticalRounded size={24} color='black' className='cursor-pointer icon' />
                </li>
                <li className='reminder-completed'>
                    <div className='reminder-task-title'>
                        <IoCheckmarkCircleOutline className='cursor-pointer icon' size={24} color='black' />
                        <p>Analyse Our Site</p>
                    </div>
                    <BiDotsVerticalRounded size={24} color='black' className='cursor-pointer icon' />
                </li>
                <li className='reminder-not-completed'>
                    <div className='reminder-task-title'>
                        <FaRegCircleXmark className='cursor-pointer icon' size={20} color='black' />
                        <p>Play Football</p>
                    </div>
                    <BiDotsVerticalRounded size={24} color='black' className='cursor-pointer icon' />
                </li>
            </ul>
        </div>
    )
}

export default Reminders