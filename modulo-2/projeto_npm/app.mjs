import moment from "moment";
moment.locale("pt-BR")
let data = moment().format('D [de] MMM [de] YYYY')
let hora = moment().format('HH:mm:s')
console.log(data)
console.log(hora)