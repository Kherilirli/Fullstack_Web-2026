import './App.css'

// Membuat component Header
// Component Header menampilkan navbar
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

/**
 * Membuat component Content
 * Component Content menampung konten utama
 */
function Content() {
  return (
    <h1>This is the Content</h1>
  )
}

/**
 * Membuat component Footer
 * Component Footer menampilkan footer
 */
function Footer() {
  return (
    <footer>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </footer>
  )
}

function Hello() {
  const nama = "Kheril Irli Januar";

  return (
    <>
      <h2>Hello React</h2>
      <p>Saya {nama} - Seorang Frontend Developer</p>
    </>
  )
}

// Props
function Greeting(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

function Profile(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
      <Content />
      <Hello />
      <Greeting name="Kheril Irli Januar" />
      <Profile name="Bujang 6" age={20} country="Indonesia" />
      <Footer />
    </>
  );
}

export default App
