import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useProfilesContext } from '../../../contexts/profilesContext';
import Input from '../../1atoms/Input/Input';
import Button from '../../1atoms/Button/Button';

interface SearchpropsType {
  inputLocationValue: string,
  setInputLocationValue: (value: string) => void,
  inputSearchValue: string,
  setInputSearchValue: (value: string) => void
  disabledButton: boolean,
  setDisabledButton: Dispatch<SetStateAction<boolean>>,
  savedPersons: Person[],
}

export default function SearchBar(
  { inputLocationValue,
    setInputLocationValue,
    inputSearchValue,
    setInputSearchValue,
    setDisabledButton,
    disabledButton,
    savedPersons,

  }: SearchpropsType,
): JSX.Element {
  const { loadData } = useProfilesContext();
  const profilesToExclude = savedPersons.map((profile: Person) => profile.login);

  useEffect(() => {
    if ((inputLocationValue === '' && inputSearchValue === '')) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  });

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    if (disabledButton) {
      return;
    }
    loadData({
      variables: {
        location: inputLocationValue,
        searchTerms: inputSearchValue,
        usersToExclude: profilesToExclude,
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

      <Button disabled={disabledButton} type="submit" className="p-2">
        <RxMagnifyingGlass className={disabledButton ? 'hover:cursor-default text-neutral-200' : 'hover:text-neutral-950'} size={24} />
      </Button>
    </form>
  );
}
