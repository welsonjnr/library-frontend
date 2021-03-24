import HireBooks from "./views/widgets/HireBooks";
import Clientes from "./views/widgets/Clientes";
import Livro from "./views/widgets/Livro";
import Emprestimo from "./views/widgets/Emprestimo";
import Usuario from './views/usuario/Usuario';
import Sobre from './views/sobre/Sobre'

const routes = [
  { path: '/', exact: true, name: 'Home', component: HireBooks },
  { path: '/dashboard', name: 'Dashboard', component: HireBooks },
  { path: '/clientes', name: 'Clientes', component: Clientes },
  { path: '/livros', name: 'Livros', component: Livro },
  { path: '/emprestimos', name: 'Emprestimos', component: Emprestimo },
  { path: '/minha-conta', name: 'Minha Conta', component: Usuario },
  { path: '/sobre', name: 'Sobre', component: Sobre },
];

export default routes;
