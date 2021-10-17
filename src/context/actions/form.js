import baseURL from '../../helper/baseURL'
export async function initCategories(dispatch) {
  fetch(`${baseURL}/list.php?c=list`).then((resp) => resp.json())
    .then((resp) => dispatch({type: "initCategories", payload: resp.drinks}))
}
