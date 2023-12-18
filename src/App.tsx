import './App.css'
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/index'
import Testimonial from './components/Testimonial/index'
import NazarPhoto from './components/Testimonial/img/nazar.jpg'
import MarinaPhoto from './components/Testimonial/img/marina.jpg'

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

      <li className='components_item'>
        <strong className='components_name'>Badge component</strong>
        <div className='components_custom-component'>
          <Badge color='pink' variant='square'>Nazar</Badge>
          <Badge color='indigo' variant='pill'>Marina</Badge>
          <Badge variant='square'>Max</Badge>
          <Badge color='purple' variant='pill'>Andy</Badge>
          <Badge color='red'>Pam</Badge>
          <Badge color='green' variant='pill'>Jim</Badge>
          <Badge color='yellow'>Stanley</Badge>
        </div>
      </li>

      <li className='components_item'>
        <strong className='components_name'>Banner component</strong>
        <div className='components_custom-component'>
          <Banner variant='success'>
            <Banner.Title>
            Congratulations!
            </Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner>

          <Banner variant='neutral'>
            <Banner.Title>
            Congratulations!
            </Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner>

          <Banner variant='error'>
            <Banner.Title>
            Congratulations!
            </Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner>

          <Banner variant='warning'>
            <Banner.Title>
            Congratulations!
            </Banner.Title>
            <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner.Text>
          </Banner>
        </div>
      </li>

      <li className='components_item'>
        <strong className='components_name'>Testimonial component</strong>
        <div className='components_custom-component'>
          <Testimonial imgSrc={NazarPhoto}>
            <Testimonial.Feedback>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </Testimonial.Feedback>
            <Testimonial.Name>Nazar Palamarchuk</Testimonial.Name>
            <Testimonial.Location>Kyiv, Ukraine</Testimonial.Location>
          </Testimonial>

          <Testimonial imgSrc={MarinaPhoto}>
            <Testimonial.Feedback>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </Testimonial.Feedback>
            <Testimonial.Name>Marina Savhuk</Testimonial.Name>
            <Testimonial.Location>Poninka, Ukraine</Testimonial.Location>
          </Testimonial>

        </div>
      </li>

    </ul>
  )
}

export default App
