export function generateWord(baseTime = 0) {
    return {
      type: "GENERATE_WORD",
      word: "Orange"   // accually generate a random word
    };
}
// in case a safecard button would be added where the user can skip the present word and generate a new one:
export function nextWord() {
    return {
      type: "NEXT_WORD",
      word: "Banana"   // Regenerate a new word
    };
}