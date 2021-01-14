const bodyClassList = [];
const rootClassList = [];

function setBodyClass(className) {
  bodyClassList.push(className);
  // eslint-disable-next-line no-shadow
  bodyClassList.forEach((className) => document.body.classList.remove(className));
  document.body.classList.add(className);
}

function setRootClass(className) {
  rootClassList.push(className);
  // eslint-disable-next-line no-shadow
  rootClassList.forEach((className) => document.getElementById('root').classList.remove(className));
  document.getElementById('root').classList.add(className);
}

export { setBodyClass, setRootClass };
