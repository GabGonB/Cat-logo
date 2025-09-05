import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: ""
  });

  
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Camiseta",
          preco: "79.90",
          descricao: "Camiseta estilosa.",
          imagem: "data:image/jpeg;base64,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"
        },
        {
          id: 2,
          nome: "Caneca",
          preco: "39.90",
          descricao: "Perfeita para café.",
          imagem: "data:image/jpeg;base64,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"
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
    ...form,
    imagem: form.imagem || "https://via.placeholder.com/200"
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

          <label>Imagem (URL)</label>
          <input type="text" name="imagem" value={form.imagem} onChange={handleChange} placeholder="https://exemplo.com/produto.jpg" />

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
