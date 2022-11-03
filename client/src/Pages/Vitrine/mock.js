let tags = [
  "Papercut",
  "One Step Closer",
  "Witch You",
  "Points of Authority",
  "Crawling",
  "Runaway",
  "By Myself",
  "In The end",
  "A Place For My Head",
  "Forgotten",
  "Cure For The Itch",
  "Pushing Me Away"
]

let startupList = Array(50).fill(0).map((_, i) => ({
  id: i + 1,
  img: null,
  name: `Startup Exemplo ${i + 1}`,
  email: "startup@exemplo.com",
  tags: tags[Math.floor(Math.random() * tags.length)]
}));

export default startupList;