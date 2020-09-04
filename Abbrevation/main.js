var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

module.exports = rl.setPrompt('cmd_input> ');
rl.prompt();

rl.on('line', function(line) {
    const data = {
        "#": "Number",
        "No": "Number",
        "tele": "telephone",
        "ph": "telephone",
        "Rd": "Road",
        "telephone": ["mobile", "landline"],
        "Road": ["Boulevard", "Way"],
        "NH": "National HighWay",
        "mobile": "telephone"
      }
      
      
  //console.log(inputData)
  splitcolon = line.split(':')
  const value = ': '+splitcolon[1]
  splitSpace = splitcolon[0].split(' ')
const getData = select(splitSpace, data)
if( 'ph' in getData || 'tele' in getData){
  console.log(getData)
  const telephone = [getData.ph]
  const output = select(telephone, data)
  if( '#' in getData ){
    const finalOutput = output.telephone.map((values)=>{
      return values + getData['#'] + value
    }).concat(getData.ph + getData['#'] + value).join(' \n')
    console.log(finalOutput)
  }else if('No' in getData){
    const finalOutput = output.telephone.map((values)=>{
      return values + getData['No'] + value
    }).concat(getData.ph + getData['No'] + value).join(' \n')
    console.log(finalOutput)
  }
  else{
    const finalOutput = output.telephone.map((values)=>{
      return values + value
    }).concat(getData.ph + value).join(' \n')
    console.log(finalOutput)
  }
}else{
  const finalOutput = Object.values(getData).join(' ') + value 
  console.log(finalOutput)
}
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});

function select(arr, obj) {
    for (var k in obj) {
      return arr.reduce((o, c) => {
        if (obj.hasOwnProperty(c)) {
          o[c] = obj[c]
        }
        return o
      }, {})
    }
  }