const countWords = (text) => text.split(" ").filter((word) => word).length;
const expectedLength = 2;

module.exports = (fullName) => {
  if (
    fullName === "" ||
    typeof fullName !== "string" ||
    countWords(fullName) !== expectedLength
  )
    return "Error";

  const [firstName, lastName] = fullName.split(" ");
  if (!firstName || !lastName) return false;
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    " " +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
