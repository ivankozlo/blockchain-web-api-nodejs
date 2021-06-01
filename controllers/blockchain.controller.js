async function blockchain() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000))
  return 'Yay! you hit the correct controller!'
}

module.exports = {
  blockchain,
}
