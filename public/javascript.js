var maxPokemon=807; 
//change var if the number updates
main()

function main(){ 
    pokeCount=0;
        for(var j=1;j<163;j++){
            createPokemonCardDivider(j);
                for(var i=0;i<5;i++){
                    pokeCount++;
                    createPokemonCard(pokeCount);
                    newColumn.appendChild(card)
                }
        }
}


function createPokemonCardDivider(j){
     //columns tag for bulma to know how to space it
        newColumn= document.createElement("div")
        newColumn.className= 'columns'
        newColumn.id= "columns-"+ j.toString();
        render= document.getElementById('yea');
        render.appendChild(newColumn)
}


function createPokemonCard(i){ 
    //make image
    pokePic = document.createElement("img")
    pokePic.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i.toString() + ".png"; // get image for each pokemon
    pokePic.id = i;
    pokePic.classList.add('pokePic')

    figure= document.createElement('figure')
    figure.className= "image is-48x48";
    figure.classList.add('figure')
    figure.appendChild(pokePic)

    cardHeaderIcon= document.createElement('div')
    cardHeaderIcon.className= 'card-header-icon';
    cardHeaderIcon.appendChild(figure)

    //make title
    title= document.createElement('div')
    title.className= 'title is-4';
    title.classList.add('title')
    title.innerHTML= "sample"

    //make fav button
    favButton= document.createElement('a')
    favButton.className= 'button is-link is-small';
    favButton.id= 'favourite';
    favButton.textContent= 'Favourite'

    cardHeaderTitle= document.createElement('div')
    cardHeaderTitle.className= 'card-header-title';
    cardHeaderTitle.appendChild(title)

    //put all divs from above in one header div
    cardHeader= document.createElement('div')
    cardHeader.className= 'card-header';
    cardHeader.appendChild(cardHeaderIcon)
    cardHeader.appendChild(cardHeaderTitle)
    cardHeader.appendChild(favButton)

    line= document.createElement('div')
    line.className= 'line';
    line.classList.add('line')

    //left box 
    boxInnerHP= document.createElement('div')
    boxInnerHP.className= 'box';
    boxInnerHP.id= 'HP';
    boxInnerHP.textContent= "HP:  "+" / 256";
    boxInnerHP.classList.add('box')


    //progress bar
    progressHP= document.createElement('progress')
    progressHP.className= 'progress is-big is-danger';
    progressHP.value= '56';
    progressHP.max= '256';

    boxOuterHP= document.createElement('div')
    boxOuterHP.className= 'box';
    boxOuterHP.id= 'container';
    boxOuterHP.classList.add('box')
    boxOuterHP.appendChild(boxInnerHP)
    boxOuterHP.appendChild(progressHP)

    //put all related items in one div, same goes for ones below
    contentHP= document.createElement('div')
    contentHP.className= 'content';
    contentHP.classList.add('content')
    contentHP.appendChild(boxOuterHP)

    boxInnerSPD= document.createElement('div')
    boxInnerSPD.className= 'box';
    boxInnerSPD.id= 'SPD';
    boxInnerSPD.textContent= "SPD: / 256";
    boxInnerSPD.classList.add('box')

    progressSPD= document.createElement('progress')
    progressSPD.className= 'progress is-big is-success';
    progressSPD.value= '56';
    progressSPD.max= '256';

    boxOuterSPD= document.createElement('div')
    boxOuterSPD.className= 'box';
    boxOuterSPD.id= 'container';
    boxOuterSPD.classList.add('box')
    boxOuterSPD.appendChild(boxInnerSPD)
    boxOuterSPD.appendChild(progressSPD)

    contentSPD= document.createElement('div')
    contentSPD.className= 'content';
    contentSPD.classList.add('content')
    contentSPD.appendChild(boxOuterSPD)

    boxInnerDEF= document.createElement('div')
    boxInnerDEF.className= 'box';
    boxInnerDEF.id= 'DEF';
    boxInnerDEF.textContent= "DEF: / 256";
    boxInnerDEF.classList.add('box')

    progressDEF= document.createElement('progress')
    progressDEF.className= 'progress is-big is-info';
    progressDEF.value= '56';
    progressDEF.max= '256';

    boxOuterDEF= document.createElement('div')
    boxOuterDEF.className= 'box';
    boxOuterDEF.id= 'container';
    boxOuterDEF.classList.add('box')
    boxOuterDEF.appendChild(boxInnerDEF)
    boxOuterDEF.appendChild(progressDEF)

    contentDEF= document.createElement('div')
    contentDEF.className= 'content';
    contentDEF.classList.add('content')
    contentDEF.appendChild(boxOuterDEF)

    boxInnerATK= document.createElement('div')
    boxInnerATK.className= 'box';
    boxInnerATK.id= 'ATK';
    boxInnerATK.textContent= "ATK: / 256";
    boxInnerATK.classList.add('box')

    progressATK= document.createElement('progress')
    progressATK.className= 'progress is-big is-warning';
    progressATK.value= '56';
    progressATK.max= '256';

    boxOuterATK= document.createElement('div')
    boxOuterATK.className= 'box';
    boxOuterATK.id= 'container';
    boxOuterATK.classList.add('box')
    boxOuterATK.appendChild(boxInnerATK)
    boxOuterATK.appendChild(progressATK)

    contentATK= document.createElement('div')
    contentATK.className= 'content';
    contentATK.classList.add('content')
    contentATK.appendChild(boxOuterATK)

    line2= document.createElement('div')
    line2.className= 'line';
    line2.id = 'line2'

    //moreinfo button
    infoButton= document.createElement('a')
    infoButton.className= 'button is-outlined is-black';
    infoButton.id= 'info';
    infoButton.textContent= 'More Info!';

    blueLine= document.createElement('div')
    blueLine.className= 'blueLine';
    blueLine.classList.add('blueLine')

    //put all of the divs together
    cardContent= document.createElement('div')
    cardContent.className= 'card-content'
    cardContent.appendChild(cardHeader)
    cardContent.appendChild(line)
    cardContent.appendChild(contentHP)
    cardContent.appendChild(contentSPD)
    cardContent.appendChild(contentDEF)
    cardContent.appendChild(contentATK)
    cardContent.appendChild(line2)
    cardContent.appendChild(infoButton)

    //give it all of the above the card tag for Bulma
    container = document.createElement("div")
    container.className= "card";
    container.id = i;
    container.appendChild(cardContent)
    container.appendChild(blueLine)

    //column tag 
    card= document.createElement('div')
    card.className= 'column';
    card.id= 'column-'+i.toString();
    card.appendChild(container)

    render= document.getElementById('yea')
    render.appendChild(card)
    }

//make first letter capital
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//axios to add info to the progress bars and more info to the pokemon
/*for (i in maxPokemon){
            axios.get('https://pokeapi.co/api/v2/pokemon/'+ i)
            .then((response)=>{
           //Change
        
        speed= response.data.stats[0].base_stat;
        hpObj= document.getElementById("HP")
        hpObj[i].textContent= "HP:  "+speed+" / 256";
        defense= response.data.stats[3].base_stat;
        attack= response.data.stats[4].base_stat;
        hp= response.data.stats[5].base_stat;
        })

}*/


link = "https://pokeapi.co/api/v2/pokemon?offset=0&limit="+ maxPokemon.toString();
data = new XMLHttpRequest();
data.open('GET',link,true)
data.send();
dataObj = {};
data.onreadystatechange = function(){
    if (data.readyState === 4 && data.status ===200 ){
    dataObj = JSON.parse(data.responseText);
        for( i in dataObj.results){
            //i represents each pokemon in the website
            textObj = document.getElementsByClassName("title")
            textObj[i].innerHTML = capitalizeFirstLetter(dataObj.results[i].name);
            //set name of pokemon
        } 
    }
}
