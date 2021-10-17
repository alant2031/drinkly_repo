import baseURL from '../../helper/baseURL'

export async function listByCategory(dispatch, category = "Ordinary_Drink") {
  fetch(`${baseURL}/filter.php?c=${category}`).then((resp) => resp.json())
    .then((resp) => dispatch({type: "listByCategory", payload: resp.drinks}))
}

export async function listByName(dispatch, name = "") {
  fetch(`${baseURL}/search.php?s=${name}`).then((resp) => resp.json())
    .then((resp) => dispatch({type: "listByName", payload: resp.drinks}))
}
