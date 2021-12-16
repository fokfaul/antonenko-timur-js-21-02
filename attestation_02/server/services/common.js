const format = require('string-format')
const logger = require('../logger')
const {apiError} = require('../constants/errors/dumMyApi')

exports.defaultResponse = (res, apiData, suc, err) => {
    if ('error' in apiData)
    {
        logger.info(format(err, 520, apiData))
        res.status(400).send({"error": apiError(apiData['error'])})
    }
    else
    {
        logger.info(format(suc, 200, apiData))
        res.status(200).send(apiData)
    }
}