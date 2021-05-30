const db = require('../db')
const mongoose = require('mongoose');
const vehicleModel = require('../car');
const scrapers = require('../scrapers');

const vehicleData = { 
    _id: new mongoose.Types.ObjectId(),
    title: 'Audi A4',
    subtitle: 'Bardzo dobra cena', 
    year: '2015',
    mileage_in_km: '200000', 
    engine_capacity_cm3: '1999', 
    fuel_type: 'benzyna',
    city: 'Warszawa',
    region: 'Mazowieckie',
    price_PLN: '50000',
};

afterAll(() => {
    mongoose.disconnect();
}); 

test('return array from db', () => {
    expect.assertions(1);
    return db.getAllCars().then(data => {
      expect(data).toContainEqual(expect.arrayContaining([]));
    });
});

test('create & save vehicle successfully', async () => {
    const validVehicle = new vehicleModel(vehicleData);
    const savedVehicle = await validVehicle.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedVehicle._id).toBeDefined();
    expect(savedVehicle.title).toBe(vehicleData.title);
    expect(savedVehicle.subtitle).toBe(vehicleData.subtitle);
    expect(savedVehicle.mileage_in_km).toBe(vehicleData.mileage_in_km);
    expect(savedVehicle.engine_capacity_cm3).toBe(vehicleData.engine_capacity_cm3);
    expect(savedVehicle.fuel_type).toBe(vehicleData.fuel_type);
    expect(savedVehicle.city).toBe(vehicleData.city);
    expect(savedVehicle.region).toBe(vehicleData.region);
    expect(savedVehicle.price_PLN).toBe(vehicleData.price_PLN);
});

// Test Schema is working!!!
// You shouldn't be able to add in any field that isn't defined in the schema
test('insert vehicle successfully, but the field does not defined in schema should be undefined', async () => {
    const vehicleWithInvalidField = new vehicleModel({ 
        _id: new mongoose.Types.ObjectId(), title: 'Audi A4', subtitle: 'Bardzo dobra cena', year: '2015', price_PLN: "200000", description: 'Samochód jak nowy' 
    });
    const savedVehicleWithInvalidField = await vehicleWithInvalidField.save();
    expect(savedVehicleWithInvalidField._id).toBeDefined();
    expect(savedVehicleWithInvalidField.description).toBeUndefined();
});

// Test Validation is working!!!
    // It should us told us the errors in on year and price_PLN field.
test('create vehicle without required field should failed', async () => {
        const vehicleWithoutRequiredField = new vehicleModel({ 
            _id: new mongoose.Types.ObjectId(), title: 'Audi A4', subtitle: 'Bardzo dobra cena' 
        });
        let err;
        try {
            const savedVehicleWithoutRequiredField = await vehicleWithoutRequiredField.save();
            error = savedVehicleWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.year).toBeDefined();
        expect(err.errors.price_PLN).toBeDefined();
});

test('scraper test', () => {
    return scrapers.scrapeCar('someUrl').then(data => {
        expect(data).toContainEqual(expect.arrayContaining([]));
    });
},30000);

test('if scraped object has properties', () => {
    return scrapers.scrapeCar('someUrl').then(data => {
        expect(data[0]).toHaveProperty('title');
        expect(data[0]).toHaveProperty('subtitle');
        expect(data[0]).toHaveProperty('year');
        expect(data[0]).toHaveProperty('price_PLN');
    });
},30000);

test('if scraped object is not null', () => {
    return scrapers.scrapeCar('someUrl').then(data => {
        expect(data[0]).not.toBeNull();
        expect(data[1]).not.toBeNull();
        expect(data[2]).not.toBeNull();
    });
},30000);

test('if scraped object is truthy (not false, 0, empty string, null, undefined, and NaN)', () => {
    return scrapers.scrapeCar('someUrl').then(data => {
        expect(data[0]).toBeTruthy();
        expect(data[1]).toBeTruthy();
        expect(data[2]).toBeTruthy();
    });
},30000);