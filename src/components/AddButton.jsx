import { Plus } from 'lucide-react'
import React from 'react'

export default function AddButton() {
  return (
    <div className='text-white bg-green-500 w-16 flex justify-center items-center h-16 rounded-full cursor-pointer hover:bg-green-400'>
        <Plus />
    </div>
  )
}
