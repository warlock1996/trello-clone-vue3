module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/scss/myvariables"; 
        @import "./node_modules/bootstrap/scss/bootstrap.scss";`
            }
        }
    }
}
