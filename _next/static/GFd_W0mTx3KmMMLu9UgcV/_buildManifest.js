self.__BUILD_MANIFEST = function(s) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [],
      fallback: []
    },
    "/": [s, "static/css/87630934a4bc5b8b.css", "static/chunks/pages/index-f994e53982bb2e5d.js"],
    "/_error": ["static/chunks/pages/_error-0a004b8b8498208d.js"],
    "/[type]/[post]": [s, "static/chunks/301-9ddc85d5ead33612.js", "static/css/f302cdb0c3958e3e.css", "static/chunks/pages/[type]/[post]-d5888ece0162fcff.js"],
    sortedPages: ["/", "/_app", "/_error", "/[type]/[post]"]
  }
}("static/chunks/547-cd310fdf06a1d81c.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
