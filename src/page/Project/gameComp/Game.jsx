import React from 'react';
import { useRef,useEffect,useState } from 'react';
import {Helmet} from "react-helmet";
import AOS from 'aos';
import QuizContainer from '../Quiz/Container';
import { useParams } from 'react-router-dom';


import bluebirdPiano from './assets/sounds/bluebird_piano.mp3' ;
import whoosh from './assets/sounds/whoosh.wav';
import tie from './assets/sounds/tie.mp3';
import gameOver from './assets/sounds/game_over.mp3';
import emotionalDamage from './assets/sounds/emotional_damage.mp3';
import data from '../Quiz/quiz.json' 

import  './css/style.css';


function Try({
    timeForQuiz = 200,
    topicInfo,
    quizObj = data,
}) {


   const canvasRef = useRef(null);
   const [numofCorrect, setNumofCorrect] = useState(0);
   const numOfquestions = quizObj.questions.length;
   const [points, setPoints] = useState(Array(numOfquestions).fill(0));
   const [quizEnded, setQuizEnded] = useState(false);
   const { quizTopic } = useParams();
   //    const selectedTopic = topicInfo.find((item) => item.code === quizTopic);





   useEffect(() => {
        if (quizEnded) {
            // find how many points the player got are grater than one
            let count = 0;
            for (let i = 0; i < points.length; i++) {
                if (points[i] > 0) {
                    count++;
                }
            }
            setNumofCorrect(() => count);
        }
    }, [quizEnded]);
    

    console.log('numofCorrect', numofCorrect);
    console.log('points', points);
    



   useEffect(() => {

     function playAudio() {
        const background_music = document.querySelector('#background-music');
        if (background_music) {
            background_music.volume = 0.5;
            background_music.play();
        }
    }

    // Call the function directly


        playAudio();
        window.addEventListener('click', playAudio);
        return () => {
            window.removeEventListener('click', playAudio);
        };

    // Add the event listener

    // Clean up function
}, []);


useEffect(() => {
    // Existing code...

    // Add this function
    function preventSpacebarScrolling(event) {
        if (event.code === 'Space') {
            event.preventDefault();
        }
    }

    // Add the event listener
    window.addEventListener('keydown', preventSpacebarScrolling);

    // Clean up function
    return () => {
        window.removeEventListener('keydown', preventSpacebarScrolling);
    };
}, []);




useEffect(() => {
    AOS.init({
        duration: 500,
        once: true,
        easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);


  return (

    
    <>
    <div id='game-body' data-aos='fade-in'   >

    
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The-Last-One is a 2 player versus player (PvP) traditional fighting game." />
        <link rel="stylesheet" href="css/style.css"/>
        <link rel="icon" type="image/x-icon" href="/assets/icons/sword.ico" />

        <title>Samurai battle</title>
      </Helmet>

        


      <div id="quiz-div" style={{  boxShadow:' 0px 0px 30px rgb(0, 0, 0)'}} data-aos='slide-left' data-aos-duration='1000' data-aos-delay='500'  >
        <QuizContainer quiz={quizObj} initialSeconds={timeForQuiz} setPoints={setPoints} points={points} setquizEnded={setQuizEnded} />
      </div>



        <div className="canvas-container">
          <div className="Bars-Interface">
            <div className="parent-playerHealth">
              <div id="player-health-bg"></div>
              <div id="playerHealth"></div>
            </div>
            <div id="timer">10</div>
            <div className="parent-enemyHealth">
              <div id="enemy-health-bg"></div>
              <div id="enemyHealth"></div>
            </div>
          </div>
          <div id="deathBy"></div>
          <div id="gameStatus"></div>
          <div className="playAgainBox">
            <button id="exit-btn">Exit</button>
          </div>


          <canvas id='canvas' ref={canvasRef}>
          </canvas>

        </div>

        <audio id="background-music" autoPlay loop>
          <source src={bluebirdPiano} type="audio/mpeg"/>
        </audio>
        <audio src={whoosh} id="attack-sound"></audio>
        <audio src={tie} id="tie-sound"></audio>
        <audio src={gameOver} id="game-over"></audio>
        <audio src={emotionalDamage} id="emotional-damage-sound"></audio> 

<Helmet>
<script>
{`

// Class

class Sprite {
  constructor({
      position, 
      ImageSrc, 
      scale = 1, 
      framesMax = 1, 
      offset = { x:0, y:0}
  }) {
      this.position = position;
      this.height = 150;
      this.width = 150;

      this.image = new Image();
      this.image.src = ImageSrc;
      this.scale = scale;
      this.framesMax = framesMax;
      this.framesCurrent = 0     // means static
      this.framesElapsed = 0;
      this.framesHold = 5;    // The lower the value, the faster the animation
      this.offset = offset;
  }
  

  draw() {
      
      c.drawImage(
          this.image,                     // Image File
          this.framesCurrent * (this.image.width / this.framesMax),  // From where the Cropping Starts x-axis
          0,                              // From where the Cropping Starts y-axis
          this.image.width / this.framesMax,  // The end position of the cropping x-axis
          this.image.height,                  // The end position of the cropping x-axis

          this.position.x - this.offset.x,    // Image's start location x-axis
          this.position.y - this.offset.y,    // Image's start location y-axis
          (this.image.width / this.framesMax) * this.scale ,      // Image's end x-axis
          this.image.height * this.scale       // Image's end y-axis
      );
  }


  animateFrames() {
      this.framesElapsed++
      if (this.framesElapsed % this.framesHold === 0) {       // means remainder 0
          if (this.framesCurrent < this.framesMax - 1) {
              this.framesCurrent++;
          }
          else {
              this.framesCurrent = 0;
          }
      }    
  }

  update() {
      this.draw();
      this.animateFrames();
  }

}


class Fighter extends Sprite{
  constructor({
      position, 
      velocity, 
      color, 
      ImageSrc, 
      scale = 1, 
      framesMax = 1, 
      offset = { x:0, y:0 },
      sprites,
      attackBox = { offset:{}, width: undefined, height: undefined }
  }) {
      
      super({position, ImageSrc, scale, framesMax, offset})

      this.position = position;
      this.velocity = velocity;
      this.height = 150;
      this.width = 50;
      this.lastKey;
      this.attackBox = {
          position: {
              x: this.position.x,
              y: this.position.y,
          } ,
          offset: attackBox.offset,
          width: attackBox.width,
          height: attackBox.height
      }
      this.color = color;
      this.isAttacking;
      this.health = 100;
      this.framesCurrent = 0     // means static
      this.framesElapsed = 0;
      this.framesHold = 5;    // The lower the value, the faster the animation
      this.offset = offset;
      this.sprites = sprites;
      this.dead = false;
      this.superAttack_Count = 0;
      


      for (const sprite in this.sprites) {
          sprites[sprite].image = new Image();
          sprites[sprite].image.src = sprites[sprite].ImageSrc;
      }
  }


  update() {
      this.draw();
      if (!this.dead) {
          this.animateFrames();
      }

      // AttackBox position updates
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

      // draw Attack Boxes // For debigging
      // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);

      // Defining how a player would move
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;       // means "this.position.y += 10  ===  this.position.y = this.position.y + 10;"   // This causes the object to fall down below canvas 
  
      // gravity function
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
          this.velocity.y = 0;
          this.position.y = 330;
      }
      else {
          this.velocity.y += gravity;
      }
  }

  attack() {
      this.switchSprite('attack1');
      attack_sound.play()
      this.isAttacking = true;
  }

  
  superAttack() {
      if (this.superAttack_Count == 0) {
          
          this.switchSprite('super_attack');
          attack_sound.play()
          this.superActivated = true; 
          this.superAttack_Count++;
      }
      else {
          this.attack();
      }   
  }

  takeHit(healthReduced) {
      this.health -= healthReduced;

      if (this.health <= 0) {
          this.switchSprite('death');
      }
      else {
          this.switchSprite('takeHit');
      }

      // Update health bar
      if (this === player) {
          document.getElementById('playerHealth').style.width = this.health + '%';
      } else if (this === enemy) {
          document.getElementById('enemyHealth').style.width = this.health + '%';
      }

  }

  emotionalDamage() {
      //this.health -= 100;
      this.health -= 100;

      emotional_damage_meme.play()

      const deathStatus = document.querySelector('#deathBy');
      deathStatus.style.display = 'flex';
      deathStatus.innerHTML = 'Emotional Damage !'

      // Update health bar
      if (this === player) {
          document.getElementById('playerHealth').style.width = this.health + '%';
      } else if (this === enemy) {
          document.getElementById('enemyHealth').style.width = this.health + '%';
      }
  }

  afterFightMechanics() {         // Will disbale AttackBox and  health wont decrease on attacking after battle is over
      this.attackBox.offset.x = undefined
      this.attackBox.offset.y = undefined
      this.attackBox.height = undefined
      this.attackBox.width = undefined
  }


  switchSprite(sprite) {
      // overriding all other animations 
      if (this.image === this.sprites.death.image) {
          if (this.framesCurrent === this.sprites.death.framesMax - 1) {
              this.dead = true
          }
          return
      }

      if (
          this.image === this.sprites.attack1.image
          &&
          this.framesCurrent < this.sprites.attack1.framesMax - 1
      ) return       // Return means that we dont want to call the follwing code below

      if (
          this.image === this.sprites.super_attack.image
          &&
          this.framesCurrent < this.sprites.super_attack.framesMax - 1
      ) return       // Return means that we dont want to call the follwing code below

      if (
          this.image === this.sprites.takeHit.image 
          &&
          this.framesCurrent < this.sprites.takeHit.framesMax - 1
      ) return

      
      
      
      // normal animations
      switch (sprite) {
          case 'idle':
              if (this.image !== this.sprites.idle.image) {
                  this.image = this.sprites.idle.image;
                  this.framesMax = this.sprites.idle.framesMax;
                  this.framesCurrent = 0;
              }
          break

          case 'run':
              if (this.image !== this.sprites.run.image) {
                  this.image = this.sprites.run.image;
                  this.framesMax = this.sprites.run.framesMax;
                  this.framesCurrent = 0;
              }
          break

          case 'jump':
              if (this.image !== this.sprites.jump.image) {
                  this.image =  this.sprites.jump.image;
                  this.framesMax = this.sprites.jump.framesMax;
                  this.framesCurrent = 0;
              }
          break

          case 'fall':
              if (this.image !== this.sprites.fall.image) {
                  this.image =  this.sprites.fall.image;
                  this.framesMax = this.sprites.fall.framesMax;
                  this.framesCurrent = 0;
              }
          break

          case 'attack1':
              if (this.image !== this.sprites.attack1.image) {
                  this.image =  this.sprites.attack1.image;
                  this.framesMax = this.sprites.attack1.framesMax;
                  this.framesCurrent = 0;
              }
          break

          case 'super_attack':
              if (this.image !== this.sprites.super_attack.image) {
                  this.image =  this.sprites.super_attack.image;
                  this.framesMax = this.sprites.super_attack.framesMax;
                  this.framesCurrent = 0;
              }
          break                

          case 'takeHit':
              if (this.image !== this.sprites.takeHit.image) {
                  this.image =  this.sprites.takeHit.image;
                  this.framesMax = this.sprites.takeHit.framesMax;
                  this.framesCurrent = 0;
              }
          break

          case 'death':
              if (this.image !== this.sprites.death.image) {
                  this.image =  this.sprites.death.image;
                  this.framesMax = this.sprites.death.framesMax;
                  this.framesCurrent = 0;
              }
          break
          
      }
  }
}





const background_music = document.querySelector('#background-music');
    background_music.volume = 0.5;




const attack_sound = document.querySelector('#attack-sound');
attack_sound.volume = 0.4;

const tie_sound = document.querySelector('#tie-sound');
tie_sound.volume = 0.1;

const game_over = document.querySelector('#game-over');
game_over.volume = 0.1;


const emotional_damage_meme = document.querySelector('#emotional-damage-sound')
emotional_damage_meme.volume = 0.2;



// Keys
const keys = {
  a:{
      pressed: false
  },

  d:{
      pressed: false
  },

  w:{
      pressed: false
  },

  e:{
      pressed: false
  },

  ArrowRight:{
      pressed:false
  },

  ArrowLeft:{
      pressed:false
  },

  ArrowUp:{
      pressed:false
  }
}


// Player Movements
window.addEventListener('keydown', (event)=>{
  console.log(event.key);

  if (!player.dead) {
      switch  (event.key) {

              // Player Keys
          case 'd':
              keys.d.pressed = true;
              player.lastKey = 'd';
              break 

          case 'a':
              keys.a.pressed = true;
              player.lastKey = 'a';
              break

          case 'w':
              if (player.position.y > 100){
                  player.velocity.y = -15;
                  player.lastKey = 'w';
              }
              break

          case ' ':   // spacebar
              player.attack();
              break
          case 's':   // spacebar
              player.attack();
              break

          case 'e':
              player.superAttack();
              break
      }
  }

  if (!enemy.dead) {
      switch  (event.key) {
              // Enemy Keys
          case 'ArrowRight':
              keys.ArrowRight.pressed = true;
              enemy.lastKey = 'ArrowRight';
              break

          case 'ArrowLeft':
              keys.ArrowLeft.pressed = true;
              enemy.lastKey = 'ArrowLeft';
              break

          case 'ArrowUp':
              if (enemy.position.y > 100) {
                  enemy.velocity.y = -15;
                  enemy.lastKey = 'ArrowUp';
              }
              break

          case 'ArrowDown':
              enemy.attack();
              break

          case 'Enter':
              enemy.superAttack();
              break
      }
  }

})

window.addEventListener('keyup', (event)=>{
  // console.log(event.key);

  switch  (event.key) {

          // Player KeysUp
      case 'd':
          keys.d.pressed = false;
          break 
      
      case 'a':
          keys.a.pressed = false;
          break
      

          // Enemy KeysUP
      case 'ArrowRight':
          keys.ArrowRight.pressed = false;
          break
      
      case 'ArrowLeft':
          keys.ArrowLeft.pressed = false;
          break
      
  }
})









// Other Supporting Functionss
function rectangularCollisions({rectangle1, rectangle2}){
  return(
     rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x    // means left side of the Enemy
     &&
     rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width               // means right side of the enemy
     &&
     rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y  && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height       // means Top side collision
  )
}


function determineWinner({player, enemy, timerID}) {
 const gameOverText = document.querySelector('#gameStatus');
 gameOverText.style.display = 'flex';

 clearTimeout(timerID);



 if (player.health == enemy.health) {
      player.afterFightMechanics();
      enemy.afterFightMechanics();
      gameOverText.innerHTML = 'Tie';
      
      background_music.pause();

      tie_sound.play();
      setTimeout(() => {
          game_over.play();
      }, 2800);
  }


 else if (player.health > enemy.health) {
      enemy.switchSprite('death');
      player.afterFightMechanics();
      enemy.afterFightMechanics();

      gameOverText.innerHTML = 'Samurai wins'

      background_music.pause();


      setTimeout(() => {
          game_over.play();
      }, 500);
  }

 else if (enemy.health > player.health) {
      player.switchSprite('death');
      enemy.afterFightMechanics();
      player.afterFightMechanics();

      gameOverText.innerHTML = 'You lost';
      
      background_music.pause();
      setTimeout(() => {
          game_over.play();
      }, 500);

  }
  
  setTimeout(() => {
      const playAgainBox = document.querySelector('.playAgainBox');
      const exit_btn = document.querySelector('#exit-btn');
  
      playAgainBox.style.display = 'flex';
      playAgainBox.style.opacity = 1;
      
      exit_btn.style.display = 'flex';

  
      exit_btn.addEventListener('click',()=>{
          window.location.reload();
      })
  
  }, 2000);

  
}

let timer = 50;
let timerID;
function decreaseTimer() {
  if (timer > 0) { // Timer function
    timerID = setTimeout(decreaseTimer, 1000);
    timer--; // Decrease the timer
    document.querySelector('#timer').innerHTML = timer; // This line updates the timer element
  }

 
 if (timer === 0) {
     determineWinner({player, enemy, timerID})
     const deathStatus = document.querySelector('#deathBy');
     deathStatus.style.display = 'flex';
     deathStatus.innerHTML = 'Time Out'
 }
}








// Canvas and index.js code

         const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');

        // Canvas Settings
        canvas.width = 1020;            
        canvas.height = 500;         

        c.fillRect(0, 0, canvas.width, canvas.height);

        const gravity = 0.7;   

        const background = new Sprite({
            position:{
                x:0,
                y:0
            },
            ImageSrc: '/assets/background.png'
        });

        const shop = new Sprite({
            position:{
                x:600,
                y:128
            },
            ImageSrc: '/assets/shop.png',
            scale: 2.75,
            framesMax: 6,
            framesCurrent:1
        });

        // Player Object
        const player = new Fighter({
            position:{
                x:100,
                y:100
            },

            velocity:{
                x:0,
                y:0
            },

            color: 'red',

            offset:{
                x:0,
                y:0
            },

            offset:{
                x:200,
                y:157
            },

            ImageSrc: '/assets/samuraiMack/Idle.png',
            framesMax: 8,
            scale:2.5,

            sprites:{
                idle:{
                    ImageSrc: '/assets/samuraiMack/Idle.png',
                    framesMax:8
                },
                run:{
                    ImageSrc: '/assets/samuraiMack/Run.png',
                    framesMax:8,
                },
                jump:{
                    ImageSrc: '/assets/samuraiMack/Jump.png',
                    framesMax:2,
                },
                fall:{
                    ImageSrc: '/assets/samuraiMack/Fall.png',
                    framesMax:2,
                },
                attack1:{
                    ImageSrc: '/assets/samuraiMack/short_attack1.png',
                    framesMax:4,
                },
                takeHit:{
                    ImageSrc: '/assets/samuraiMack/Take Hit - white silhouette.png',
                    framesMax:4,
                },
                death:{
                    ImageSrc: '/assets/samuraiMack/Death.png',
                    framesMax:6,
                },
                super_attack:{
                    ImageSrc: '/assets/samuraiMack/emotional_damage.png',
                    framesMax:4,
                }
            },

            attackBox:{
                offset:{
                    x:100,
                    y:50
                },
                width:155,
                height:50
            }
        })
        const enemy = new Fighter({
            position:{
                x: 800,
                y: 100
            },

            velocity:{
                x:0,
                y:0
            },

            color: 'blue',

            offset:{
                x:200,
                y:167
            },

            ImageSrc: '/assets/kenji/Idle.png',
            framesMax: 4,
            scale:2.5,

            sprites:{
                idle:{
                    ImageSrc: '/assets/kenji/Idle.png',
                    framesMax:4
                },
                run:{
                    ImageSrc: '/assets/kenji/Run.png',
                    framesMax:8,
                },
                jump:{
                    ImageSrc: '/assets/kenji/Jump.png',
                    framesMax:2,
                },
                fall:{
                    ImageSrc: '/assets/kenji/Fall.png',
                    framesMax:2,
                },
                attack1:{
                    ImageSrc: '/assets/kenji/Attack1.png',
                    framesMax:4,
                },
                takeHit:{
                    ImageSrc: '/assets/kenji/Take Hit - white silhouette.png',
                    framesMax:3,
                },
                death:{
                    ImageSrc: '/assets/kenji/Death.png',
                    framesMax:7,
                },
                super_attack:{
                    ImageSrc: '/assets/kenji/emotional_damage.png',
                    framesMax:4,
                }
            },

            attackBox:{
                offset:{
                    x:-160,             
                    y:50
                },
                width:160,
                height:50
            }
        })
        player.draw();
        enemy.draw();
        decreaseTimer();   
        function animate() {
            window.requestAnimationFrame(animate);         // means FRAME OR FPS
            // console.log('Animating');    // Debugging Purpose
            
            c.fillStyle = 'black';
            c.fillRect(0,0, canvas.width, canvas.height);   // doing so so that sprites look individual

            // Rendering  Sprites and  Fighters
            background.update();    // Make sure to call updates so that they appear
            shop.update();
            c.fillStyle = 'rgba(255,255,255,0.15)';
            c.fillRect(0,0, canvas.width, canvas.height);
            player.update();
            enemy.update();


            // Default Value
            player.velocity.x = 0;  
            enemy.velocity.x = 0;    

            // Player

            if (keys.a.pressed && player.lastKey === 'a') {
                if (player.position.x > 0) {
                    player.velocity.x = -5;
                    player.switchSprite('run');
                }    
            }
            else if (keys.d.pressed && player.lastKey === 'd') {
                if (player.position.x < 930) {
                    player.velocity.x = 5;
                    player.switchSprite('run');
                }
            }
            else {
                player.switchSprite('idle');
            }



            // Jumping
            if (player.velocity.y < 0) {
                player.switchSprite('jump');
            }
            else if (player.velocity.y > 0) {
                player.switchSprite('fall');
            }



            // Enemy
            if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
                if (enemy.position.x > 0) {
                    enemy.velocity.x = -5;
                    enemy.switchSprite('run');
                }
            }
            else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
                if (enemy.position.x < 930) {
                    enemy.velocity.x = 5;
                    enemy.switchSprite('run');
                }
            }
            else {
                enemy.switchSprite('idle');
            }

                // Jumping
            if (enemy.velocity.y < 0) {
                enemy.switchSprite('jump');
            }
            else if (enemy.velocity.y > 0) {
                enemy.switchSprite('fall');
            }


            // Detect for Collisions

            // Player Collision and enemy gets Hits
            if (
                rectangularCollisions({
                    rectangle1: player,
                    rectangle2: enemy
                })
                && player.isAttacking && player.framesCurrent == 2
            )   {
                enemy.takeHit(5);
                player.isAttacking = false;
                // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
                gsap.to('#enemyHealth', {
                    width: enemy.health + '%'
                })
            }

                // if player misses
            if (player.isAttacking && player.framesCurrent == 2) {
                player.isAttacking = false;
            }

            // Enemy Collision
            if (
                rectangularCollisions({
                    rectangle1: enemy,
                    rectangle2: player
                })
                && enemy.isAttacking && enemy.framesCurrent == 2
            )   {
                player.takeHit(5);
                enemy.isAttacking = false;
                // document.querySelector('#playerHealth').style.width = player.health + '%';
                gsap.to('#playerHealth', {
                    width: player.health + '%'
                })
            }

                // if player misses
            if (enemy.isAttacking && enemy.framesCurrent == 2) {
                enemy.isAttacking = false;
            }


        // SUPER ATTACK - EMOTIONAL DAMAGE ///////////

            // Player Collision and enemy gets Hits
            if (
                rectangularCollisions({
                    rectangle1: player,
                    rectangle2: enemy
                })
                && player.superActivated && player.framesCurrent == 2
            )   {
                enemy.emotionalDamage();
                player.superActivated = false;
                // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
                gsap.to('#enemyHealth', {
                    width: enemy.health + '%'
                })
            }

            if (player.superActivated && player.framesCurrent == 2) {
                player.superActivated = false;
            }
            if (
                rectangularCollisions({
                    rectangle1: enemy,
                    rectangle2: player
                })
                && enemy.superActivated && enemy.framesCurrent == 2
            )   {
                player.emotionalDamage();
                enemy.superActivated = false;
                gsap.to('#playerHealth', {
                    width: player.health + '%'
                })
            }
            if (enemy.superActivated && enemy.framesCurrent == 2) {
                enemy.superActivated = false;
            }
            if (enemy.health <= 0  ||  player.health <= 0) {
                determineWinner({player, enemy, timerID});
            }


        }

        animate();


    
        







`}

</script>
</Helmet>

    </div>
        
    </>
  );
}

export default Try;
