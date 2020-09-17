    document.addEventListener("DOMContentLoaded", function() {

        const header = document.querySelector("#header");
        header.style.color = "red"



    function renderPlayer(playerArray){
        for(const player of playerArray){
        const playerDiv = document.createElement('div')
        playerDiv.classList.add("player")
        playerDiv.dataset.number = `${player.number}`
        playerDiv.innerHTML = `<h3> ${player.name} (<em>${player.nickname}</em> </h3>
        <img src="${player.photo}" alt= ${player.name}> `
      

        const playerContainer = document.querySelector('.player-container')
        playerContainer.append(playerDiv)
        }
    }
    
   


    


    })

            /***** Deliverable 4 *****/




