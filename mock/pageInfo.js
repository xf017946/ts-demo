function list(method ) {
  let res = null
  switch (method) {
    case "GET":
      res = {
        code: 200,
        data: [
          'http://img.xinbada.info/1.jpg',
          'http://img.xinbada.info/2.jpg',
          'http://img.xinbada.info/3.jpg'
        ],
        msg: 'success'
      }
      break
    default:
      res = {
        "code": "200",
        "message": "Succes",
        "data": []
      }
  }
  return res
}  

module.exports = list