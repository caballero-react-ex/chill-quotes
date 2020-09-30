export function shuffleArray(array) {
  const shuffled = array.sort(()=>  {
    return .5 - Math.random();
  });
  return shuffled; 
};

export function copyCodeToClipboard(className) {
  const text = document.querySelector(className).innerText;
  const elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}