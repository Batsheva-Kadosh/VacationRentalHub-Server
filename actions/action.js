const { getAdvertiserTable } = require("../db/advertiser");
const { getAprtmentTable } = require("../db/apartment");

const getAllAdvertiser = async () => {
    console.log(getAdvertiserTable());
    return await getAdvertiserTable();
}


const getAdvertiserByEmailAndPassword = async (email, password) => {
    const advertisers = await getAdvertiserTable();
    console.log("Advertisers:", advertisers);

    const advertiser = advertisers.find(advertiser => advertiser.Email === email && advertiser.passwoed === password);
    console.log(`Advertiser with email ${email} and password ${password}:` + advertiser);
    return advertiser || null;
};
const getAllApartment = async () => {
    console.log(getAdvertiserTable());
    return await getAprtmentTable();
}
const getAllApartmentByCity = async (city) => {

    console.log(getAprtmentTable);
    const aprtments = await getAllApartment();
    const aprtment = aprtments.filter(a => a.City === city);
    return aprtment || null;
}

const getAllApartmentByPrice = async (price1, price2) => {
    console.log(getAprtmentTable);
    const aprtments = await getAllApartment();
    const aprtment = aprtments.filter(apartment => apartment.price >= price1 && apartment.price <= price2);
    return aprtment || null;
}

const getAllApartmentByIdAdvertiser = async (lastNamAdvertiser) => {
    console.log(getAprtmentTable);
    const advertisers = await getAllAdvertiser();
    const advertiser = advertisers.find(advertiser => advertiser.LastName == lastNamAdvertiser);
    const aprtments = await getAllApartment();
    const aprtment = aprtments.filter(apartment => apartment.RewardCode === advertiser.code);
    return aprtment || null;
}

const myAddAdvertiser = async () => {
    const advertisers = await getAllAdvertiser();
    return advertisers;

}
module.exports = { getAllAdvertiser, getAdvertiserByEmailAndPassword, getAllApartment, getAllApartmentByCity, getAllApartmentByPrice, getAllApartmentByIdAdvertiser, myAddAdvertiser }
