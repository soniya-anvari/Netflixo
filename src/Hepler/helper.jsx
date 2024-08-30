const shortenTitle = (title) => {
    const splitTitle = title.split(" ");
    return splitTitle.slice(0, 3).join(" ")

}
export { shortenTitle }