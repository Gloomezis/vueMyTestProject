<template>
    <div class="container">
        <google-map :name="name"></google-map>
    </div>
</template>

<script>
    import googleMap from './googleMap'

    export default {
        data: function () {
            return {
                name: 'map'
            }
        },
        mounted: function () {
        },
        components: {googleMap}
    }
</script>