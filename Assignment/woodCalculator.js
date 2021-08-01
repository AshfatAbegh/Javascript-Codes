function Chair(length,width,height){
    var Cubicfeet=length*width*height;
    return Cubicfeet;

}
var Calculator=Chair(10,5,8);
console.log("For Chair:",Calculator);

function Table(length,width,height){
    var Cubicfeet=3*(length*width*height);
    return Cubicfeet;

}
var Calculator=Table(15,8,5);
console.log("For Table:",Calculator);

function Bed(length,width,height){
    var Cubicfeet=5*(length*width*height);
    return Cubicfeet;

}
var Calculator=Bed(9,6,3);
console.log("For Bed:",Calculator);