import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties:true,
        },
        themes: {
            
            default: {
                primary: colors.blue.base,
                secondary: colors.purple.base,
                accent: colors.indigo.base,
                error: colors.red.base,
                warning: colors.orange.base,
                info: colors.grey.base,
                success: colors.purple.base
            }
        }    
    }
});
