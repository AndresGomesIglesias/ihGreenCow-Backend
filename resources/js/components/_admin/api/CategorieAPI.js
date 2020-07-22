import axios from 'axios';
import { urlCategories } from '../../../config/config'



/**
 * Get all categories
 * @return object
 */

export const indexCategories =  () => {
    let result =  axios.get(urlCategories)
    return result
   
}
/**
 * Delete categories
 * @return object
 */
export function deleteCategorie (id) {
    return axios.delete(urlCategories + id)
};

/**
 * show 1 categories
 * @return object
 */
export function showCategorie (id) {
    return axios.get(urlCategories + id)
};

/**
 * show 1 categories
 * @return object
 */
export function updateCategorie (obj) {
    return axios.put(urlCategories + obj.id, obj)
};

/**
 * add categories
 * @return object
 */
export function addCategories (object) {
    return axios.post(urlCategories, object)
}
   