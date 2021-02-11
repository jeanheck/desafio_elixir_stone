import faker from 'faker';

class Email {
  constructor(text) {
    this.text = text;
  }
}

export function EmailFactory() {};
EmailFactory.prototype.new = () => {
  return new Email(
    faker.internet.email()
  )
};