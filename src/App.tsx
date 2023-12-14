import './App.css'
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from './components/Button/Button'

function App() {

  return (
    <ul className='components'>
      <li className='components_item'>
        <strong className='components_name'>Menu component</strong>
        <div className='components_custom-component'>
          <Menu onOpen={() => console.log("Opened/closed")}>
            <Menu.Button>Menu</Menu.Button>
            <Menu.Dropdown>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Menu.Item>Blog</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </li>
      <li className='components_item'>
        <strong className='components_name'>Star component</strong>
        <div className='components_custom-component'>
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </li>
      <li className='components_item'>
        <strong className='components_name'>Button component</strong>
        <div className='components_custom-component'>
          <Button>Click me</Button>
        </div>
      </li>
    </ul>
  )
}

export default App
