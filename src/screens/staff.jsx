import React from 'react'
import { Header, StaffCard } from '../components';

const Staff = () => {
  const staff = [
    { name: 'Haroon Ameer', role: 'Physiotherapist', address: '123 Street, City', phone: '123-456-7890', rating: 4.5, avatar: '/avatar1.png' },
    { name: 'Zohaib Jameel', role: 'Physiotherapist', address: '456 Avenue, City', phone: '987-654-3210', rating: 4.7, avatar: 'avatar2.png' },
    { name: 'Zainab Khan', role: 'Physiotherapist', address: '789 Boulevard, City', phone: '456-123-7890', rating: 4.8, avatar: 'avatar3.png' },
    { name: 'Kinza Shah', role: 'Physiotherapist', address: '101 Circle, City', phone: '321-654-9870', rating: 4.6, avatar: 'avatar4.png' },
    { name: 'Shahnoor Altaf', role: 'Mental Case', address: '202 Lane, City', phone: '654-321-1234', rating: 4.2, avatar: 'avatar5.png' },
    { name: 'Awais Salamat', role: 'Physiotherapist', address: '303 Way, City', phone: '789-456-1230', rating: 4.3, avatar: 'avatar1.png' },
    { name: 'Usman Dogar', role: 'Physiotherapist', address: '404 Route, City', phone: '123-789-4560', rating: 4.5, avatar: 'avatar2.png' },
    { name: 'Aliza Rajput', role: 'Physiotherapist', address: '505 Path, City', phone: '321-987-6540', rating: 4.6, avatar: 'avatar3.png' },
    { name: 'Mah Noor', role: 'Physiotherapist', address: '606 Drive, City', phone: '456-789-1230', rating: 4.7, avatar: 'avatar4.png' }
  ];

  return (
    <div className='content'>
      <main>
        <Header main={""} header={"Home"} title={"My Staff"} />

        <div className='staff-container pt-4 pb-10'>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {staff.map((person, index) => (
              <StaffCard key={index} person={person} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Staff