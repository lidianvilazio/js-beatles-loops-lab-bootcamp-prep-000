function theBeatlesPlay(musicians, instruments) {
  var array = []
  for(var i = 0; i < musicians.length;i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}


function johnLennonFacts(array) {
  var i = array.length
  while(i >= 0) {
    array[i]+="!!!"
    i--
  }
  return array
}
