import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useProfilesContext } from '../../../contexts/profilesContext';
import Input from '../../1atoms/Input/Input';
import Button from '../../1atoms/Button/Button';

export default function SearchBar() {
  const { loadData } = useProfilesContext();
  const [inputLocationValue, setInputLocationValue] = React.useState<string>('Paris');
  const [inputSearchValue, setInputSearchValue] = React.useState<string>('');

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    loadData({
      variables: {
        location: inputLocationValue,
        searchTerms: inputSearchValue,
      },
    });
  };

  return (
    <form className="w-full flex" onSubmit={formSubmitHandler}>
      <Input
        name="inputLocation"
        title="Filtrer les résultats de recherche par ville"
        value={inputLocationValue}
        onChange={(event) => setInputLocationValue(event.target.value)}
        placeholder="Filtre par ville"
      />
      <Input
        name="inputSearch"
        title="Filtrer les résultats de recherche par technologies"
        value={inputSearchValue}
        onChange={(event) => setInputSearchValue(event.target.value)}
        placeholder="Filtre par technologies"
      />

      <Button type="submit" className="p-2">
        <RxMagnifyingGlass />
      </Button>
    </form>
  );
}
