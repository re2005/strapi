module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2520006d17c259bbd161e37b08fe5d60'),
  },
});
