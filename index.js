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

function checkUpperCase(string) {
  return (string === string.toUpperCase)
}

function checkLowerCase(string) {
  return (string === string.toLowerCase)
}

function sayHiToGrandma(string) {
  if (checkUpperCase(string)) {
    return "I can't hear you!"
  } else if (checkLowerCase(string)) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}