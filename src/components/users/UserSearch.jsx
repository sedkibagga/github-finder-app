import React, { useContext, useState } from 'react'
import GithubContext from '../../Context/github/GithubContext'
import AlertContext from '../../Context/alert/AlertContext'
import { SearchUsers } from '../../Context/github/GithubActions'
function UserSearch() { 
    const {users , dispatch ,} = useContext(GithubContext)
    const {setAlert} = useContext (AlertContext) 
    
    const[text,setText] = useState('') 
    
    const handlechange = (e) => {
        setText (e.target.value) 
    }
    const handlesubmit = async (e) => {
       e.preventDefault() 
       if (text === '') {
        setAlert('Please enter something' ,'error' )
       }
       else{  
        dispatch ({type : 'SET_LOADING'})
         const users = await SearchUsers(text)
         dispatch ({type : 'GET_USERS' , payload : users})
        
       }
    }
   
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
    <div>
   <form onSubmit={handlesubmit}>
    <div className='form-control'>
   <div className='relative' >
    <input type='text' className='w-full pr-40 bg-gray-200 input input-lg text-black' placeholder='Search' onChange={handlechange} />
   <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>go</button>
   </div>
    </div>
    </form>
    </div>
    {users.length >0 && (
     
        <div> 
         <button className='btn btn-ghost btn-lg' onClick={()=> dispatch({type :'CLEAR_USERS'}) } > clear  </button>
         
        </div>
    ) }  
    </div>

  )
}

export default UserSearch