const register = require("./register");
const verify = require("./verify");
const resendVerify = require("./resendVerify");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
    register: ctrlWrapper(register),
    verify: ctrlWrapper(verify),
    resendVerify: ctrlWrapper(resendVerify),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateAvatar: ctrlWrapper(updateAvatar),
}