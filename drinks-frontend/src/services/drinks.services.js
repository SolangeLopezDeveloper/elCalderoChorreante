import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL
const apiURLPropia = import.meta.env.VITE_API_URL_AUTH

export const filterDrinksService = async (ingredient, category) => {

    try {

        const url = `${apiURL}filter.php?i=${ingredient}&c=${category}`
        const { data } = await axios.get(url)

        const drinks = data.drinks.map(drink => ({ ...drink, price: +((drink.idDrink / 10).toFixed(0)) }))



        //console.log(data);
        return drinks || []

    } catch (error) {
        console.error
        throw new Error("Ocurrió un error al obtener la bebida")
    }
}

export const getRecipeService = async (idDrink) => {
    try {
        const url = `${apiURL}lookup.php?i=${idDrink}`
        const { data } = await axios.get(url)
        console.log(data);
        return data.drinks || {}


    } catch (error) {
        console.error
        throw new Error("Ocurrió un error al obtener la bebida")

    }
}
export const getDrinkByIdService = async (drinkId) => {
    try {
        const url = `${apiURL}lookup.php?iid=${drinkId}`
        const { data } = await axios.get(url)

        console.log(data.ingredients);


    } catch (error) {
        console.error
        throw new Error("Ocurrió un error al obtener la descripción de la bebida")

    }
}
export const getPicadasService = async () => {
    try {
        const url = `${apiURLPropia}products`
        const {data} = await axios.get(url)
        console.log(data);
        return data
        
    } catch (error) {
        console.error
        throw new Error("Ocurrió un error al obtener la información") 
    }
}