💎 AnaBijus - E-commerce de Joias e Acessórios
Este projeto é um e-commerce completo e responsivo desenvolvido em React, focado na venda de acessórios e semijoias. O sistema foi construído para uma avaliação técnica, simulando uma jornada de compra real com autenticação, persistência de dados e gestão de estoque.

🚀 Tecnologias Utilizadas
React.js + Vite: Ambiente de alta performance para a construção da interface.
React Router Dom: Gestão de navegação e implementação de Rotas Protegidas.
LocalStorage API: Utilizada para gerenciar sessões de usuário, persistir o carrinho de compras e o histórico de pedidos.
FontAwesome: Ícones para uma interface intuitiva e polida.
CSS3 Moderno: Layouts baseados em Flexbox e Grid para garantir Responsividade total.

🛠️ Funcionalidades Implementadas
1. Gestão de Dados e Abstração
Mock API (JSON): Os produtos são consumidos de um arquivo Products.json estático, estruturado com campos obrigatórios: Identificador, Nome, Descrição, Preço, Categoria, URL da Imagem e Estoque.
Arquitetura Transparente: A lógica de fetch no App.jsx permite que a substituição por uma API real seja feita de forma imediata e transparente, atendendo ao requisito de Capacidade de Abstração.
2. Autenticação e UX Inteligente
Redirecionamento Condicional: Se um usuário deslogado tenta acessar a vitrine de produtos ou áreas restritas, ele é enviado ao Login. Após a autenticação, o sistema o devolve automaticamente para o seu interesse original (ex: Página de Produtos).
Gestão de Sessão: Dados do usuário (nome, e-mail) são persistidos no navegador, permitindo que o site "reconheça" o cliente mesmo após recarregar a página.
3. Experiência de Compra
Busca Global: Filtro dinâmico de produtos por nome ou categoria acessível em qualquer página.
Carrinho Persistente: Sidebar funcional onde o usuário pode adicionar, remover ou alterar quantidades, com cálculo de total em tempo real.
Histórico de Pedidos: Painel de perfil personalizado que exibe o histórico de compras concluídas.

📱 Responsividade
O design foi desenvolvido seguindo a filosofia Mobile-First, adaptando-se perfeitamente de desktops a dispositivos móveis, com menus retráteis e grids flexíveis.

📦 Como rodar o projeto localmente

1. clone este repositório:
git clone https://github.com/joao-tabosa/anabijus-ecommerce.git


2. Instale as dependências:
npm install


3. inicie o servidor de desenvolvimento:
npm run dev

Desenvolvido por: João Tabosa - Engenharia de Computação (UFC Sobral).