import logo from './logo.svg';// Importa o logotipo da aplicação a partir do arquivo logo.svg na pasta atual
import './App.css';// Importa estilos CSS para o componente App

function App() { //Define um componente chamado APP
  return ( //Retorna o conteudo do componente
    <div className="App"> {/* Cria uma div com a classe APP*/}
      <header className="App-header">{/* Cria um cabeçalho com a classe "App-header" */}  
        <img src={logo} className="App-logo" alt="logo" />{/* Renderiza o logotipo usando a variável logo */}
        <p>{/* Cria um parágrafo */}
          Edit <code>src/App.js</code> and save to reload.{/* Conteúdo do parágrafo */}
        </p>
        <a // Cria um link
          className="App-link" // Define a classe do link como "App-link" 
          href="https://reactjs.org" // Define o URL para o link
          target="_blank" // Define que o link abre em uma nova aba
          rel="noopener noreferrer" // Define políticas de segurança para o link
        >
          Learn React {/* Texto do link */}
        </a>
      </header>
    </div>
  );
}

function Formulario() {
  return (
    <form className="formulario">
      <label htmlFor="texto">Texto:</label>
      <input type="text" id="texto" required />
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" required />
      <button type="submit">Enviar</button>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Formulario /> {/* Adiciona o formulário aqui */}
    </div>
  );
}

export default App; // Exporta o componente App como padrão
