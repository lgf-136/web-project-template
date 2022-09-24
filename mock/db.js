/* eslint-disable @typescript-eslint/no-var-requires */
const { faker } = require('@faker-js/faker');
const Mock = require('mockjs');
const { Random } = Mock;

function generateUsers() {
  const users = [];

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.firstName();
    const phoneNumber = faker.phone.number();

    users.push({
      id,
      firstName,
      lastName,
      phone: phoneNumber,
    });
  }

  return users;
}

function generateNews() {
  const news = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const images = [ 1, 2, 3 ].map(x =>
    Random.image('120x60', Random.color(), Random.word(2, 6)));

  for (let i = 1; i <= 100; i++) {
    const content = Random.cparagraph(0, 10);

    news.push({
      id: i,
      title: Random.cword(8, 20),
      desc: content.substr(0, 40),
      tag: Random.cword(2, 6),
      views: Random.integer(100, 5000),
      images: images.slice(0, Random.integer(1, 3)),
    });
  }
  return news;
}

module.exports = () => ({
  users: generateUsers(),
  news: generateNews(),
});
