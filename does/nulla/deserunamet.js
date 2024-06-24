if (isFunction(scheme) && (extent || reverse)) {
  return interpolateRange(scheme, flip(extent || [0, 1], reverse));
} else {
  return scheme;
}
