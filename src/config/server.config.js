
if (!process.env.PORT) {
    throw new Error('PORT is not defined in the environment variables');
}

const serverConfig = {
    port: process.env.PORT,
};

module.exports = serverConfig;
