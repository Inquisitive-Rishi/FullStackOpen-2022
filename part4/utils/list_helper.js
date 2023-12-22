const dummy = (blogs) => {
    return 1;
}

const getTotalLkes = (listLofBlogs) => {
    return listLofBlogs.reduce((a,c) => a + c.likes,0)
}

module.exports = {
    dummy, getTotalLkes
};