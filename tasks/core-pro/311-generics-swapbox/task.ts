function swapNumbers(a: number, b: number): [number, number] {
  return [b, a];
}

function swapStrings(a: string, b: string): [string, string] {
  return [b, a];
}

export function swapBox<T,K>(a : T, b : K) {
  return [b, a] as [K, T];
}

const [n1, n2] = swapNumbers(10, 20);
const [s1, s2] = swapStrings('hello', 'world');
const [x, y] = swapBox(false, true);
const [a, b] = swapBox(123, 'abc');


type Binding<K, V> = {
  key: K;
  value: V;
};

const stringToNumber: Binding<string, number> = {
  key: 'age',
  value: 30,
};

const objectToArray: Binding<object, object[]> = {
  key: { name: 'Alice' },
  value: [{ name: 'Bob' }, { name: 'Charlie' }],
};

type Tree<T1, T2, T3> = {
  a: T1;
  b: T2;
  c: T3;
};

const three: Tree<string, object, number> = {
  a: 'Hello',
  b: { name: 'Alice' },
  c: 42,
};

function getIndentation<T>(messsage: T) {
  console.log(typeof messsage);
}

getIndentation(12321);

const arrowFn = <T>(message: T) => {
  console.log(`type of `, typeof message);
};

arrowFn(123);

function genericTransform<T, K>(fn: (input: T) => K) {
  return (value: T) => fn(value);
}

const funkcjaGeneryczna = <T, K>(array: T[], fun: (value: T) => K) => {
  return array.map(fun);
};

const mergeObjects = <T, K>(obj1: T, obj2: K): T & K => {
  return { ...obj1, ...obj2 };
};

mergeObjects({ fisrtName: 'Kasia' }, { lastName: 'Nowak' });

class PersistedCollection<T> {
  private items: T[] = [];

  async add(item: T): Promise<void> {
    this.items.push(item);
  }
  async getAll(): Promise<T[]> {
    return this.items;
  }

  async addItmes(items: T[]): Promise<void> {
    this.items.concat(items);
  }

  async getAllById(id: string): Promise<T[]> {
    return this.items.filter((x) => x);
  }

  async showItems(): Promise<void> {
    this.items.forEach((item) => {
      console.log(item);
    });
  }
}

const hejka = new PersistedCollection<string>();
hejka.addItmes(['raz', 'dwa']);
hejka.getAll();

interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

type User = {
  fistName: string;
  lastName: string;
};

const fetchUser = async (id: string): Promise<ApiResponse<User>> => {
  return {
    data :{
      fistName:'Kasia',
      lastName:'Nowak'
    },
    status : 200, 
    error : 'Success'
  }
};

fetchUser('2')
