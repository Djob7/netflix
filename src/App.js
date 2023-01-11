import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import AddMovie from './Components/AddMovie';
import FilterMovie from './Components/FilterMovie';
import Home from './Components/Home';
import ListMovies from './Components/ListMovie';
import NavMovies from './Components/NavMovie'
import Profil from './Components/Profil';
function App() {
  const [movies,setMovies] = useState(
    [
      {video : "https://www.youtube.com/embed/5PSNL1qE6VY", title : 'Avatar 1', description :'Sur le monde extraterrestre luxuriant de Pandora vivent les Navi, des êtres qui semblent primitifs, mais qui sont très évolués. Jake Sully, un ancien Marine paralysé, redevient mobile grâce à un tel Avatar et tombe amoureux d’une femme Na’vi. Alors qu’un lien avec elle grandit, il est entraîné dans une bataille pour la survie de son monde.',posterURL:'https://th.bing.com/th/id/OIP.R2sjqpr-p6OTrquB5TqU_gHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',rating : 5, id : Math.random()},
      {video : "https://www.youtube.com/embed/d9MyW72ELq0", title : 'Avatar2', description :'Jake Sully et Ney’tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer et d’explorer les différentes régions encore mystérieuses de Pandora. Lorsqu’une ancienne menace refait surface, Jake va devoir mener une guerre difficile contre les humains.',posterURL:'https://i2.wp.com/attounisia.net/wp-content/uploads/2022/12/718285-avatar-2-a-enfin-sa-date-de-sortie-en-france.jpg?fit=1800%2C1007&ssl=1',rating : 3, id : Math.random()},
      {title : 'Noce d’été', description :'Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui n’épargnent pas les célibataires endurcis. N’osant s’opposer à la décision de mariage de sa famille, Hamid préfère fuir l’atmosphère des préparatifs…',posterURL:'https://pictures.artify.tn/media/zhkfzolegpiij9rzf3ui.jpg?width=200',rating : 5, id : Math.random()},
      {title : 'A Peine J’ouvre Les Yeux', description :'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille l’imagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, s’enivre, découvre l’amour et sa ville de nuit contre la volonté d’Hayet, sa mère, qui connaît la Tunisie et ses interdits.',posterURL:'https://pictures.artify.tn/media/r07wsehw43shedjuick2.jpg?width=200',rating : 2, id : Math.random()},
  
    ]
  )
  const [titre,setTitre] = useState('')
  const [etoile,setEtoile] = useState(0)

  return (
   <div>
        <NavMovies/>
        <br/>
        <div className='boubou'>
       {/*<FilterMovie setTitre={setTitre} setEtoile={setEtoile} titre={titre} etoile={etoile}/>
        <AddMovie movies={movies} setMovies={setMovies}/>*/} 
        </div>
        <br/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/List' element={<ListMovies movies={movies} setMovies={setMovies} titre={titre} etoile={etoile}/>}/>
        <Route path='/descMovie/:djeja' element={<Profil movies={movies}/>}/>
        </Routes>
   </div>
  );
}


export default App;