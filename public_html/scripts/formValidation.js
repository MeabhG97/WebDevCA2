// open html using JS: https://www.w3schools.com/jsref/met_win_open.asp
// using an Array: https://www.w3schools.com/js/js_array_methods.asp
// using local storage: https://www.w3schools.com/jsref/prop_win_localstorage.asp
//https://www.w3schools.com/jsref/prop_html_innerhtml.asp
//any other topic that wasnt referenced came from my experience from Python

function valFun(){

  let form=document.searchMovies;

  let movieName=form.movieName.value;
  let movieYear=form.movieYear.value;

  let fightClub=movieName.match(/fight club/i);
  let fury=movieName.match(/fury/i);

  let nameOut="";
  let yearOut="";

  let movieGenres=[];

//Movie Name
  if(movieName==""){
    nameOut="Text field is empty";
    form.movieName.style.border="3px solid red";
  }else if(fightClub){
    window.open("fightClub.html");
    nameOut="Fight Club";
  }else if(fury){
    window.open("fury.html");
    nameOut="Fury";
  }else{
    nameOut=movieName;
  }

  if(nameOut!=movieName){
    return false;
  }

//Movie Year
  if(!movieYear){
    yearOut="None";
  }else if(movieYear<1950){
    yearOut="Entered year is too old";
  }else if(movieYear>2021){
    yearOut="Entered year is too high";
  }else{
    yearOut=movieYear;
  }

//Movie Genres
  if(form.Action.checked){movieGenres.push("Action");}
  if(form.Adventure.checked){movieGenres.push("Adventure");}
  if(form.Animation.checked){movieGenres.push("Animation");}
  if(form.Biography.checked){movieGenres.push("Biography");}
  if(form.Comedy.checked){movieGenres.push("Comedy");}
  if(form.Crime.checked){movieGenres.push("Crime");}
  if(form.Documentary.checked){movieGenres.push("Documentary");}
  if(form.Drama.checked){movieGenres.push("Drama");}
  if(form.Fantasy.checked){movieGenres.push("Fantasy");}
  if(form.History.checked){movieGenres.push("History");}
  if(form.Horror.checked){movieGenres.push("Horror");}
  if(form.Musical.checked){movieGenres.push("Musical");}
  if(form.Mystery.checked){movieGenres.push("Mistery");}
  if(form.Romance.checked){movieGenres.push("Romance");}
  if(form.Scifi.checked){movieGenres.push("Sci-Fi");}
  if(form.Sport.checked){movieGenres.push("Sport");}
  if(form.Thriller.checked){movieGenres.push("Thriller");}
  if(form.War.checked){movieGenres.push("War");}

  if(!movieGenres[0]){
    movieGenres.push("None");
  }

  localStorage.setItem("name",nameOut);
  localStorage.setItem("year",yearOut);
  localStorage.setItem("genres",movieGenres);

  return true;
}

function changeTxt(){
  let p1=document.getElementById("p1");
  let p2=document.getElementById("p2");
  let p3=document.getElementById("p3");
  p1.innerHTML="Movie Selected: "+localStorage.getItem("name");
  p2.innerHTML="Year Selected: "+localStorage.getItem("year");
  p3.innerHTML="Genres Selected: "+localStorage.getItem("genres");
  localStorage.clear();
}
