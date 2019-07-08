module.exports = {
  devServer: {
    proxy: {
      "/gateway": {
        target: "http://localhost:8092",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.")
            return "/index.html"
          } else {
            const name = req.path
              .split("/api/")[1]
              // .split("/")
              // .join("_")
            const mock = require(`./mock/${name}`)
            const result = mock(req.method, {
              params: {
                ...req.params
              },
              query: {
                ...req.query
              }
            })
            delete require.cache[require.resolve(`./mock/${name}`)]
            return res.send(result)
          }
        }
      }
    }
  }
}