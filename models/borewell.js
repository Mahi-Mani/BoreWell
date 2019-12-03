// Export borewell model
module.exports = function(sequelize, DataTypes) {
    var Borewell = sequelize.define("Borewell", {
        OPENEDBY: DataTypes.STRING,
        LOCATION: DataTypes.STRING,
        STATUS: DataTypes.BOOLEAN
    })

    return Borewell;
}