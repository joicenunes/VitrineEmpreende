let tags = [
  'Papercut',
  'One Step Closer',
  'Witch You',
  'Points of Authority',
  'Crawling',
  'Runaway',
  'By Myself',
  'In The end',
  'A Place For My Head',
  'Forgotten',
  'Cure For The Itch',
  'Pushing Me Away'
]

let startupList = Array(50).fill(0).map((_, i) => ({
  id: i + 1,
  img: null,
  name: `Startup Exemplo ${i + 1}`,
  email: 'startup@exemplo.com',
  tags: tags[Math.floor(Math.random() * tags.length)].split(' '),
  description: 'Maecenas tincidunt, lacus eget faucibus bibendum, erat purus sodales purus, quis interdum turpis turpis vitae augue. Sed fermentum libero in est blandit congue. Donec nec lectus vitae metus euismod tempor. Curabitur maximus mollis sapien. Donec ut arcu tempus, pulvinar magna at, tincidunt magna. Fusce ut porttitor erat. Nunc malesuada nisi ac risus tristique condimentum.'
}));

export default startupList;