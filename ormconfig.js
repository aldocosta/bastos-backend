module.exports = {
  type: 'mssql',
  host: 'localhost',
  timeout: 0,
  port: 1433,
  username: 'sa',
  password: '@3c1sposql',
  database: 'dbaldo',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations'
  },
  options: {
    encrypt: false,
  },
  extra: {
    trustServerCertificate: true,
    options: {
      enableArithAbort: false,
    },
  },
}