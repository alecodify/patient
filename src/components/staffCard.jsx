import React from 'react'

const StaffCard = ({ person }) => {
    return (
        <li className='bg-white rounded-lg shadow-lg p-4 flex flex-col items-center'>
            <img className='w-24 h-24 rounded-full' src={person.avatar} alt={person.name} />
            <div className='info mt-4 text-center'>
                <h3 className='text-lg font-semibold'>{person.name}</h3>
                <p className='text-sm text-white-600'>{person.role}</p>
                <p className='text-sm text-white-600'>{person.address}</p>
                <p className='text-sm text-white-600'>{person.phone}</p>
                <div className='flex justify-center items-center mt-2'>
                    {Array.from({ length: 5 }, (_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(person.rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.97 2.856a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.97-2.856a1 1 0 00-1.175 0l-3.97 2.856c-.784.57-1.839-.197-1.539-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.519-4.674z' />
                        </svg>
                    ))}
                </div>
                <div className='flex mt-4'>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>Chat</button>
                    <button className='bg-green-500 text-white px-2 py-1 rounded'>Appoint Me</button>
                </div>
            </div>
        </li>
    )
}

export default StaffCard