import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 12,
        name: 'Dr. Element',
        description:
          'Elemental manipulation: The hero has the ability to control and manipulate the elements, such as fire, water, earth, and air.',
        image: 'https://i.postimg.cc/mDTz7Bnp/2-2-anime-png-pic.png',
      },
      {
        id: 13,
        name: 'Bombasto',
        description:
          'Telekinesis: The hero can move objects with their mind, allowing them to lift heavy objects or even people',
        image: 'https://i.postimg.cc/3wZMGqn8/11-2-anime-png-picture.png',
      },
      {
        id: 14,
        name: 'Celeritas',
        description:
          'Invisibility: The hero can become invisible, making them nearly impossible to detect.',
        image: 'https://i.postimg.cc/Dzhk8hQp/26325-5-hellsing-clipart.png',
      },
      {
        id: 15,
        name: 'Magnet',
        description:
          'Mind control: The hero can control the thoughts and actions of others, making them a powerful force in any conflict.',
        image: 'https://i.postimg.cc/ZRYGxLMr/3-2-anime-free-download-png.png',
      },
      {
        id: 16,
        name: 'RubberMan',
        description:
          'Super strength: The hero has immense physical strength, allowing them to lift or move incredibly heavy objects.',
        image:
          'https://i.postimg.cc/wTRS2M0b/26543-2-uchiha-sasuke-transparent-image.png',
      },
      {
        id: 17,
        name: 'Dynama',
        description:
          'Flight: The hero can fly through the air, either through the use of wings or by levitating.',
        image:
          'https://i.postimg.cc/pXgtMzmH/26508-8-fate-stay-free-download.png',
      },
      {
        id: 18,
        name: 'Dr. Time',
        description:
          'Time manipulation: The hero can manipulate time, either by slowing it down, speeding it up, or traveling through it.',
        image: 'https://i.postimg.cc/ydfwQSM2/7-2-anime-png.png',
      },
      {
        id: 19,
        name: 'Magma',
        description:
          'Energy projection: The hero can project energy from their body, such as lasers or blasts of fire.',
        image:
          'https://i.postimg.cc/d3LgzVv3/8-2-anime-free-png-image-600x600.png',
      },
      {
        id: 20,
        name: 'Tornado',
        description:
          'Shapeshifting: The hero can transform their body into different forms or shapes, allowing them to adapt to different situations.',
        image: 'https://i.postimg.cc/x1DMJpXF/26344-4-hellsing-transparent.png',
      },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
