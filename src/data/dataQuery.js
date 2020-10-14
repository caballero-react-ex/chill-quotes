import { shuffleArray } from '../components/utils/Utils';
import { v4 as uuidv4 } from 'uuid';

const queryData = [
  {
    id:uuidv4(),
    type: "topic",
    query: "age"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "peace"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "failure"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "alone"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "forgiveness"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "attitude"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "travel"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Ralph Waldo Emerson"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "art"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "happiness"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "anger"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Bruce Lee"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "love"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "education"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "trust"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Confucius"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "friendship"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Seneca"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Aristotle"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Henry David Thoreau"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Socrates"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Mencius"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Martin Luther King"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Gandhi"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Lao Tzu"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Epicurus"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Benjamin Franklin"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Maya Angelou"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Dalai Lama"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Buddha"
  },
  {
    id:uuidv4(),
    type: "author",
    query: "Marcus Aurelius"
  },
];

export default shuffleArray(queryData); 