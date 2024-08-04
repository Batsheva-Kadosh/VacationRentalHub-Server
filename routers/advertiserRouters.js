const { getAllAdvertiser, getAdvertiserByEmailAndPassword, myAddAdvertiser } = require('../actions/action');

async function advertiserRouters(req, res, url) {
    const urlParts = url.split("/");
    const action = urlParts[0];
    const params = urlParts.splice(1, urlParts.length - 1);
    let data;

    switch (action) {
        case "getAll":
            try {
                const myAdvertiser = await getAllAdvertiser();
                data = JSON.stringify(myAdvertiser);
                res.write(data);
            } catch (error) {
                console.error(error);
                res.write("Error fetching advertisers");
            }
            res.end();
            break;
        case "login":
            const email = params[0];
            const password = params[1];
            try {
                const loginA = await getAdvertiserByEmailAndPassword(email, password);
                data = loginA == null ? "null" : JSON.stringify(loginA);
                res.write(data);
            } catch (error) {
                console.error(error);
                res.write("Error logging in");
            }
            res.end();
            break;
        case "add":

            req.on('end', async () => {
                try {
                    
                    const myAdvertiser1 = await myAddAdvertiser();
                    data = myAdvertiser1 == null ? "null" : JSON.stringify(myAdvertiser1);
                    res.write(data);
                } catch (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify({ error: err.message }));
                }
                res.end();
            });
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ error: `${routerName} is not found` }));
            res.end();
            break;
    }
}

module.exports = advertiserRouters;
