import React from 'react'
import { Header, Orders, Reminders } from '../components'

const Dashboard = () => {
  return (
    <div className='content'>
      <main>
        <Header header={"Home"} main={"Home"} title={"Dashboard"} />

        <div className="lg:flex lg:gap-10">
            <Orders />
            <Reminders />
        </div>

      </main>
    </div>
  )
}

export default Dashboard