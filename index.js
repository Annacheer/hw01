const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// async function main() {
//   try {
//     console.log("Список контактів:");
//     console.log(await listContacts());

//     console.log("Отримати контакт по id:");
//     console.log(await getContactById(1));

//     console.log("add");
//     const newContact = await addContact(
//       "Mango",
//       "mango@gmail.com",
//       "322-22-22"
//     );
//     console.log(newContact);

//     console.log("Список контактів після додавання:");
//     console.log(await listContacts());

//     console.log("Видалити контакт:");
//     const removedContact = await removeContact(newContact.id);
//     console.log(removedContact);

//     console.log("Список контактів після видалення:");
//     console.log(await listContacts());
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      break;

    case "remove":
      console.log(await removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
