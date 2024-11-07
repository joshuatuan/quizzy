export function decodeHtmlEntities(htmlEntities: string) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = htmlEntities;
  return textarea.value;
}

export function shuffleOptions(options: string[]) {
  return options.sort(() => Math.random() - 0.5);
}
