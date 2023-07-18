import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL

export const getCategoriesServices = async () => {
 try {
    const url = `${apiURL}list.php?c=list`
    const {data} = await axios.get(url)
   return data.drinks || []

 } catch (error) {
    console.error
    throw new Error("Ocurrió un error al obtener las categorías")
    
 }
}
