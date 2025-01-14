import expenseTrackerImg from "../Assets/ImgProject/expense-tracker.jpg";
import gitHubFinderImg from '../Assets/ImgProject/github_finder.jpg'
import houseMarketplaceImg from '../Assets/ImgProject/house_marketplace.jpg'
import todoListImg from '../Assets/ImgProject/todo_list.jpg'
import feedbackImg from '../Assets/ImgProject/feedback_app.jpg'


const projects = [

    {
        "id": 1, 
        "title": "Aout 2024 - Feedback app",
        "picture": feedbackImg,
        "link": "none",
        "github": "https://github.com/Rqmba/feedback-app", 
        "description": "Pour mon commencer mon apprentissage sur React, j'ai crée une petite appli de feedback de commentaires.",
        "skill" : "React.Js, Css"
    },

    {
        "id": 2, 
        "title": "Aout 2024 - Suivi de dépenses, ReactJs",
        "picture": expenseTrackerImg,
        "link": "none",
        "github": "https://github.com/Rqmba/expense-tracker-react", 
        "description": "Ensuite, j'ai crée une appli de suivi de dépenses.",
        "skill" : "React.Js, Css, Node.js"
    },
    {
        "id": 3, 
        "title": "Septembre 2024 - Github finder",
        "picture": gitHubFinderImg,
        "link": "none",
        "github": "https://github.com/Rqmba/github-finder", 
        "description": "J'ai ensuite crée une appli de recherche de profils de Github",
        "skill" : "React.Js, Css"
    },
    {
        "id": 4, 
        "title": "Novembre 2024 - House Marketplace",
        "picture": houseMarketplaceImg,
        "link": "none",
        "github": "https://github.com/Rqmba/house-marketplace", 
        "description": "Création d'un site web de ventes de maisons. Interface, utilisateur, etc...",
        "skill" : "React.Js, Css, Firebase"
    },
    {
        "id": 5, 
        "title": "Decembre 2024 - To do list",
        "picture": todoListImg,
        "link": "none", 
        "description": "Application de to do list",
        "skill" : 'React.JS, Css, Node.js'

    }
]

export default projects