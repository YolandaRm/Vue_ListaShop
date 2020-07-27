/*
con get vamos a llamar a todos los items 
vamos a definir un método que recibe texto y ponemos
las dependencias que necesitamos que reciba (cliente http)
le pregunto pido obtener get los datos
le contesto con los datos actualizados (importo la mutation)
actions no devuelve del body los items directamente por lo  
se hace a través de data
 */
import {MUTATION_TYPES} from './mutations';
export const ACTION_TYPES = {
    GET_ITEMS: 'GET_ITEMS'
};

export const actions = {
    async [ACTION_TYPES.GET_ITEMS](context, http){
        const {data} = await http.getAll();
        context.commit(MUTATION_TYPES.SET_ITEMS, data);
    },
    async [ACTION_TYPES.ADD_ITEM](context,{http, model}){
        const response = await http.post(model);
        context.commit(MUTATION_TYPES.ADD_ITEM, response.data);
    }
}
/*   
        con add vamos a añadir todos los items,
        definimos un método que reciba los datos del cliente
        le contesto con los datos actualizados y los añado en la mutación
        esta mutación dando la respuesta de datos añadidos se hace a través del data
        
        respuesta constante = espera http. para enviar (cliente, los datos);
        acometer en el contexto (mutar los tipos AÑADIENDO items en la respuesta. datos);
        igual que los items pero añadiendolos en vez d obteniendolos
 */
