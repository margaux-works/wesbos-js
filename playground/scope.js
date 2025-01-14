// const first = 'margaux';

function isCool(name) {
  let cool;
  if (name === 'margo') {
    cool = true;
  }
  console.log(cool);
  return cool;
}

const dog = 'mila';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'joke';
  logDog();
}

go();
