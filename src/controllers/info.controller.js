import StatusCodes from 'http-status-codes';

export const infoController = (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'The API is live',
        error: {},
        data: {},
    });
};


