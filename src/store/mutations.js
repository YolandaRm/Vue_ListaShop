//declaramos un objeto de tipo  y una mutation que sea set de items
export const MUTATION_TYPES = {
    SET_ITEMS: 'SET_ITEMS'
}

//y creamos un método, éste recibirá el state

export const mutations = {
    [MUTATION_TYPES.SET_ITEMS](state, items){
        state.items = items;
    }
};