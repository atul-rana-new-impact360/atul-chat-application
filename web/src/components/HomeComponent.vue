<template>
    <div class="container">
        <div class="row">
            <div class="offset-md-10 col-md-2">
                <router-link class="btn btn-primary" to="/contacts/add">Add Contact</router-link>
            </div>
            <ContactComponent />
        </div>
    </div>
</template>

<script>
    import ContactComponent from "./ContactComponent"

    export default {
        components: {
            ContactComponent
        }
    }
</script>