import { GROCERIES, SHOPPING, LEISURE, BILLS, TAKEAWAY, HOLIODAY, DRINKS, TRANSPORT, UTILITIES } from './transactionCategories'

export const amazonPrime = {
  merchant: 'Amazon Prime',
  category: GROCERIES
}

export const arcadia = {
  merchant: 'Arcadia Group',
  category: SHOPPING
}

export const cdKeys = {
  merchant: 'CDKEYS.COM',
  category: LEISURE
}

export const ee = {
  merchant: 'EE',
  category: BILLS
}

export const jdSports = {
  merchant: 'JD SPORTS',
  category: SHOPPING
}

export const netflix = {
  merchant: 'Netflix',
  category: LEISURE
}

export const uberEats = {
  merchant: 'Uber Eats',
  category: TAKEAWAY
}

export const deliveroo = {
  merchant: 'Deliveroo',
  category: TAKEAWAY
}

export const lastMinute = {
  merchant: 'Lastminute.com',
  category: HOLIODAY
}

export const expedia = {
  merchant: 'Expedia',
  category: HOLIODAY
}

export const opodo = {
  merchant: 'Opodo',
  category: HOLIODAY
}

export const airBnb = {
  merchant: 'AirBnb',
  category: HOLIODAY
}

export const theHarp = {
  merchant: 'The Harp',
  category: DRINKS
}

export const dolphinTavern = {
  merchant: 'The Dolphin Tavern',
  category: DRINKS
}

export const tfl = {
  merchant: 'TFL',
  category: TRANSPORT
}

export const thamesWater = {
  merchant: 'Thames Water',
  category: UTILITIES
}

const merchants = [
  amazonPrime,
  arcadia,
  cdKeys,
  ee,
  jdSports,
  netflix,
  uberEats,
  deliveroo,
  lastMinute,
  expedia,
  opodo,
  airBnb,
  theHarp,
  dolphinTavern,
  tfl,
  thamesWater
]

export default merchants
