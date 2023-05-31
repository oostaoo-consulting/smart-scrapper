import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useProfilesContext } from '../../../contexts/profilesContext';
import Input from '../../1atoms/Input/Input';
import Button from '../../1atoms/Button/Button';

interface SearchpropsType {
  inputLocationValue: string,
  setInputLocationValue: (value: string) => void,
  inputSearchValue: string,
  setInputSearchValue: (value: string) => void
}

export default function SearchBar(
  { inputLocationValue,
    setInputLocationValue,
    inputSearchValue,
    setInputSearchValue }: SearchpropsType,
): JSX.Element {
  const { loadData } = useProfilesContext();

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
    <form
      name="Recherche"
      className="flex w-full gap-1"
      onSubmit={formSubmitHandler}
    >
      <Input
        name="inputLocation"
        title="Filtrer les résultats de recherche par ville"
        value={inputLocationValue}
        onChange={(event): void => setInputLocationValue(event.target.value)}
        placeholder="Filtre par ville"
      />
      <Input
        name="inputSearch"
        title="Filtrer les résultats de recherche par technologies"
        value={inputSearchValue}
        onChange={(event): void => setInputSearchValue(event.target.value)}
        placeholder="Filtre par technologies"
      />

      <Button disabled={false} type="submit" className="p-2">
        <RxMagnifyingGlass className="hover:text-neutral-950" size={24} />
      </Button>
    </form>
  );
}
