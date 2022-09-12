// Landing Page methods
exports.welcome = (req, res, next) => {
    html = `
        <html>
            <head>
                <title> Landing Routes </title>
            </head>
            <body style=" width: 100px; height: fit-content; border: 2px solid white; background-color: black; color:lime">
                <h3 style="text-align: center;">Landing Page</h3>
                <h5 style="text-align: center;">Possible Routes</h5>
                <ol>
                    <li> / </li>
                    <li> /user </li>
                </ol>
            </body>
        </html>
    `;
    res.send(
        html
    );
}