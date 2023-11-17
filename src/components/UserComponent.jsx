import React from 'react'

const UserComponent = (user) => {
    const { name, email, website, phone, username } = user.user
    return (
        <div>
            <ul className='font-base text-gray-400 font-normal'>
                <h1 className='text-xl mb-3 font-medium text-black'>{name}</h1>
                <li>
                    <span>Username:</span>
                    <p>{username}</p>
                </li>
                <li>
                    <span>Email:</span>
                    <p className='underline'>{email}</p>
                </li>
                <li>
                    <span>Site:</span>
                    <p className='underline'>{website}</p>
                </li>
                <li>
                    <span>Phone:</span>
                    <p>{phone}</p>
                </li>
            </ul>
        </div>
    )
}

export default UserComponent