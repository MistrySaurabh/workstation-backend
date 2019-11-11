var bcrypt = require('bcrypt-nodejs');


var getHash = function(value, cb) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return cb(err);
        }
        bcrypt.hash(value, salt, null, function(err, hash) {
            if (err) {
                return cb(err);
            }
            cb(null, hash);
        });
    });
};

var compareHash = function(candidatePassword, passwordHash, cb) {
    bcrypt.compare(candidatePassword, passwordHash, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
}

exports.getHash = getHash;
exports.compareHash = compareHash;