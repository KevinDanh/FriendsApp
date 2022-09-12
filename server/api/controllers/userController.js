exports.welcomeUser = (req, res, next) => {
    html = `
        <html>
            <head>
                <title> User Routes </title>
            </head>
            <body style="text-align: left; width: 200px; height: fit-content; border: 2px solid white; background-color: black; color:lime">
                <h3 style="text-align: center;">User Page</h3>
                <h5 style="text-align: center;">Routes we want to make</h5>
                <ol>
                    <li> /createUser </li>
                    <li> /deleteUser </li>
                    <li> /editUser </li>
                    <li> /login </li>
                </ol>
            </body>
        </html>
    `;
    res.send(html)
}