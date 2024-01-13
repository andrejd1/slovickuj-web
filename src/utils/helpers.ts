export const getUniqueElementsFromArrays = (
  array1: string[],
  array2: string[],
) => {
  const combinedArray = array1.concat(array2);

  return combinedArray.filter((element, index, array) => {
    return (
      array.indexOf(element) === index && // Check for the first occurrence
      array.lastIndexOf(element) === index
    );
  });
};
