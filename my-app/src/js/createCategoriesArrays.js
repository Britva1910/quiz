import { images } from './images';

const createCategoriesArrays = (images) => {
    let categoriesArrays = [];
    const sizeSubarray = 10;
    for (let i = 0; i < images.length; i += sizeSubarray) {
        categoriesArrays.push(images.slice(i, i + sizeSubarray));
        //  categoriesArrays[i] = array.slice((i * sizeSubarray), (i * sizeSubarray) + sizeSubarray);
    }
    return categoriesArrays;
}

export const categoriesArrays = createCategoriesArrays(images);