export const getNav = (max_pages, current) => {
    const arr = [];
    for (let i = 1, flag = true; i <= max_pages; i++) {
        if((max_pages <= 10) || (current<=5 && (i<=6 || i>=max_pages-3)) ||
               (current>=max_pages-4 && (i<=3 || i>=max_pages-5)) ||
               (current>5 && current<max_pages-4  && (i<=3 || i>=max_pages-2 || i === current
                     || i === current || i === current-1 || i === current+1)))
            {arr.push(i); flag = true;}
        else
            if(flag)
            {
                arr.push(-1);
                flag = !flag;
            }
    }
    return arr;
};
export const limitUsers = [8, 16, 32];