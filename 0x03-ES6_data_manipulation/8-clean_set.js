export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || !(set instanceof Set)
  ) {
    return '';
  }
  const results = [];
  for (const str of set) {
    if (typeof str !== 'string' && str.startsWith(startString)) {
      results.push(str.substring(startString.length));
    }
  }
  return results.join('-');
}
