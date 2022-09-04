import { createStore } from 'vuex'
import templates, { TemplatesProps } from './templates'
import user, { UserProps } from './user'
import editor, { EditorProps } from './editor'


export interface GlobalDataProps {
    user: UserProps;
    templates: TemplatesProps;
    editor: EditorProps;
}


// const store = createStore<GlobalDataProps>({
//     state: {
//         templates: testData,
//         user: { isLogin: false }
//     },
//     mutations: {
//         login(state) {
//             state.user = {
//                 ...state.user, isLogin: true, userName: 'ch'
//             }
//         },
//         logout(state) {
//             state.user = {
//                 isLogin: false,
//             }
//         },
//     },
//     getters: {
//         getTemplateById: (state) => (id: number) => {
//             return state.templates.find(t => t.id === id)
//         }
//     }
// })

const store = createStore({
    modules: {
        templates,
        user,
        editor
    }
})



export default store