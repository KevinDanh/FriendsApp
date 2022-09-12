exports.welcomeUser = (req, res, next) => {
    res.send(200).json({
        message: "Welcome to userPage"
    })
}