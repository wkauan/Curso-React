import './App.css'

import City from './assets/city.jpg'

export default function App() {
  return (
    <div>
      <h1>Seção 3</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  )
}
