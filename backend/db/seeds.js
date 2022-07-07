const ConsultantSeedDB = [
  {
    roles: 'consultant',
    firstName: 'Don',
    lastName: 'Kim',
    email: 'd@d.com',
    password: '1234',
    country: 'Canada',
    province: 'British Columbia',
    city: 'Vancouver',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'DonLimited',
    phoneNumber: '1111111111',
    license: 'license test',
    verified: true,
    price: 1500,
    description: 'I offer web development services',
    rating: 5,
  },
  {
    roles: 'consultant',
    firstName: 'Iksung',
    lastName: 'Choi',
    email: 'i@i.com',
    password: '1234',
    country: 'Canada',
    province: 'Ontario',
    city: 'Toronto',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'IkLimited',
    phoneNumber: '2222222222',
    license: 'license test',
    verified: true,
    price: 1400,
    description: 'I offer therapy sessions for web developers',
    rating: 4,
  },
  {
    roles: 'consultant',
    firstName: 'Raf',
    lastName: 'Nobrega',
    email: 'n@n.com',
    password: '1234',
    country: 'Canada',
    province: 'Columbia',
    city: 'Vancouver',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'RafLimited',
    phoneNumber: '3333333333',
    license: 'license test',
    verified: true,
    price: 1300,
    description: 'I offer web development services',
    rating: 4,
  },
  {
    roles: 'consultant',
    firstName: 'Don2',
    lastName: 'Kim2',
    email: 'd2@d2.com',
    password: '1234',
    country: 'Canada',
    province: 'British Columbia',
    city: 'Vancouver',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'DonLimited',
    phoneNumber: '1111111111',
    license: 'license test',
    verified: true,
    price: 1500,
    description: 'I offer web development services',
    rating: 5,
  },
  {
    roles: 'consultant',
    firstName: 'Iksung2',
    lastName: 'Choi2',
    email: 'i2@i2.com',
    password: '1234',
    country: 'Canada',
    province: 'Ontario',
    city: 'Toronto',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'IkLimited',
    phoneNumber: '2222222222',
    license: 'license test',
    verified: true,
    price: 1400,
    description: 'I offer therapy sessions for web developers',
    rating: 4,
  },
  {
    roles: 'consultant',
    firstName: 'Raf2',
    lastName: 'Nobrega2',
    email: 'n2@n2.com',
    password: '1234',
    country: 'Canada',
    province: 'Columbia',
    city: 'Vancouver',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'RafLimited',
    phoneNumber: '3333333333',
    license: 'license test',
    verified: true,
    price: 1300,
    description: 'I offer web development services',
    rating: 4,
  },
  {
    roles: 'consultant',
    firstName: 'Don3',
    lastName: 'Kim3',
    email: 'd3@d3.com',
    password: '1234',
    country: 'Canada',
    province: 'British Columbia',
    city: 'Vancouver',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'DonLimited',
    phoneNumber: '1111111111',
    license: 'license test',
    verified: true,
    price: 1500,
    description: 'I offer web development services',
    rating: 5,
  },
  {
    roles: 'consultant',
    firstName: 'Iksung3',
    lastName: 'Choi3',
    email: 'i3@i3.com',
    password: '1234',
    country: 'Canada',
    province: 'Ontario',
    city: 'Toronto',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'IkLimited',
    phoneNumber: '2222222222',
    license: 'license test',
    verified: true,
    price: 1400,
    description: 'I offer therapy sessions for web developers',
    rating: 4,
  },
  {
    roles: 'consultant',
    firstName: 'Raf3',
    lastName: 'Nobrega3',
    email: 'n3@n3.com',
    password: '1234',
    country: 'Canada',
    province: 'Columbia',
    city: 'Vancouver',
    postalCode: 'ABC123',
    profilePicture:
      'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
    nameOfBusiness: 'RafLimited',
    phoneNumber: '3333333333',
    license: 'license test',
    verified: true,
    price: 1300,
    description: 'I offer web development services',
    rating: 4,
  },
  {
    roles: 'client',
    firstName: 'John',
    lastName: 'Doe',
    email: 'j@j.com',
    password: '1234',
  },
  {
    roles: 'client',
    firstName: 'Lone',
    lastName: 'Doe',
    email: 'l@l.com',
    password: '1234',
  },
];

const category = [
  'Sales',
  'Therapists',
  'Lawyers',
  'Developers',
  'Mortgage',
  'Doctors',
];

const CategorySeedDB = (userData) => [
  {
    name: 'Sales',
    description: 'Sales description',
    pictureUrl: 'https://tinyurl.com/2s4jrbwh',
    user: [userData[0]._id],
  },
  {
    name: 'Therapists',
    description: 'Therapists description',
    pictureUrl: 'https://tinyurl.com/2s4jrbwh',
    user: [userData[1]._id],
  },
  {
    name: 'Lawyers',
    description: 'Lawyers description',
    pictureUrl: 'https://tinyurl.com/2s4jrbwh',
    user: [userData[2]._id],
  },
  {
    name: 'Developers',
    description: 'Developers description',
    pictureUrl: 'https://tinyurl.com/2s4jrbwh',
    user: [userData[3]._id],
  },
  {
    name: 'Mortgage',
    description: 'Mortgage description',
    pictureUrl: 'https://tinyurl.com/2s4jrbwh',
    user: [userData[4]._id],
  },
  {
    name: 'Doctors',
    description: 'Doctors description',
    pictureUrl: 'https://tinyurl.com/2s4jrbwh',
    user: [userData[5]._id],
  },
];
module.exports = {
  ConsultantSeedDB,
  CategorySeedDB,
};
/*
  name: { type: String },
  description: { type: String },
  pictureUrl: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],*/
