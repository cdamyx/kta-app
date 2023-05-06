import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import AboutUs from "../views/AboutUs.vue"
import Services from "../views/Services.vue"
import ContactUs from "../views/ContactUs.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "AboutUs",
            component: AboutUs
        },
        {
            path: "/services",
            name: "Services",
            component: Services
        },
        {
            path: "/contact",
            name: "ContactUs",
            component: ContactUs
        },
    ]
})

export default router