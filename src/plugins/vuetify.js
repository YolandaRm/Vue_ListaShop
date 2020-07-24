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
                primary: colors.pink.base,
                secondary: colors.grey.base,
                accent: colors.purple.base,
                error: colors.red.base,
                warning: colors.orange.base,
                info: colors.grey.base,
                success: colors.green.base
            }
        }    
    }
});
