function addnum(num) {
    let display = document.getElementById("display");
    if (display.textContent === "0") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function calcular() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
        
    }
    if(display.textContent === "777"){
        display.textContent = "😈Vegetita😈"
    }else if(display.textContent === "28062008"){
        display.textContent = "I ❤️ YOU"
    }else if(display.textContent === "6969"){
        display.textContent = "GUARRILLA"
    }else if(display.textContent === "21"){
        display.textContent = "Gorro judio"
    }else if(display.textContent === "13"){
        display.textContent = "Agarramela💀"
    }else if(display.textContent === "23"){
        display.textContent = "Jordan"
    }else if(display.textContent === "420"){
        display.textContent = "Porretaaaa"
    }else if(display.textContent === "512"){
        window.open("https://open.spotify.com/intl-es/track/5jzEwSyyymBlf1fa1o39T2", '_blank');
    }else if(display.textContent === "20032024"){
        window.open("https://www.google.com/search?sxsrf=AHTn8zr1xSwDoKsxnoTAanb6Tf84AY7WNQ:1747942493193&q=kiko+matamoros", '_blank');
    }

    
}

function borrarPantalla() {
    display.textContent = "0";
}
