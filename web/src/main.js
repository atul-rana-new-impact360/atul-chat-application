import { createApp } from 'vue';
import App from './App.vue';

// import the vue router.
import { createRouter, createWebHistory } from 'vue-router';
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AddContactComponent from "./components/AddContactComponent.vue";
import ChatComponent from "./components/ChatComponent.vue";
// Define some routes. Each route should map to a component.
const routes = [
    { path: '/register', component: RegisterComponent },
    { path: '/login', component: LoginComponent },
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: "/contacts/add", component: AddContactComponent },
    { path: "/chat/:email", component: ChatComponent },
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

const app = createApp(App);

app.config.globalProperties.$mainURL = "http://localhost:8080";
app.config.globalProperties.$apiURL = "http://localhost:3000";
app.config.globalProperties.$accessTokenKey = "accessTokenKey";
app.config.globalProperties.$user = null;
app.config.globalProperties.$login = false;
app.config.globalProperties.$headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("accessTokenKey")
};

app.use(router);
app.mount('#app');
