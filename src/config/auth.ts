import sessionRouter from "@modules/users/routes/sessions.routes";

export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '1d'
  }
}
