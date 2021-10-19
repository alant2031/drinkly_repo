import baseURL from '../../helper/baseURL'

export async function listByCategory(dispatch, category) {
  const categorySet = category ? category : "Ordinary_Drink"
  fetch(`${baseURL}/filter.php?c=${categorySet}`).then((resp) => resp.json())
    .then((resp) => dispatch({type: "listByCategory", payload: { 
      list: resp.drinks,
      category
    }
  }))
}

export async function listByName(dispatch, name = "") {
  fetch(`${baseURL}/search.php?s=${name}`).then((resp) => resp.json())
    .then((resp) => dispatch({type: "listByName", payload: resp.drinks}))
}
