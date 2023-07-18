import { useContext } from "react"
import { DrinksContext } from "../context/DrinksProvider"


const usePicadas = () => {
  return useContext(DrinksContext)
}
export default usePicadas