import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:8000/api',
    header:{ 
        Accept: "application/json",
        "Context-Type": "application/json"
},
    
});

export default api;