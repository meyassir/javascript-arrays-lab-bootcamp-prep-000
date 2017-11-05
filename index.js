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
