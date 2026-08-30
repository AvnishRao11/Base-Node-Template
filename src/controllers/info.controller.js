const StatusCodes = require('http-status-codes');

const infoController = (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'The API is live',
        error: {},
        data: {},
    });
};

module.exports = { infoController };

