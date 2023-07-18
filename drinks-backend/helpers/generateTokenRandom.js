module.exports = () => {
    const randomNumber = Math.random().toString(32).substring(2)
    const date = Date.now().toString(32)

    return randomNumber + date
}