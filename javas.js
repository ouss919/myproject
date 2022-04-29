function ouvlog(bouton, id) {
    var div = document.getElementById(id);
    if(div.style.display=="none") { 
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
    var d=document.getElementById('logi');
    if(d.style.display=="block")
    {d.style.display="none"}
  }

  function fermer(bouton, id)
  {
    var div = document.getElementById(id);
    div.style.display = "none";

  }

  function ouvsig(bouton, id) {
    var div = document.getElementById(id);
    if(div.style.display=="none") { 
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
    var d=document.getElementById('dlog');
    if(d.style.display=="block")
    {d.style.display="none"}
  }

  function afficherListe(bouton,id)
  {
    var div=document.getElementById(id);
    div.style.visibility="visible";
  }

function hideList(bouton,id)
{
  var div=document.getElementById(id);
  div.style.visibility="hidden";
}

  function afficherh(bouton,id){
    var div = document.getElementById(id);
    if(div.style.visibility=="visible") { 
      div.style.visibility="hidden";
    } else {
      div.style.visibility="visible"
    }
  }