const exclude = <Type, Key extends keyof Type>(
  obj: Type,
  keys: Key[]
): Omit<Type, Key> => {
  const o = JSON.parse(JSON.stringify(obj));

  for (const key of keys) {
    delete o[key];
  }
  return o;
};

export default exclude;
