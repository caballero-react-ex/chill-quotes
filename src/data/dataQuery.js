import { shuffleArray } from '../components/utils/Utils';

const queryData = [
  {
    type: "topic",
    query: "age"
  },
  {
    type: "topic",
    query: "peace"
  },
  {
    type: "topic",
    query: "failure"
  },
  {
    type: "topic",
    query: "alone"
  },
  {
    type: "topic",
    query: "amazing"
  },
  {
    type: "topic",
    query: "attitude"
  },
  {
    type: "topic",
    query: "beauty"
  },
  {
    type: "topic",
    query: "travel"
  },
  {
    type: "author",
    query: "Ralph Waldo Emerson"
  },
  {
    type: "topic",
    query: "art"
  },
  {
    type: "topic",
    query: "happiness"
  },
  {
    type: "topic",
    query: "anger"
  },
  {
    type: "author",
    query: "Bruce Lee"
  },
  {
    type: "topic",
    query: "love"
  },
  {
    type: "topic",
    query: "friend"
  },
  {
    type: "author",
    query: "Confucius"
  },
  {
    type: "topic",
    query: "friendship"
  },
  {
    type: "author",
    query: "Seneca"
  },
  {
    type: "author",
    query: "Aristotle"
  },
  {
    type: "author",
    query: "Henry David Thoreau"
  },
  {
    type: "author",
    query: "Socrates"
  },
  {
    type: "author",
    query: "Mencius"
  },
  {
    type: "author",
    query: "Martin Luther King"
  },
  {
    type: "author",
    query: "Gandhi"
  },
  {
    type: "author",
    query: "Lao Tzu"
  },
  {
    type: "author",
    query: "Epicurus"
  },
  {
    type: "author",
    query: "Benjamin Franklin"
  },
];

export default shuffleArray(queryData); 