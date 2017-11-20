'use strict'

const postgresControlFile = require('./PostgresController') //connects to PSQL
const postgresController = new postgresControlFile()

const redisControlFile = require('./redisController') //connects to redis
const redisController = new redisControlFile()

module.exports = class DBC {
    
    save(message) {
        redisController.cacheMessage(message)
    }
    async getCachedMessages(roomName) {
        let messages
        try {
            messages = await redisController.getCachedMessages(roomName)
            return messages

        } catch (error) {
            console.error("ERROR: ",error)
        }
    }
    //save and restore messages to/from postgres

    //check logininfo with postgres

    //check registerinfo with prostgres

    //save commands from virtulization to postgres

}