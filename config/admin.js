module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5d8aeab57cb6a321a33bd227adbf619'),
  },
});
