function isHomeRoute(URL: string) {
  return URL === "/" ? "Home Visit" : "Not Home Page";
}

export default isHomeRoute;
