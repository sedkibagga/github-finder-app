const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const SearchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    console.log(`Bearer ${GITHUB_TOKEN}`);

    if (!response.ok) {
        console.error(`Error fetching users: ${response.statusText}`);
        return null; 
    }

    const { items } = await response.json();

    console.log("GITHUB_TOKEN:", GITHUB_TOKEN);
    console.log("GITHUB_URL:", GITHUB_URL);

    return items;
};
export const getUser = async () => {
    
    
     
       const response = await fetch(`${GITHUB_URL}/users/sedkibagga`, {
         headers: { 
           
           Authorization: `token ${GITHUB_TOKEN}`,
           
         }
       });
       
       if (response.status ===404) {
         window.location = '/not found'
         return null
       } 
       else {
        const data = await response.json();
        console.log(data)
        return data
        
       }
       
       
     } 