//initial fake data if none is already saved. times randomized within past 10 days

const initialItems = [
  {
    name: "John Doe",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Jane Smith",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Alice Johnson",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Bob Brown",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Charlie Davis",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Diana Wilson",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Ethan Moore",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
  {
    name: "Fiona Taylor",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
    ).toISOString(),
  },
];

export default initialItems;
