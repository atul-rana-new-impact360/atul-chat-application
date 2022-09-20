import { createApp } from 'vue';
import App from './App.vue';
const authcheck = localStorage.getItem("accessTokenKey");
// import the vue router.
import { createRouter, createWebHistory } from 'vue-router';
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AddContactComponent from "./components/AddContactComponent.vue";
import ChatComponent from "./components/ChatComponent.vue";
// component to show all groups
import GroupsComponent from "./components/GroupsComponent.vue";
// component to create new group
import AddGroupComponent from "./components/AddGroupComponent.vue"
import NotificationsComponent from "./components/NotificationsComponent.vue";

// Define some routes. Each route should map to a component.
const routes = [
    { path: '/register', component: RegisterComponent },
    { path: '/login', component: LoginComponent },
    { path: '/', component: LoginComponent },
    { path: '/home', component: HomeComponent, meta: {
        requiresAuth: true
      }
    },
    { path: "/contacts/add", component: AddContactComponent, meta: {
        requiresAuth: true
      }
    },
    { path: "/chat/:email", component: ChatComponent, meta: {
        requiresAuth: true
      }
    },
    // route to show all groups
    { path: "/groups", component: GroupsComponent, meta: {
        requiresAuth: true
      }
    },
    // route to create new group
    { path: "/groups/add", component: AddGroupComponent, meta: {
        requiresAuth: true
      }
    },
    { path: "/notifications", component: NotificationsComponent, meta: {
        requiresAuth: true
      }
    },
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem("accessTokenKey") == null) {
        next({
          path: "/"
        });
      } else {
        //debugger;
        next();
      }
    } else {
      next();
    }
});
const app = createApp(App);

app.config.globalProperties.$mainURL = "http://localhost:8080";
app.config.globalProperties.$apiURL = "http://localhost:4000";
app.config.globalProperties.$accessTokenKey = "accessTokenKey";
app.config.globalProperties.$user = null;
app.config.globalProperties.$login = false;
app.config.globalProperties.$headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("accessTokenKey")
};

app.use(router);
app.mount('#app');
