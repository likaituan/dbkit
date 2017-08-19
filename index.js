
var dbList = {
	mongo: require('./mongo'),
	mysql: require('./mysql')
};

module.exports = function (ops){
	return dbList[ops.type||'mongo'];
};