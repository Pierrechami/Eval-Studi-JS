jQuery(document).ready(function ($) {
    // header 
   
   // affiche les régles 
   $('#imgregle').click(function () {
       $('.regle').fadeIn()
       $('#imgregleout').show()
       $(this).hide()
   })
   
   // n'affiche plus les régles 
   $('#imgregleout').click(function () {
       $('.regle').fadeOut()
       $('#imgregleout').hide()
       $('#imgregle').show()
   
   })
   
                                   // section 
   const playeurFirst = document.getElementById('jfirst')
   const playeurTwo = document.getElementById('jtwo')
   
   const btnValide = document.getElementById('btnValide')
   
   const btnstart = document.getElementsByClassName('imgstart')
   
   
   const vs1 = document.getElementById('vs1')
   const vs2 = document.getElementById('vs2')
   
   
   
                          // Page d'accueil, identification des joueurs  
   
   // Récupére la valeur des imputs des 2 joueurs et les affiches et modifier la couleur au click (touche entré)
   
      
   const addpPayeursVS = (playeur , vs) => {
       btnValide.addEventListener('click' , (e) => {
           e.preventDefault()
           vs.innerText = playeur.value
           if (playeur.value !== '') {
               playeur.style.border = '2px solid green'
                $('#btnValide').css('color' , 'green')
           } else {
               playeur.style.border = '2px solid red'
                $('#btnValide').css('color' , 'red')

           }

       })
   
   }
   addpPayeursVS(playeurFirst, vs1 )
   addpPayeursVS(playeurTwo, vs2 )
   
      // Modifie la couleur des input en fonction de sa valeur
      
   const grenne = (playeur) => {
       playeur.addEventListener('keypress',  function () {
           if (playeur.value !== '') {
               playeur.style.border = '2px solid red'
           } 
       })
   }
   
   grenne(playeurFirst)
   grenne(playeurTwo) 
   
   
   
   
   
       // Affiche sur les bouton start quand les 2 joueurs ont indiqué leur prénom
   
   
   btnValide.addEventListener('click' , function (e) {
       e.preventDefault()
       if (playeurFirst.value !== '' && playeurTwo.value !== '') {
           btnstart[0].style.display = 'block'
       } else {
           btnstart[0].style.display = 'none'
       }
     })
   
   
   
     
     
   
                                          // MAIN 
   
   const main = document.getElementsByTagName('main')[0]
   const section = document.getElementsByTagName('section')[0]
   const start = btnstart[0]
   const namePlayeurOne = document.getElementById('namePlayeur1')
   const namePlayeurTwo = document.getElementById('namePlayeur2')
   
   const nwGame = document.getElementsByClassName('nw-game')
   const colPlayerOne = document.getElementsByClassName('col-player-one')
   const colPlayerTwo = document.getElementsByClassName('col-player-two')
   const global_p_1 = document.getElementById('global-p-1')  
   const global_p_2 = document.getElementById('global-p-2')
   const current_p_1 = document.getElementById('current-p-1')
   const current_p_2 = document.getElementById('current-p-2')
   
   const rool = document.getElementById('rool')
   const hold = document.getElementById('hold')
   const des = document.getElementById('de')
   

    let joueurActif = colPlayerOne
    let joeurNonActif = colPlayerTwo
    
    joueurActif[0].style.boxShadow = '0 0 8px 8px white inset'
    joeurNonActif[0].style.opacity = '0.33'







               // Lance la page de jeu et récupére les noms des joeurs 
   
     
     start.addEventListener('click', function startt () {
         section.style.display = 'none'
         main.style.display = 'block'
         namePlayeurOne.innerHTML = vs1.textContent
         namePlayeurTwo.innerText = vs2.textContent
   
     })
   


   
     // Lance une nouvelle partie 
   
     nwGame[0].addEventListener('click' , function () {
        global_p_1.innerText = 0 
        global_p_2.innerText = 0
        current_p_1.innerText = 0
        current_p_2.innerText = 0 
        des.innerHTML = '<img src="./img/lancé-de-dé.png" alt="" width="200px" height="200px" >'
        $('.jeux').show()


    })
   

      
// Tableau Image Dé 
const imgDe = [ 
    '<img src="./img/dé/dé1.png" alt="" width="150px" height="150px">' ,
    '<img src="./img/dé/dé2.png" alt="" width="150px" height="150px">' ,
    '<img src="./img/dé/dé3.png" alt="" width="150px" height="150px">' ,
    '<img src="./img/dé/dé4.png" alt="" width="150px" height="150px">' ,
    '<img src="./img/dé/dé5.png" alt="" width="150px" height="150px">' , 
    '<img src="./img/dé/dé6.png" alt="" width="150px" height="150px">' 
]

   // Function pour lancé le dé, affiche le dé en question + addition la somme du current avec la valeur du dés
   $('#rool').click(function clickDe () { 

        const numRandom =  Math.floor(Math.random()* imgDe.length) ; 
       const  numeroDe = imgDe.indexOf(imgDe[numRandom]) + 1 ;

       de.innerHTML = imgDe[numRandom]

     const pointJoueurActif = joueurActif[0].children[2].children[1]



    if (joueurActif == colPlayerOne) {
        if (numeroDe == 1) {
            pointJoueurActif.innerText = 0
            changePlayer()
        } else {
            pointJoueurActif.innerText = ( Number(current_p_1.innerText) + numeroDe )
        }
    } else {

        if (numeroDe == 1) {
            pointJoueurActif.innerText = 0
            changePlayer()
        } else {
            pointJoueurActif.innerText = (Number(pointJoueurActif.innerText) + numeroDe )
        }
    }



    

    })

// Evenement pour les points globaux  
hold.addEventListener('click', function() {
       
        if (joueurActif == colPlayerOne) {
            global_p_1.innerText = Number(current_p_1.innerText) + Number(global_p_1.innerText)
            if (global_p_1.innerText >= 100) {
                alert(vs1.textContent + ' gagne la partie ! 🎉')
                $('.jeux').hide()
                
            }else {
                changePlayer()
            }

        } else {
            global_p_2.innerText = Number(current_p_2.innerText) + Number(global_p_2.innerText)

            if (global_p_2.innerText >= 100) {

                alert(vs2.textContent+ ' gagne la partie ! 🎉 ')
                $('.jeux').hide()

            }else {
                changePlayer()
            }
        } 

     
        
     

})
   
   
   
   // function pour changer de joueur
function changePlayer () {
    current_p_1.innerText = 0
    current_p_2.innerText = 0


   joueurActif = joueurActif == colPlayerOne ? colPlayerTwo : colPlayerOne
   joeurNonActif = joeurNonActif == colPlayerTwo ? colPlayerOne : colPlayerTwo


joueurActif[0].style.boxShadow = '0 0 8px 8px white inset'
joueurActif[0].style.opacity = '1'
joeurNonActif[0].style.opacity = '0.33'
joeurNonActif[0].style.boxShadow = ''
  

}



   
   });
   
   