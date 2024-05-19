import { createContext , useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()
//  const GITHUB_URL= process.env.REACT_APP_GITHUB_URL 
  // const GITHUB_TOKEN= process.env.REACT_APP_GITHUB_TOKEN 

export const GithubProvider = ({children}) => {
     const initialState = {
      users : [] , 
      loading : true, 
      user : [] ,
     }
     const  [state , dispatch] = useReducer(githubReducer , initialState)
    //  const setLoding = () => dispatch ({type : 'SET_LOADING'}) 
    //  const handleclear = () => dispatch({type:'CLEAR_USERS'})
   
    // const SearchUsers = async (text) => {
      //  setLoding()
      //  const parms = new URLSearchParams({
        // q : text
      //  }) 
        // try {
          // const response = await fetch(`${GITHUB_URL}/search/users?${parms}`, {
            // headers: {
              
              // Authorization: `token ${GITHUB_TOKEN}`,
              
            // }
          // });
          // console.log(`Bearer ${GITHUB_TOKEN}`)
          // if (!response.ok) {
            // throw new Error(`Error fetching users: ${response.statusText}`);
          // }
    
          // const {items} = await response.json();
          //  dispatch ({
            // type : 'GET_USERS', 
            // payload: items ,
          //  })
        // } catch (error) {
          // console.error(error);
          
         
        // }
        // console.log("GITHUB_TOKEN:", GITHUB_TOKEN);
        // console.log("GITHUB_URL:", GITHUB_URL);


      // };
      // const getUser = async () => {
        // setLoding()
        
         
          //  const response = await fetch(`${GITHUB_URL}/users/sedkibagga`, {
            //  headers: { 
               
              //  Authorization: `token ${GITHUB_TOKEN}`,
               
            //  }
          //  });
           
          //  if (response.status ===404) {
            //  window.location = '/not found'
          //  } 
          //  else {
            // const data = await response.json();
            // console.log(data)
            // dispatch ({
            //  type : 'GET_USER', 
            //  payload: data,
            // })
            
          //  }
     
           
        //  } 
         
 
       
      return <GithubContext.Provider value={{
        ...state,
        dispatch,
        //  users: state.users , 
        //  loading : state.loading ,
        //  SearchUsers,
        //  handleclear,
        //  user : state.user,
        //  getUser ,
      }} >
        {children} 
      </GithubContext.Provider>
    
}
export default  GithubContext