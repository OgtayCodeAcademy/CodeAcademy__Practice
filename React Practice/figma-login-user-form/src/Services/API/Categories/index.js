import axios from "axios";

const Base_Url = 'https://northwind.vercel.app/api/categories'

//^ get all categories
export async function GetAllCategories(){
    let categories;
    await axios.get(Base_Url)
    .then((result)=>{
        categories = result.data
    })
    return categories
}  