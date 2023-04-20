function afficherRec() {
  catalogue = document.getElementById("recc");
  for (let i = 0; i < recettesDB.length; i++) {
    con = document.createElement("div");
    pic = document.createElement("div");
    txt = document.createElement("div");
    picr = document.createElement("img");
    rd = Math.floor(Math.random() * 4) + 1;
    picr.setAttribute(
      "src",
      "../assets/recettes/" + recettesDB[i].id + "/" + rd + ".png"
    );
    pic.appendChild(picr);
    nom = document.createElement("a");
    nom.setAttribute("href", "details.html?recettes=" + recettesDB[i].id);
    nom.innerHTML = recettesDB[i].name;
    catg = document.createElement("h2");
    catg.innerHTML = recettesDB[i].category;
    pays = document.createElement("h3");
    pays.innerHTML = recettesDB[i].country;
    dur = document.createElement("h3");
    dur.innerHTML = recettesDB[i].duration;
    note = document.createElement("h3");
    let somme = 0;
    for (let j = 0; j < recettesDB[i].comments.length; j++) {
      somme += recettesDB[i].comments[j].rating;
    }
    somme = somme / recettesDB[i].comments.length;
    note.innerHTML = somme;
    txt.appendChild(nom);
    txt.appendChild(catg);
    txt.appendChild(pays);
    txt.appendChild(dur);
    txt.appendChild(note);
    con.appendChild(txt);
    con.appendChild(pic);
    recc.appendChild(con);
  }
}
function rechercheRec(event, rech) {
  catalogue = document.getElementById("recc");
  catalogue.innerHTML = "";
  for (let i = 0; i < recettesDB.length; i++) {
    capt = recettesDB[i].name.toLowerCase();
    if (capt.includes(rech.toLowerCase())) {
      con = document.createElement("div");
      pic = document.createElement("div");
      txt = document.createElement("div");
      picr = document.createElement("img");
      rd = Math.floor(Math.random() * 4) + 1;
      picr.setAttribute(
        "src",
        "../assets/recettes/" + recettesDB[i].id + "/" + rd + ".png"
      );
      pic.appendChild(picr);
      nom = document.createElement("a");
      nom.setAttribute("href", "details.html?recettes=" + recettesDB[i].id);
      nom.innerHTML = recettesDB[i].name;
      catg = document.createElement("h2");
      catg.innerHTML = recettesDB[i].category;
      pays = document.createElement("h3");
      pays.innerHTML = recettesDB[i].country;
      dur = document.createElement("h3");
      dur.innerHTML = recettesDB[i].duration;
      note = document.createElement("h3");
      let somme = 0;
      for (let j = 0; j < recettesDB[i].comments[j].length; j++) {
        somme = somme + recettesDB[i].comments[j].rating;
      }
      somme = somme / recettesDB[i].comments.length;
      note.innerHTML = somme;
      txt.appendChild(nom);
      txt.appendChild(catg);
      txt.appendChild(pays);
      txt.appendChild(dur);
      txt.appendChild(note);
      con.appendChild(txt);
      con.appendChild(pic);
      recc.appendChild(con);
    }
  }
  document.getElementById("search").value = "";
}
function rechercheCtg() {
  catalogue = document.getElementById("recc");
  catalogue.innerHTML = "";
  catSelec = document.getElementById("cat-selc").value;
  for (let i = 0; i < recettesDB.length; i++) {
    capt = recettesDB[i].category;
    if (capt == catSelec) {
      con = document.createElement("div");
      pic = document.createElement("div");
      txt = document.createElement("div");
      picr = document.createElement("img");
      rd = Math.floor(Math.random() * 4) + 1;
      picr.setAttribute(
        "src",
        "../assets/recettes/" + recettesDB[i].id + "/" + rd + ".png"
      );
      pic.appendChild(picr);
      nom = document.createElement("a");
      nom.setAttribute("href", "details.html?recettes=" + recettesDB[i].id);
      nom.innerHTML = recettesDB[i].name;
      catg = document.createElement("h2");
      catg.innerHTML = recettesDB[i].category;
      pays = document.createElement("h3");
      pays.innerHTML = recettesDB[i].country;
      dur = document.createElement("h3");
      dur.innerHTML = recettesDB[i].duration;
      note = document.createElement("h3");
      let somme = 0;
      for (let j = 0; j < recettesDB[i].comments[j].length; j++) {
        somme = somme + recettesDB[i].comments[j].rating;
      }
      somme = somme / recettesDB[i].comments.length;
      note.innerHTML = somme;
      txt.appendChild(nom);
      txt.appendChild(catg);
      txt.appendChild(pays);
      txt.appendChild(dur);
      txt.appendChild(note);
      con.appendChild(txt);
      con.appendChild(pic);
      recc.appendChild(con);
    }
  }
}
