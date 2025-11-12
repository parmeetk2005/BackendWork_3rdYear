class principal{
    multipleSchool = new Map();
    instance = null;
    _principal = null;
    _constructor(name){    // private constructor
        this.principal = name;
    }
    static getPrincipal(school){
        if(!multipleSchool.has(school)){
            let principal = new principal();
            multipleSchool.set(school, principal);
            // instance = principal;
        }
        return multipleSchool.get(school);
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
