import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
      key: "e417a97266c24c07a936ff73f53ca5e5",
    }
    
  });

  export default apiClient;