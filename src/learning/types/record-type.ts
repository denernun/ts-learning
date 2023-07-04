//
//
//

namespace RecordType {
  // ***********************************************************************************************************************************************************

  interface Person {
    name: string;
    age: number;
  }

  const person: Record<number, Person> = {
    1: {
      name: 'John',
      age: 30,
    },
  };

  console.log(person);

  // ***********************************************************************************************************************************************************

  type Day = 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado' | 'Domingo';

  type RecordDay<T> = Record<Day, T>;

  const day: RecordDay<number> = {
    Segunda: 1,
    Terça: 2,
    Quarta: 3,
    Quinta: 4,
    Sexta: 5,
    Sábado: 6,
    Domingo: 7,
  };

  console.log(day.Domingo);

  // ***********************************************************************************************************************************************************

  interface Post {
    title: string;
    description: string;
  }

  type PostProps = 'sports' | 'news' | 'tech';
  type PostRecord = Record<PostProps, Post[]>;

  const post: PostRecord = {
    sports: [
      {
        title: 'Sports',
        description: 'Sports post',
      },
    ],
    news: [
      {
        title: 'News',
        description: 'News post',
      },
    ],
    tech: [
      {
        title: 'Tech',
        description: 'Tech post',
      },
    ],
  };

  console.log(post);

  // ***********************************************************************************************************************************************************
}
