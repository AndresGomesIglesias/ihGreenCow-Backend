/**
 * Ici nous pouvoir mettre les différentes configuration de notre application mais aussi des const d'URL ou autre
 */
//endpoint
export const urlCategories = 'http://localhost:8000/api/v1/categories/'

//headers
export function headers(token) {
    return(
        {   
            headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
            }
        }
    )
}