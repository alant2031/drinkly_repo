import baseURL from '../../helper/baseURL'

export async function listDetails(dispatch, id) {
  fetch(`${baseURL}/lookup.php?i=${id}`).then((resp) => resp.json())
    .then((resp) => dispatch({
      type: "listDetails",
      payload: resp.drinks ? resp.drinks[0] : []
    }))
    .catch((error) => {
      throw(error)
    })
}