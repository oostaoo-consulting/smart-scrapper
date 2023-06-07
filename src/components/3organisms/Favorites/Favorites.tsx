import React from 'react';
import Card from '../../2molecules/Card/Card';
import jsonMock from '../../2molecules/CardDetails/mock.json';

export default function Favorites(): JSX.Element {
  return (
    <>
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
      <Card profil={jsonMock} handleOpeningCard={(): void => { }} isFavorite />
    </>
  );
}
