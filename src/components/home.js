import { Col, Container, Image, Row } from "react-bootstrap";
import Pokemon from '../images/pokesite.jpg'
import FullStack from '../images/fullstacktete.jpg'
import Star from '../images/star.jpg'
import BlogApi from '../images/herokuapp.jpg'
import Run from '../images/run1.jpg'
const Home=()=>{
    return(<Container  style={{marginTop: '3.875rem'}}>
        
<Row>
    <Col className="col-sm-4">
        <h2>About Me</h2>
        <div className="fakeimg"><img style={{height: '18.75rem' }} className='img-fluid rounded-circle' alt='running' src={Run}/></div>
        <p>I am a detail-oriented Software Engineer who gains great satisfaction from building new applications, learning new technologies, along with resolving complex technical problems. An enduring learner, I value the opportunity to be part of a passionate team 
        of professionals dedicated to mentorship, growth, and achieving excellence.</p>
    </Col>
    <Col className="col-sm-8">
        <h1>Projects</h1>
        <h4>Full Stack App</h4>
        <div ><Image alt="Full Stack screenshot" fluid style={{height: '18.75rem' }} src= {FullStack}/></div>
        <p>Site: <a href="https://pensive-torvalds-e27272.netlify.app/"> Tete-a-Tete</a></p>
        <p>A blog API that allows user to register with Authorization Schema. User receives a Token at the header, with the token the user can access Public blogs and create a blog with a username at the endpoint. User can also find blog and can adjust/delete blog with id.
The API protects API with a hashed password. Usernames/Emails must also be unique during the registration process.</p>
        <br/>
        <h4>Star Wars Ships Site</h4>
        <div className="fakeimg"><Image  style={{height: '18.75rem' }} alt='Star Wars screenshot' src={Star}/></div>
        <p>Site: <a href="https://curious-palmier-2d9226.netlify.app/"> Star Wars Ships</a></p>
        <p>descriptions:</p>
        <br/>
        <h4>Pokemon Favorites/Battle</h4>
        <div ><Image style={{height: '18.75rem' }} alt='Pokemon site screenshot' src={Pokemon}/></div>
        <p>Site: <a href="https://cocky-cori-107aac.netlify.app/"> Pokemon Favorites/Battle </a></p>
        <p>descriptions:</p>
        <br/>    <h4>Blog API</h4>
        <div className="fakeimg"><Image style={{height: '18.75rem' }} alt='Blog API screenshot' src={BlogApi}/></div>
        <p>Site:<a href="https://roys-blog-app.herokuapp.com/"> Blog API</a></p>
        <p>descriptions:</p>
        <br/>
    </Col>
    
</Row>

</Container>
    )
}
export default Home;