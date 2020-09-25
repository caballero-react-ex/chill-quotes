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
    query: "amazing"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "attitude"
  },
  {
    id:uuidv4(),
    type: "topic",
    query: "beauty"
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
    query: "friend"
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
];

export default shuffleArray(queryData); 