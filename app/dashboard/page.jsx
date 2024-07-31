import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { NewInterview } from './_components/NewInterview'
import InterviewList from './_components/InterviewList'
function Dashboard() {

  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="flex text-gray-500">
        Create and Start your Mockup Interview: 
        <div className="px-1 font-bold text-fuchsia-500">Generated by AI✨</div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 my-5">
          <NewInterview></NewInterview>
        </div>

        <InterviewList></InterviewList>
    </div>
  )
}

export default Dashboard