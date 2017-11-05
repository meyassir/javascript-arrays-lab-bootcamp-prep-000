const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
  return kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name);
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift();
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop();
}

function appendKitten(name)
{
  let temp = [...kittens, name];
  return temp;
}

function prependKitten(name)
{
  let temp = [name, ...kittens]
  return temp;
}

function removeLastKitten()
{
  let temp = kittens.slice(kittens.length);
  return temp;
}
