import moment from 'moment';

const transformDate = (s) => {
  return moment(s).format('MMM do YYYY')
}

const trimSynopsis = (s) => {
  var maxLength = 200 // maximum number of characters to extract

  //trim the string to the maximum length
  var trimmedString = s.substr(0, maxLength);

  //re-trim if we are in the middle of a word
  return trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
}

export { transformDate, trimSynopsis }