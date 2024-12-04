import { Sequelize } from 'sequelize';
// Use as credenciais fornecidas pelo Render para se conectar ao banco de dados
const sequelize = new Sequelize({
  host: 'dpg-ct7sr368ii6s73c95af0-a',  // Substitua pelo host do banco de dados Render
  dialect: 'postgres',
  username: 'projeto4na_user',      // Substitua pelo seu nome de usuário do banco de dados
  password: 'eLfGdmzt7kPSgi5ErOQISTGRvn1tAd95',      // Substitua pela sua senha do banco de dados
  database: 'projeto4na',      // Substitua pelo nome do banco de dados
  port: 5432,                   // A porta padrão do PostgreSQL
  dialectOptions: {
    ssl: {
      require: true,             // Exige uma conexão SSL
      rejectUnauthorized: false  // Desabilita a verificação de certificados SSL (pode ser necessário no Render)
    }
  }
});

// Testa a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;