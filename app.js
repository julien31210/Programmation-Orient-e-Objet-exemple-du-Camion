var Vehicule = function(poids, vitesse) {
  this.poids = poids;
  this.vitesse = vitesse;
  this.avance = function(){
    console.log("vroum vroum");
  };
};

Camion.prototype = new Vehicule();
Camion.prototype.constructor=Camion;
function Camion(poids, vitesse, cargaison) {
  this.cargaison=cargaison;
  this.charge_cargaison = function() {
  console.log("licorne");
  };
}

var truck = new Camion(3000, 80, 42);
truck.poids;
console.log(3000);
truck.vitesse;
console.log(80);
truck.cargaison;
console.log(42);
truck.charge_cargaison();
truck.avance();