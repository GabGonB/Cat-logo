import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "https://via.placeholder.com/200"
  });

  
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Camiseta",
          preco: "79.90",
          descricao: "Camiseta estilosa.",
          imagem: "https://via.placeholder.com/200"
        },
        {
          id: 2,
          nome: "Caneca",
          preco: "39.90",
          descricao: "Perfeita para café.",
          imagem: "https://via.placeholder.com/200"
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.preco || !form.descricao) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
    const novoProduto = {
      id: Date.now(),
      ...form
    };
    setProdutos([...produtos, novoProduto]);
    setForm({ nome: "", preco: "", descricao: "", imagem: "https://via.placeholder.com/200" });
  };




  const handleDelete = (id) => {
    const novosProdutos = produtos.filter((p) => p.id !== id);
    setProdutos(novosProdutos);
  };

  return (
    <div className="catalogo">

      <form onSubmit={handleSubmit} className="formulario">
        <h2>Adicionar Produto</h2>

        <label>Nome*</label>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} />

        <label>Preço*</label>
        <input type="number" name="preco" value={form.preco} onChange={handleChange} />

        <label>Descrição*</label>
        <textarea name="descricao" value={form.descricao} onChange={handleChange} />

        <button type="submit">Adicionar</button>
      </form>


      {loading ? (
        <p className="loading">Carregando...</p>
      ) : (
        <div className="lista-produtos">
          {produtos.map((p) => (
            <ProdutoCard key={p.id} {...p} onDelete={() => handleDelete(p.id)} />
          ))}
        </div>
      )}
    </div>
  );
}
