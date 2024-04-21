import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

const RightSidebar = ({ otherUsers }) => {

  return (
    <div className='w-full md:w-1/4 mt-6'>
      <div className='flex items-center p-2 bg-gray-800 rounded-full outline-2 w-full'>
        <CiSearch size="20px" />
        <input type="text" className='bg-gray-800 outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-black border-2 rounded-2xl my-4'>
        <h1 className='font-bold text-lg text-white'>Who to follow</h1>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user?._id} className='flex items-center justify-between my-3'>
                <div className='flex items-center'>
                  <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
                  </div>
                  <div className='ml-2'>
                    <h1 className='font-bold text-white'>{user?.name}</h1>
                    <p className='text-sm text-gray-500'>{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-gray-600 text-white rounded-full'>Profile</button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RightSidebar




// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import Avatar from "react-avatar";
// import { Link } from 'react-router-dom';

// const RightSidebar = ({ otherUsers }) => {

//   return (
//     <div className='w-[25%] mt-6 '>
//       <div className='flex items-center p-2 bg-gray-800 rounded-full outline-2 w-full'>
//         <CiSearch size="20px" />
//         <input type="text" className='bg-gray-800 outline-none px-2' placeholder='Search' />
//       </div>
//       <div className='p-4  bg-black border-2 rounded-2xl my-4'>
//         <h1 className='font-bold text-lg bg-black'>Who to follow</h1>
//         {
//           otherUsers?.map((user) => {
//             return (
//               <div key={user?._id} className='flex items-center justify-between my-3'>
//                 <div className='flex'>
//                   <div>
//                     <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
//                   </div>
//                   <div className='ml-2'>
//                     <h1 className='font-bold'>{user?.name}</h1>
//                     <p className='text-sm text-gray-500'>{`@${user?.username}`}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <Link to={`/profile/${user?._id}`}>
//                     <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
//                   </Link>
//                 </div>
//               </div>
//             )
//           })
//         }



//       </div>
//     </div>
//   )
// }

// export default RightSidebar