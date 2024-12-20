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
        "description": "Pour mon commencer mon apprentissage sur React, j'ai crée une petite appli de feedback de commentaires."
    },

    {
        "id": 2, 
        "title": "Aout 2024 - Suivi de dépenses, ReactJs",
        "picture": expenseTrackerImg,
        "link": "none", 
        "description": "Ensuite, j'ai crée une appli de suivi de dépenses."
    },
    {
        "id": 3, 
        "title": "Septembre 2024 - Github finder",
        "picture": gitHubFinderImg,
        "link": "none", 
        "description": "J'ai ensuite crée une appli de recherche de profils de Github"
    },
    {
        "id": 4, 
        "title": "Novembre 2024 - House Marketplace",
        "picture": houseMarketplaceImg,
        "link": "none", 
        "description": "Création d'un site web de ventes de maisons. Interface, utilisateur, etc..."
    },
    {
        "id": 5, 
        "title": "Decembre 2024 - To do list",
        "picture": todoListImg,
        "link": "none", 
        "description": "Application de to do list sous node.js avec Express et mangoDB"
    }
]

export default projects