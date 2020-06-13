let bodyClassList = [];
let rootClassList = [];

function setBodyClass(className) {

    bodyClassList.push(className);
    bodyClassList.forEach((className) => document.body.classList.remove(className));
    document.body.classList.add(className);

}

function setRootClass(className) {

    rootClassList.push(className);
    rootClassList.forEach((className) => document.getElementById("root").classList.remove(className));
    document.getElementById("root").classList.add(className);

}

export {setBodyClass, setRootClass};
