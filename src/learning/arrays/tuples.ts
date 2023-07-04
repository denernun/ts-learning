type User = {
  name: string;
  email: string;
};

const user: User = { name: 'John', email: 'john@email.com' };

type SendParams = [user: User, subject: string, content: string];

function sendEmail(...[user, subject, content]: SendParams): void {
  console.log(user.name, user.email, subject, content);
}

sendEmail(user, 'Hello', 'How are you?');
