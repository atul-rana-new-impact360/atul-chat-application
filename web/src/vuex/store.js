import { createStore } from "vuex"

export default createStore({
    state() {
        return {
            messages: [],
            contacts: [],
            // initialize groups array
            groups: [],
            unreadNotifications: 0,
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
        // set the groups value
        setGroups (state, newGroups) {
            state.groups = newGroups
        },
        setUnreadNotifications (state, unreadNotifications) {
            state.unreadNotifications = unreadNotifications
        },
    },

    getters: {
        getMessages (state) {
            return state.messages
        },
        getContacts (state) {
            return state.contacts
        },
        // get the state groups
        getGroups (state) {
            return state.groups
        },
        getNotifications (state) {
            return state.notifications
        },
    }
})