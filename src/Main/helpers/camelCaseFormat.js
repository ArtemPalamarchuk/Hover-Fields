export const formatCamelCaseToHuman = (camelCase) => {
  const splitted = camelCase.split('')
  return splitted.map((el, index) =>{
    if(index === 0){
      return el.toUpperCase();
    }else if(el === el.toUpperCase() && index !== 0){
      return ` ${el}`
    }
    else{
      return el
    }

  }).join('')
}