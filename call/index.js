function say(content) {
  console.log("From " + this + ": Hello " + content);
}
say.call("Bob", "World"); //From Bob: Hello World
