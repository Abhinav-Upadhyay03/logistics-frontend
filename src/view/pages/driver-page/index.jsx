import React from 'react'
import JobCard from '../../components/driver/Card'

const DriverPage = () => {
  return (
    <div className='m-4'>
    <div className='m-10'>
      <p className='text-3xl'>Hello Driver,</p>
      <p className='text-xl m-5'>Here are a few jobs for you: </p>
      </div>
      <JobCard />
    </div>

  )
}
export default DriverPage
