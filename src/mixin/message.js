import Vue from 'vue'
Vue.mixin({
    methods: {
        $msg(message, type) {
            this.$message({
                type,
                message
            })
        },
        $success(message) {
            this.$msg(message, 'success')
        },
        $fail(message) {
            this.$msg(message, 'error')
        }
    }
})
