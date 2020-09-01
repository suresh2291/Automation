const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const abbrevation = (question)=>{
  rl.question(question, (input) => {
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
    splitcolon = input.split(':')
    const value = ': '+splitcolon[1]
    splitSpace = splitcolon[0].split(' ')
    const getData = select(splitSpace, data)
    if( 'ph' in getData || 'tele' in getData){
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
        // close the stream
        rl.close();
    });
    
}

abbrevation('Provide input:  ')

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


module.exports = abbrevation


  