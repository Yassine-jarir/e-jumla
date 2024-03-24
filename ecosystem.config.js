module.exports = {
  apps: [
      {
          name: "Ejoumla-app",
          script: "npm",
          args: "start",
          instances: 1,
          autorestart: true,
          watch: false,
          env: {
            NODE_ENV: "production"
          }
      }
  ]
};