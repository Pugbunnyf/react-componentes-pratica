
function App() {
  return (
    <div className="container">
      <Titulo />

      <h2>Alunos</h2>

      <Aluno nome="Carlos" turma="DS" />
      <Aluno nome="Ana" turma="DS" />
      <Aluno nome="Pedro" turma="DS" />

      <h2>Notas</h2>

      <Nota disciplina="React" nota={8.5} />
      <Nota disciplina="JavaScript" nota={9} />
      <Nota disciplina="HTML e CSS" nota={10} />

      <h2>Produtos</h2>

      <div className="produtos">
        <Produto
          nome="Teclado Mecânico"
          descricao="Teclado com iluminação RGB"
          preco={250}
          disponivel={true}
        />

        <Produto
          nome="Mouse"
          descricao="Mouse sem fio"
          preco={120}
          disponivel={true}
        />

        <Produto
          nome="Monitor"
          descricao="Monitor Full HD"
          preco={800}
          disponivel={false}
        />

        <Produto
          nome="Headset"
          descricao="Headset para jogos"
          preco={180}
          disponivel={true}
        />
      </div>
    </div>
  );
}

export default App;