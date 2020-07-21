//declaramos un objeto de tipo  y una mutation que sea set de items
export const MUTATION_TYPES = {
    SET_ITEMS: 'SET_ITEMS'
}
export const mutations = {   //y creamos un método, éste recibirá el state
    [MUTATION_TYPES.SET_ITEMS](state, items){
        state.items = items;

    }
}