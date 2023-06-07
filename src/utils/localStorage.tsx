const getJson = (term: string): [] => {
  const localStorageSavedSearch = localStorage.getItem(term);
  return localStorageSavedSearch ? JSON.parse(localStorageSavedSearch) : [];
};

export default getJson;

// export const setJson = (term: string, data: Person): void => {
//   localStorage.setItem(term, JSON.stringify(data));
// };
