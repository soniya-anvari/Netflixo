const shortenTitle = (title) => {
    const splitTitle = title.split(" ");
    return splitTitle.slice(0, 3).join(" ")

}
const totalItems = (items) => {
    let total = 0;
    items.map(item => total += 1)
    return total

}
export { shortenTitle, totalItems }