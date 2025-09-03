export default function ProdutoCard({ nome, preco, descricao, imagem, onDelete }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p className="preco">R$ {preco}</p>
      <p className="descricao">{descricao}</p>
      <button className="delete-btn" onClick={onDelete}>Excluir</button>
    </div>
  );
}
