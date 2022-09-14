module.exports = {
  log: (msg) => {
    console.log('logger:', msg)
  },
  cLog: (msg) => {
    const c = require('c')

    c.log(msg)
  }
}
