var Names=["Arafat","Abir","Sakibur"];
var minName=Names[0];
for(var i=0; i<Names.length; i++){
    var element = Names[i];
    if(element<Names[i]){
        minName = element;
    }
}
console.log("Tiny Friend is:",minName);
