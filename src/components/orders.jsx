import React from 'react'
import { BiReceipt, BiSearch } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import "../styles/orders.scss";

const Orders = () => {
    return (
        <div className='order-container'>
            <div className='order-header'>
                <div className='flex items-center gap-4'>
                    <BiReceipt className='cursor-pointer icon' color='black' size={24} />
                    <h3 className='text-[18px] lg:text-[24px] cursor-pointer lg:font-[600]'>Patient List</h3>
                </div>
                <div className='flex gap-4'>
                    <IoFilter className='cursor-pointer icon' color='black' size={24} />
                    <BiSearch className='cursor-pointer icon' color='black' size={24} />
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Order Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="man.png" alt="Profile" />
                            <p>Haroon Malik</p>
                        </td>
                        <td><p>14-08-2023</p></td>
                        <td><span className='order-status order-complete'>Completed</span></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="man.png" alt="Profile" />
                            <p>Zohaib Jameel</p>
                        </td>
                        <td><p>14-08-2023</p></td>
                        <td><span className="order-status order-pending">Pending</span></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="man.png" alt="Profile" />
                            <p>Shahnoor Altaf</p>
                        </td>
                        <td><p>14-08-2023</p></td>
                        <td><span className="order-status order-process">Processing</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orders