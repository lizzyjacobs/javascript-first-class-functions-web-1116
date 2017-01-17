function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  var fn = () => {

  }
  return fn
}

function returnsAnAnonymousFunction() {
  return () => {
    
  }
}
