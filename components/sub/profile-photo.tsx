import Image from 'next/image'
import React from 'react'

const ProfilePhoto = () => {
  return (
    <div className='md:w-[400px] md:h-[400px] h-[300px] w-[300px] rounded-full overflow-hidden border-4 border-[#7042f88b] '>
      <Image
        src="/profile-photo.png"
        alt="Profile Photo"
        width={400}
        height={400}
        className='w-full h-full object-cover'
      />
    </div>
  )
}

export default ProfilePhoto
