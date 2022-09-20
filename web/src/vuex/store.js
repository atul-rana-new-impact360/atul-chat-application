import { createStore } from "vuex"

export default createStore({
    state() {
        return {
            messages: [],
            contacts: []
        }
    },

    mutations: {
        appendMessage (state, newMessage) {
            state.messages.push(newMessage)
        },

        setContacts (state, newContacts) {
            state.contacts = newContacts
        },

        prependMessage (state, newMessage) {
            state.messages.unshift(newMessage)
        },

        setMessages (state, newMessages) {
            state.messages = newMessages
        },
    },

    getters: {
        getMessages (state) {
            return state.messages
        },
        getContacts (state) {
            return state.contacts
        }
    }
})