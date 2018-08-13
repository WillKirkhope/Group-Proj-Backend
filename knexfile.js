module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/openvillage'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}