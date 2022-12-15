let tags = [
  'Transporte',
  'Imobiliário',
  'Suporte',
  'Tecnologia'
]

let descriptions = [
  "Transporte é o movimento de pessoas e mercadorias entre locais. O campo de transporte apresenta diversas características a nível de infraestrutura, veículos e operações comerciais. Por infraestrutura entende-se a rede viária, de transporte rodoviário, ferroviário, aéreo, fluvial, tubular, etc. que é usada, assim como os terminais como estradas, aeroportos, estações ferroviárias, portos, terminais de autocarro e todo o tipo de equipamento similar.",
  "O mercado imobiliário nada mais é do que o setor em que são negociados imóveis. Ou seja, há a compra, venda e aluguel de casas, apartamentos, lotes, espaços comerciais e mais. É uma oportunidade de você ter sua casa própria, por exemplo. Ou então, pode ser um investimento financeiro, pois o imóvel pode ser alugado ou vendido depois por um preço maior.",
  "Suporte técnico é um serviço que presta assistência intelectual (conhecimentos), tecnológica (manutenção: revisões, regulagens, calibrações, reparos/consertos, atualizações de software etc.) e material (peças de reposição) a um cliente ou grupo de clientes (uma ou mais pessoas, físicas e/ou jurídicas), com o fim de solucionar problemas técnicos, portanto relacionados a produtos tecnológicos tais como telefones celulares, televisões, aparelhos de som, computadores e software. De maneira geral, o foco do serviço é ajudar o cliente a resolver problemas específicos de um produto, ao invés de fornecer treinamento, personalização ou qualquer outro serviço de suporte.",
  "Tecnologia (do grego τέχνη — \"técnica, arte, ofício\" e -λογία[2] — \"estudo\") é o conjunto de técnicas, habilidades, métodos e processos usados na produção de bens ou serviços, ou na realização de objetivos, como em investigações científicas. Tecnologia pode ser o conhecimento de técnicas, processos e similares. Isso também pode ser embutido em máquinas para permitir a operação destas sem conhecimento detalhado do seu funcionamento. Sistemas (e.g. máquinas) que aplicam tecnologia ao pegar um input, mudando-o de acordo com o funcionamento do sistema e, então, produzindo um resultado são referidos como sistemas de tecnologia ou sistemas tecnológicos."
]

let startupList = Array(50).fill(0).map((_, i) => {
  let tagIndex = Math.floor(Math.random() * tags.length);
  return ({
    id: i + 1,
    img: null,
    name: `Startup Exemplo ${i + 1}`,
    email: 'startup@exemplo.com',
    tags: [tags[tagIndex]],
    description: descriptions[tagIndex]
  });
});

export {
  startupList,
  tags
};