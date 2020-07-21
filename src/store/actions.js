import {MUTATION_TYPES} from './mutations';
// con get vamos a llamar a todos los items 
export const ACTION_TYPES = {
    GET_ITEMS: 'GET_ITEMS'
};
/* vamos a definir un método que recibe texto y ponemos
las dependencias que necesitamos que reciba (cliente http)
le pregunto pido obtener get los datos
le contesto con los datos actualizados (importo la mutation)
 */
export const actions = {
    async [ACTION_TYPES.GET_ITEMS](context, http){
        const items = await http.getAll();
        context.commit(MUTATION_TYPES.SET_ITEMS, items);
    }
}