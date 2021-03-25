import { BASE_URL } from '../constant/url.js';

export const postUser = async (name) => {
    try {
        const response = await fetch(
            `${BASE_URL}/api/users`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ name })
            }
        )
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch (err) {
        alert(`💣 Error : ${err} 💣`);
    }
};


// export const getUser = async () => {
//     const 
// }