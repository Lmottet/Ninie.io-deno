export const addLove = (userId: string, loveLevel: number) => {
  console.log("Add " + loveLevel + " love to " + userId);
  window.Repository.setLove(userId, calculateLove(userId, loveLevel));
};

export const removeLove = (userId: string, loveLevel: number) => {
  console.log("Remove " + loveLevel + " love from " + userId);
  window.Repository.removeLove(userId, calculateHate(userId, loveLevel));
};

export const getLove = (userId: string) => window.Repository.getLove(userId);

const calculateLove = (userId: string, newLove: number) => {
  let currentLove = window.Repository.getLove(userId);
  let result = currentLove ? currentLove + newLove : newLove;
  console.log("Calculated total love : " + result + " for : " + userId);

  return result;
};

const calculateHate = (userId: string, hate: number) => {
  let currentLove = window.Repository.getLove(userId);
  let result = currentLove ? currentLove - hate : 0 - hate;
  console.log("Calculated total love : " + result + " for : " + userId);

  return result;
};
