import React from 'react';
import './PetSite.scss';

interface Pet {
  id: number;
  name: string;
  photo: string;
  age: number;
  description: string;
}

const PetSite: React.FC = () => {
  const pets: Pet[] = [
    {
      id: 1,
      name: 'Бобик',
      photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop',
      age: 3,
      description: 'Дружелюбный пес, любит детей и активные игры. Идеально подходит для семьи.'
    },
    {
      id: 2,
      name: 'Мурка',
      photo: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop',
      age: 2,
      description: 'Спокойная кошечка, любит ласку и тишину. Отлично подходит для спокойных людей.'
    },
    {
      id: 3,
      name: 'Рекс',
      photo: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=300&h=200&fit=crop',
      age: 4,
      description: 'Энергичный пес, нуждается в активных прогулках и тренировках.'
    },
    {
      id: 4,
      name: 'Васька',
      photo: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=300&h=200&fit=crop',
      age: 1,
      description: 'Молодой котенок, очень игривый и любознательный. Любит исследовать новые места.'
    }
  ];

  return (
    <section className="pet-site">
      <div className="pets-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <div className="pet-photo">
              <img src={pet.photo} alt={pet.name} />
            </div>
            <div className="pet-info">
              <h3 className="pet-name">{pet.name}</h3>
              <p className="pet-age">Возраст: {pet.age} {pet.age === 1 ? 'год' : pet.age < 5 ? 'года' : 'лет'}</p>
              <p className="pet-description">{pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetSite;
