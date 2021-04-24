import {Link} from 'react-router-dom'

const Instructions = () => {
    return (
        <div>
            <h3>Instructions:</h3>
            <h4><p>Run React dev server (http://localhost:3000)
                npm start
                <br/>
                Run the JSON server (http://localhost:5000)
                npm run server
                <br/>
                To build for production
                npm run build </p></h4>
        <Link to='/'>Go Back</Link>             
      </div>
    )
}

export default About
