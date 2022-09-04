import { Module } from 'vuex'
import { GlobalDataProps } from './index'

export interface UserProps {
    isLogin: boolean;
    userName?: string;
}

// const userData: UserProps = {
//     isLogin: false
// }

const user: Module<UserProps, GlobalDataProps> = {
    state: {
        isLogin: false
    },
    mutations: {
        login(state) {
            state.isLogin = true
            state.userName = 'ch'
        },
        logout(state) {
            state.isLogin = false
        }
    },
}

export default user
