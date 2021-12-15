/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function toggleDarkMode(){
    if(localStorage.getItem('dark') === 'true'){
        localStorage.setItem('dark', 'false');
        darkMode();
    }
    else{
        localStorage.setItem('dark', 'true');
        darkMode();
    }
}

function darkMode(){
    if(localStorage.getItem('dark') === null){
        localStorage.setItem('dark', 'true');
    }
    
    let main = document.getElementById('main');
    let button = document.getElementById('darkmodebutton');
    
    if((localStorage.getItem('dark')) === 'true'){
        main.style.color = "#C9CAD9";
        main.style.backgroundColor = "#333333";
        button.src = 'images/icons/moon-white.png';
    }
    else{
       main.style.color = "#333333";
       main.style.backgroundColor = "#C9CAD9";
       button.src = 'images/icons/sun-white.png';
    }
}
