import React from 'react';
import HireBooks from "./views/widgets/HireBooks";
import Clientes from "./views/widgets/Clientes";
import Livro from "./views/widgets/Livro";
import Emprestimo from "./views/widgets/Emprestimo";
import { default as FormEmprestimo } from "./views/emprestimo/Emprestimo"
import FormLivro from "./views/livro/FormLivro";
import FormCliente from "./views/cliente/FormCliente";
import Usuario from './views/usuario/Usuario';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: HireBooks },
  { path: '/clientes', name: 'Clientes', component: Clientes },
  { path: '/livros', name: 'Livros', component: Livro },
  { path: '/emprestimos', name: 'Emprestimos', component: Emprestimo },
  { path: '/cadastro-livro', name: 'Novo Livro', component: FormLivro },
  { path: '/cadastro-cliente', name: 'Novo Cliente', component: FormCliente },
  { path: '/cadastro-emprestimo', name: 'Emprestimos', component: FormEmprestimo },
  { path: '/minha-conta', name: 'Minha Conta', component: Usuario },
];

export default routes;
