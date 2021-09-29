module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'shayan7710@gmail.com',
      defaultTo: 'shayan7710@gmail.com',
    },
  },
});
