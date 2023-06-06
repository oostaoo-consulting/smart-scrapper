const getJson = (term: string): [] => {
  const localStorageSavedSearch = localStorage.getItem(term);
  return localStorageSavedSearch ? JSON.parse(localStorageSavedSearch) : [];
};

export default getJson;

// export const setJson = (term: string) => {
//   const localStorageSavedSearch = localStorage.setItem(term);
//   return
// };
