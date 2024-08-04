const { getAllApartment, getAllApartmentByCity, getAllApartmentByPrice, getAllApartmentByIdAdvertiser } = require('../actions/action');

async function apartmentsRouters(req, res, url) {
    const urlParts = url.split("/");
    const action = urlParts[0]; 
    const params = urlParts.splice(1, urlParts.length - 1); 
    let data;

    switch (action) {
        case "getAll":
           
            try {
                const myApartment = await getAllApartment(); 
                data = JSON.stringify(myApartment);
                res.write(data);
            } catch (error) {
                console.error(error);
                res.write("Error fetching myApartments");
            }
            res.end();
            break;

        case "getApartmentByPrice":
            const price1 = params[0];
            const price2 = params[1];

            try {
                const byPrice = await getAllApartmentByPrice(price1, price2);
                data = byPrice == null ? "null" : JSON.stringify(byPrice);
                res.write(data);
            } catch (error) {
                console.error(error);
                res.write("Error byPrice in");
            }
            res.end();
            break;
        case "getApartmentByCity":
            const city = params[0];
            console.log(city + " city");

            try {
                const byCity = await getAllApartmentByCity(city);
                data = byCity == null ? "null" : JSON.stringify(byCity);
                res.write(data);
            } catch (error) {
                console.error(error);
                res.write("Error byCity in");
            }
            res.end();
            break;

        case "getApartmentByIdAdvertiser":
            const lastName = params[0];
            try {
                const byAdvertiser = await getAllApartmentByIdAdvertiser(lastName);
                data = byAdvertiser == null ? "null" : JSON.stringify(byAdvertiser);
                res.write(data);
            } catch (error) {
                console.error(error);
                res.write("Error byAdvertiser in");
            }
            res.end();
            break;
        default:
            res.write("Not Found status 404");
            res.end();
            break;
    }
}

module.exports = apartmentsRouters;