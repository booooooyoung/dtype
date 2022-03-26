module.exports = {
    apps: [
      {
        name: 'dtype',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
        env: {
            Server_PORT:4000
        }
      }
    ]
  }