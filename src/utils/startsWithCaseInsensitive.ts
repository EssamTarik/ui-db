const startsWithCaseInsensitive = (str: string, prefix: string): boolean => {
  return str.toLowerCase().startsWith(prefix.toLowerCase());
}

export default startsWithCaseInsensitive;