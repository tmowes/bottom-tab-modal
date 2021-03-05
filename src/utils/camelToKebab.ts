const camelToKebab = (key: string) => {
  const result = key.replace(/([A-Z])/g, ' $1')
  return result.split(' ').join('-').toLowerCase()
}

export default camelToKebab
