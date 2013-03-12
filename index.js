
// Use request handler as a prerequisite and visa versa

module.exports = function (callback) {
    return function (request, next) {
        var reply = next || request.reply.bind(request);
        request.reply = reply;

        callback(request);
    }
};