function LoginController() {

    // Precondition before test: load the users
    var userList;
    function loadUserList(users) {
        userList = users;
    }

    // Check if a user id is valid
    function isValidUserId(user) {
        return userList.indexOf(user) >= 0;
    }

    // Check if a user id is valid in an aynchronous way
    // Note: setTimeout has been used to simulate the async behavior.
    function isValidUserIdAsync(user, callback) {
        setTimeout(function () {
            callback(userList.indexOf(user) >= 0)
        }, 3);
    }

    // Check user id with Promise
    function isAuthorizedPromise(user) {
        return new Promise(function(resolve) {
            setTimeout(function () {
                resolve(userList.indexOf(user) >= 0)
            }, 5);
        });
    }

    return {
        isValidUserId,
        isValidUserIdAsync,
        loadUserList,
        isAuthorizedPromise
    }
}

module.exports = LoginController();