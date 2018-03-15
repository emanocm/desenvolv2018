window.onload = function () {
  var mapa = L.map('meumapa').setView([-25.45, -49.27], 11);

  //OpenStreetMap
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

  //Pontos
  var ponto = L.marker([-25.45, -47.27]).addTo(mapa);
}
