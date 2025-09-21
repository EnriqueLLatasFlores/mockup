// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonRed: "#DC143C",
  pokemonBlue: "#1E90FF", 
  pokemonYellow: "#FFD700",
  pokemonGreen: "#32CD32",
  pokemonOrange: "#FF8C00",
  pokemonPurple: "#9C27B0",
  gymRock: "#8B4513",
  gymWater: "#4169E1", 
  gymElectric: "#FFD700",
  gymGrass: "#228B22"
};

export interface Algorithm {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  difficulty: string;
  color: string;
  pokemonType: string;
  level: string;
  explanation: string;
  codeTemplate: string;
}

export type Difficulty = 'principiante' | 'intermedio' | 'avanzado';

export const algorithmsData: Record<Difficulty, Algorithm[]> = {
  principiante: [
    {
      id: 1,
      title: "Bubble Sort",
      subtitle: "Gimnasio de Roca - Brock",
      description: "El algoritmo más básico, como las rocas sólidas de Brock",
      image: "https://images.unsplash.com/photo-1753737664835-d8f2b7317d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWJibGUlMjBzb3J0JTIwYWxnb3JpdGhtJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgwODk2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5-10 min",
      difficulty: "Fácil",
      color: pokemonPalette.gymRock,
      pokemonType: "Tipo Roca",
      level: "Nivel 1-5",
      explanation: "Bubble Sort compara elementos adyacentes y los intercambia si están en el orden incorrecto. Como burbujas que suben a la superficie, los elementos más grandes 'burbujean' hacia el final.",
      codeTemplate: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
    },
    {
      id: 2,
      title: "Selection Sort", 
      subtitle: "Gimnasio de Agua - Misty",
      description: "Fluye como el agua, seleccionando elemento por elemento",
      image: "https://images.unsplash.com/photo-1756756736901-a2bf24f2d2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWljayUyMHNvcnQlMjBhbGdvcml0aG0lMjBkYXRhJTIwc3RydWN0dXJlfGVufDF8fHx8MTc1ODA4OTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "8-12 min",
      difficulty: "Fácil",
      color: pokemonPalette.gymWater,
      pokemonType: "Tipo Agua", 
      level: "Nivel 3-7",
      explanation: "Selection Sort encuentra el elemento más pequeño en cada iteración y lo coloca en su posición correcta. Como seleccionar el Pokemon más fuerte para cada batalla.",
      codeTemplate: `function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}`
    },
    {
      id: 3,
      title: "Insertion Sort",
      subtitle: "Centro Pokemon - Joy",
      description: "Cuida cada Pokemon insertándolo en su lugar correcto",
      image: "https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJnZSUyMHNvcnQlMjBhbGdvcml0aG0lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTgwODk2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6-10 min",
      difficulty: "Fácil",
      color: pokemonPalette.pokemonGreen,
      pokemonType: "Tipo Normal",
      level: "Nivel 2-6",
      explanation: "Insertion Sort toma cada elemento y lo inserta en su posición correcta dentro de la porción ya ordenada. Como organizar cartas en tu mano una por una.",
      codeTemplate: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}`
    }
  ],
  intermedio: [
    {
      id: 4,
      title: "Quick Sort",
      subtitle: "Gimnasio Eléctrico - Lt. Surge", 
      description: "Rápido como un rayo, divide y conquista",
      image: "https://images.unsplash.com/photo-1756756736901-a2bf24f2d2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWljayUyMHNvcnQlMjBhbGdvcml0aG0lMjBkYXRhJTIwc3RydWN0dXJlfGVufDF8fHx8MTc1ODA4OTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "12-18 min",
      difficulty: "Intermedio", 
      color: pokemonPalette.gymElectric,
      pokemonType: "Tipo Eléctrico",
      level: "Nivel 10-15",
      explanation: "Quick Sort elige un pivote y divide el array en elementos menores y mayores que el pivote, luego ordena recursivamente cada parte.",
      codeTemplate: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`
    },
    {
      id: 5,
      title: "Merge Sort",
      subtitle: "Gimnasio Planta - Erika",
      description: "Crece dividiendo problemas y uniéndolos armoniosamente", 
      image: "https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJnZSUyMHNvcnQlMjBhbGdvcml0aG0lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTgwODk2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "15-25 min",
      difficulty: "Intermedio",
      color: pokemonPalette.gymGrass,
      pokemonType: "Tipo Planta",
      level: "Nivel 12-18",
      explanation: "Merge Sort divide el array en mitades hasta tener elementos individuales, luego los combina de manera ordenada. Divide y conquista de forma estable.",
      codeTemplate: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`
    }
  ],
  avanzado: [
    {
      id: 7,
      title: "Heap Sort",
      subtitle: "Liga Pokemon - Elite Four",
      description: "Técnica de élite usando estructuras de heap",
      image: "https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJnZSUyMHNvcnQlMjBhbGdvcml0aG0lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTgwODk2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "20-30 min",
      difficulty: "Avanzado",
      color: pokemonPalette.pokemonRed,
      pokemonType: "Tipo Fuego", 
      level: "Nivel 18-25",
      explanation: "Heap Sort construye un max-heap y extrae repetidamente el elemento máximo. Utiliza la estructura de datos heap para ordenar eficientemente.",
      codeTemplate: `function heapSort(arr) {
  buildMaxHeap(arr);
  
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  
  return arr;
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
}

function heapify(arr, rootIndex, size) {
  let largest = rootIndex;
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;
  
  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    heapify(arr, largest, size);
  }
}`
    }
  ]
};