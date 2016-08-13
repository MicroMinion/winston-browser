'use strict'

var Logger = function () {
  this.debug = this.log.bind(this, 'debug')
  this.info = this.log.bind(this, 'info')
  this.warn = this.log.bind(this, 'warn')
  this.error = this.log.bind(this, 'error')
}

Logger.prototype.log = function (level, msg, attributes) {
  console.log(level + ' - ' + msg + ' (' + JSON.stringify(attributes) + ')')
}

module.exports = new Logger()
