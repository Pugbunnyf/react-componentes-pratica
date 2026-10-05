
function App() {
  return (
    <div className="container">
      <Titulo />

      <h2>Alunos</h2>

      <Aluno nome="Caetano" turma="DS" />
      <Aluno nome="Gustavo" turma="DS" />
      <Aluno nome="Assper" turma="DS" />

      <h2>Notas</h2>

      <Nota disciplina="React" nota={5.5} />
      <Nota disciplina="JavaScript" nota={7} />
      <Nota disciplina="HTML e CSS" nota={6.7} />

      <h2>Produtos</h2>

      <div className="produtos">
        <Produto
          nome="Mouse gaymer"
          descricao="Mouse com iluminação LGBT"
          preco={350}
          disponivel={true}
        />

        <Produto
          nome="Teclado gaymer"
          descricao="Teclado gaymer sem fio magnético"
          preco={670}
          disponivel={true}
        />

        <Produto
          nome="Monitor"
          descricao="Monitor 4K"
          preco={1000}
          disponivel={false}
        />

        <Produto
          nome="Headset"
          descricao="Headset para playar games"
          preco={200}
          disponivel={true}
        />
      </div>
    </div>
  );
}

export default App;