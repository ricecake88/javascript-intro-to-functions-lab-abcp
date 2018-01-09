function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (isLowerCase(string))
    return "I can't hear you!"
  else if (isUpperCase(string))
    return "YES INDEED!"
    else if (string.equalsTo("I love you, too"))
}