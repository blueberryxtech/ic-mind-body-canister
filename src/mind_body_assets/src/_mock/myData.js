import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const myData = [...Array(4)].map((_, index) => ({
  id: faker.string.uuid(),
  uniqueId: faker.string.uuid(),
  dataType: "blueberry",
  date: faker.date.anytime(),
  dateSize: faker.string.numeric(2),
  isVerified: faker.datatype.boolean()
}));
