<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
    </div>
</template>

<script>
export default {
    name: 'NotFoundView',
    beforeRouteEnter(to, from, next) {
        document.title = '404 - Page Not Found';
        next();
    }
}
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

.dark{
    .not-found {
    color: #fff;
}
}
</style>