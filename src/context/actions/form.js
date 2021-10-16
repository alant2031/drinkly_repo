const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
export async function initCategories(dispatch) {
  fetch(url).then((resp) => resp.json())
    .then((resp) => dispatch({type: "initCategories", payload: resp.drinks}))
}