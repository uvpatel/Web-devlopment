import Button from '../components/Button'
import './home.css'

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Career Conqure</h1>
      <p>Empowering your career journey with insights, projects, and advice.</p>
      <Button variant="primary" onClick={() => alert('Explore now!')}>
        Explore
      </Button>
    </div>
  )
}

export default Home