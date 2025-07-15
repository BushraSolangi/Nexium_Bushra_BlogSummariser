import { translateParagraph } from "./translator";

const summary = "Artificial intelligence is the simulation of human intelligence in machines.";
const urdu = translateParagraph(summary);

console.log(urdu);
