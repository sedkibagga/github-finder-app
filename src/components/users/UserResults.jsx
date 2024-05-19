import React, {  useContext } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../Context/github/GithubContext';
function UserResults() {
 const {fetchUsers , users , loading} = useContext(GithubContext)
  // useEffect(() => {
    
    //  fetchUsers()
  // }, []);

    if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md: grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h3>Loading ....</h3>;
  }
}

export default UserResults;
