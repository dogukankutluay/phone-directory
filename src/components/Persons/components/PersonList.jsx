import React from 'react';
import style from '../persons.module.scss';
import PersonCard from './PersonCard';
function PersonList() {
  const data = [
    {
      id: '1',
      name: 'ahmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '2',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '3',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
    {
      id: '4',
      name: 'mehmet',
      email: 'dogukan@gmail.çcom',
      phone: '054138660292',
    },
  ];
  return (
    <div className={style.personList}>
      {data.map(person => {
        return <PersonCard key={person.id} name={person.name} />;
      })}
    </div>
  );
}

export default PersonList;
