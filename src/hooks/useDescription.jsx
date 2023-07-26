import { useContext } from "react"
import { DescriptionContext } from "../context/DrinksProvider"


const useDescription = () => {
  return useContext(DescriptionContext)
}
export default useDescription