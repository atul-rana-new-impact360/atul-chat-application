<template>
    <div class="container">
        <!-- heading -->
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-center text-white">Notifications</h1>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from "axios"
    import swal from "sweetalert2"
    import store from "../vuex/store"

    export default {

        methods: {
            // method to mark all notifications as read
            markAsRead: async function () {
                const response = await axios.post(
                    this.$apiURL + "/markNotificationsAsRead",
                    null,
                    {
                        headers: this.$headers
                    }
                )

                if (response.data.status == "success") {
                    // set the unread notifications to zero
                    store.commit("setUnreadNotifications", 0)
                }
            },
        },

        // on page loaded, mark all notifications as read
        mounted: function () {
            this.markAsRead()
        },
    }
</script>