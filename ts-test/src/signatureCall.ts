interface EmailConvertor {
  (userName: string): string;
  defaultDomain: string;
}

const users = ["Gili", "Yuval", "Lior"];

function RunningSomeCode(fnCallback: EmailConvertor) {
  console.log(
    `domain is: ${fnCallback.defaultDomain} => ${fnCallback("Dudu")}`
  );
}

function extractEmail(userName: string): string {
  return userName + extractEmail.defaultDomain;
}

extractEmail.defaultDomain = "@gmail.com";

RunningSomeCode(extractEmail);
extractEmail.defaultDomain = "@hotmail.com";
RunningSomeCode(extractEmail);
console.log(users.map(extractEmail));
export default 1;
