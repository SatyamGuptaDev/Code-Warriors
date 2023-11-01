import React from 'react';
import 'css/oobe.css'
import { useNavigation } from 'react-router-dom';

function Index(props) {

    const navigate = useNavigation()

    const battle_btn = document.getElementById('battle');
    battle_btn.addEventListener('click', ()=>{
        navigate('/main-game');
    })


  return (
    <div class="menu">
        <div id="visuals">
        </div>

        <div id="main-menu">
            <button id="battle">BATTLE</button>
        </div>
    </div>  
  )
}


export default Index