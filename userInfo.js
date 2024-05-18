function createUserProfiles(originalNames, modifiedNames) {
  return originalNames.map((name, index) => {
      return {
          id: index + 1,
          originalName: name,
          modifiedName: modifiedNames[index]
      };
  });
}

// Example usage:
const originalNames = ["Paul", "Mark Atta", "Michael soli", "Reuben", "Armah"];
const modifiedNames = ["PAUL", "mark atta", "MICHAEL SOLI", "reuben", "ARMAH"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);

