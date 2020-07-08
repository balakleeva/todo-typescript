import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
    const history = useHistory()

    return (
        <>
            <h1>About page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident, quis temporibus accusantium eius aperiam ratione voluptatum deleniti quia nihil modi sunt, explicabo molestiae ex. Dolore inventore non illo ipsam?
            </p>
            <button className="btn" onClick={() => history.push('/')}>
                Back to Todo List
            </button>
        </>
    )
}

export default AboutPage