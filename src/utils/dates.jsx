import moment from 'moment'

export const strToDate = (str, format = 'DD/MM/YYYY') => {
  return moment(str, format).toDate()
}

/* export const formatDate = (date, format = 'DD/MM/YYYY') => {
  return moment(date, format).toDate().toLocaleDateString('en-GB')
} */
