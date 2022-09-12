// Landing Page methods
exports.welcome = (req, res, next) => {
    json = {
        message: "Hellow Welcome to landing Page",
        possibleRoutes: "\'/\' \n '\/user\'"
    }
    res.send(
        '<html><head><title>LANDING PAGE</title><body style="background-color: black; color: lime;"></body>Hi</head></html>'
    );
}