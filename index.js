    document.addEventListener("DOMContentLoaded", function() {

        const header = document.querySelector("#header");
        console.log("Here's your header:", header);
        header.style.color = "red";

    })




    /***** Deliverable 3 *****/

    console.log("PLAYERS array looks like this:", PLAYERS)
    debugger

    function renderPlayers(PLAYERS) {
        const playersLi = document.createElement('li')

        for (const player in PLAYERS) {
            playersLi.innerHTML = `
                <div class="player" data-number= ${PLAYERS.number}>
                <h3>
                    ${PLAYERS.name} (<em>${PLAYERS.nickname}</em></h3>
                        <img src="${PLAYERS.photo} 
                        </div> `
        }
        playerDiv = document.querySelector('div.player-container')

        // playerDiv.append(playersLi)
    }





    renderPlayers(PLAYERS)


    /***** Deliverable 4 *****/