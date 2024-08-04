const advertisers = [
    {
        code: 1,
        LastName: "Smith",
        Email: "john.smith@example.com",
        passwoed: "Smith123",
        phone: "123-456-7890",
        phone2: "456-789-0123"
    },
    {
        code: 2,
        LastName: "Sara",
        Email: "Sara@example.com",
        passwoed: "Sara123",
        phone: "123-456-7890",
        phone2: "456-789-0123"
    },
    {
        code: 3,
        LastName: "Chaim",
        Email: "Chaim@example.com",
        passwoed: "Chaim123",
        phone: "123-456-7890",
        phone2: "456-789-0123"
    },
    {
        code: 4,
        LastName: "Rut",
        Email: "Rut@example.com",
        passwoed: "Rut123",
        phone: "123-456-7890",
        phone2: "456-789-0123"
    },
    {
        code: 5,
        LastName: "Shir",
        Email: "Shir@example.com",
        passwoed: "Shir123",
        phone: "123-456-7890",
        phone2: "456-789-0123"
    }
]
function getAdvertiserTable() {
    return [...advertisers];
}

function addAdvertiser(advertiser) {
    advertisers.push(advertiser);
}

module.exports = { getAdvertiserTable, addAdvertiser };