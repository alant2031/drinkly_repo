import baseURL from '../../helper/baseURL'

export async function listByCategory(dispatch, category = "Ordinary_Drink") {
  fetch(`${baseURL}/filter.php?c=${category}`).then((resp) => resp.json())
    .then((resp) => dispatch({type: "listByCategory", payload: resp.drinks}))
}