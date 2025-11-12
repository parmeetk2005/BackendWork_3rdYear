class principal{
    instance = null;
    _principal = null;
    _constructor(name){    // private constructor
        this.principal = name;
    }
    static getPrincipal(){
        if(!instance){
            let principal = new principal();
            instance = principal;
        }
        return instance;
    }
    createCurriculum(){

    }
    resticateStudent(){

    }
    suspendStudent(days){

    }
    notify(message){

    }
}
module.exports = principal;
