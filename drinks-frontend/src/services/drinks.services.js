import axios from 'axios';
const apiURL = import.meta.env.VITE_API_URL

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
        //console.log(data);
        return data.drinks[0] || []


    } catch (error) {
        console.error
        throw new Error("Ocurrió un error al obtener la bebida")

    }
}
