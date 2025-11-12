import principal from "../principal/principal.js";
function suspend(studentName){
    // let principal = new principal("Parmeet");
    // let principal2 = new principal("Preet");    // not possible bcz constructor is private
    let principal = principal.getPrincipal();
    principal.suspend(studentName);
}

function notify(){
    let principal = principal.getPrincipal();
    principal.notify("School bnd rahega ab nachoo");
}