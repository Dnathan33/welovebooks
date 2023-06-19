export interface BookState {
  id: string;
  title: string;
  author: string;
  image: string;
  avgRating: number;
  starred: boolean;
  genres: string[];
}

export const generateInitialBooksState = (): BookState[] => {
  return [
    {
      id: 'fa57bfee-7657-4738-ba0f-1a8bcb6aecb9',
      title: 'The Bell Jar',
      image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
      author: 'Sylvia Plath',
      starred: false,
      avgRating: 4.2,
      genres: ['fiction', 'classics', 'memoir'],
    },
    {
      id: 'cdd74834-6b57-4829-b832-6a6377780084',
      title: 'To Kill a Mockingbird',
      image: 'https://images.penguinrandomhouse.com/cover/9780446310789',
      author: 'Harper Lee',
      starred: false,
      avgRating: 4.5,
      genres: ['fiction', 'classics'],
    },
    {
      id: '9b621fb5-24f5-4ba4-b3cc-c623d7e8e8c6',
      title: 'The Great Gatsby',
      image: 'https://images.penguinrandomhouse.com/cover/9780141182636',
      author: 'F. Scott Fitzgerald',
      starred: false,
      avgRating: 4.0,
      genres: ['fiction', 'classics'],
    },
    {
      id: '5304ac4c-8152-4705-8216-7a21d7b189a4',
      title: '1984',
      image: 'https://images.penguinrandomhouse.com/cover/9780451524935',
      author: 'George Orwell',
      starred: false,
      avgRating: 4.3,
      genres: ['fiction', 'dystopian'],
    },
    {
      id: '49929dc4-c75b-4c19-bb10-ca2ed0303d60',
      title: 'Pride and Prejudice',
      image: 'https://images.penguinrandomhouse.com/cover/9780141439518',
      author: 'Jane Austen',
      starred: false,
      avgRating: 4.5,
      genres: ['fiction', 'classics', 'romance'],
    },
    {
      id: '217c6ce9-57aa-496b-bb92-96f46d09a52b',
      title: 'The Hitchhikers Guide to the Galaxy',
      image: 'https://images.penguinrandomhouse.com/cover/9780345391803',
      author: 'Douglas Adams',
      starred: false,
      avgRating: 4.2,
      genres: ['fiction', 'science fiction', 'humor'],
    },
    {
      id: 'ffd4fefb-65f3-4c54-8bf3-d64f5aa67266',
      title: 'The Catcher in the Rye',
      image: 'https://images.penguinrandomhouse.com/cover/9780316769488',
      author: 'J.D. Salinger',
      starred: false,
      avgRating: 3.9,
      genres: ['fiction', 'classics'],
    },
    {
      id: '1dd3c626-7c1e-47aa-a2e0-6892a5236f87',
      title: 'The Picture of Dorian Gray',
      image: 'https://images.penguinrandomhouse.com/cover/9780141442464',
      author: 'Oscar Wilde',
      starred: false,
      avgRating: 4.1,
      genres: ['fiction', 'classics', 'horror'],
    },
    {
      id: 'bb23471e-c389-4879-b68f-10f65646a7bd',
      title: 'One Hundred Years of Solitude',
      image: 'https://images.penguinrandomhouse.com/cover/9780060883287',
      author: 'Gabriel Garcia Marquez',
      starred: false,
      avgRating: 4.1,
      genres: ['fiction', 'magical realism'],
    },
    {
      id: '2a13c9ee-3e6f-4dee-b149-ea66765ded06',
      title: 'The Hobbit',
      image: 'https://images.penguinrandomhouse.com/cover/9780345339683',
      author: 'J.R.R. Tolkien',
      starred: false,
      avgRating: 4.7,
      genres: ['fiction', 'fantasy'],
    },
  ];
};
