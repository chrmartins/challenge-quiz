const mongoose = require('mongoose');
require('dotenv/config');

try {
    const user_bd = process.env.USER_BD;
    const password_bd = process.env.PASSWORD_BD;
    const con = 'mongodb://root:root@localhost:27019/admin'
        mongoose.connect(con, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} catch (error) {
    console.log('Erro de conexão com banco', error.message | error);
}