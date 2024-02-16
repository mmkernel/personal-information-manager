import { fakerDE as faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

/* const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomName, randomEmail); */

const fakeData = [];

for (let i = 0; i <= 9; i++) {
    fakeData[i] = {
        "id": i + 1,
        "quantity": faker.number.int({ min: 1, max: 100 }),
        "unit": faker.helpers.arrayElement(['l', 'g', 'kg', 'St.', 'Pk.']),
        "title": faker.commerce.productName(),
        "information": faker.commerce.productDescription(),
        "category": faker.helpers.arrayElement(['food', 'non food', 'conviniece']),
    }
}

export {fakeData};