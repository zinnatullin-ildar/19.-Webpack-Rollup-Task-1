export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs',
        name: 'build'
    },
    watch: {
        exclude: ['node_modules/**']
    }
};
