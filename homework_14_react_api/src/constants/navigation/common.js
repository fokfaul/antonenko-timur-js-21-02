export const init_nav = [1, 2, 3, 4, 5];
export const getNav = (max_pages) => {
    const arr = [];
    for (let i = 1; i <= max_pages; i++) {
       arr.push(i);
    }
    return arr;
};
export const limitUsers = [10, 20, 30];