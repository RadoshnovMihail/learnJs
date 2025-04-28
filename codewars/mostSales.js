function top3(products, amounts, prices){
    const getPrices = amounts.map((e, i) => e * prices[i]); //высчитываем цену
    const getObjectProducts = products.reduce((obj, val, index) =>(obj[val] = getPrices[index], obj), {}); // сопоставляем цену с товаром
    const unique = new Set(Object.values(getObjectProducts).sort((a, b) => b - a).slice(0, 3));
    let result = []
    if(unique.size !== 3){
     Object.keys(getObjectProducts).slice(0, 3).forEach(e => result.push(e));
    } else {
      const sortedKeys = Object.values(getObjectProducts).sort((a, b) => b - a).slice(0, 3);
      for(let i = 0; i < sortedKeys.length; i++){
        for(let key in getObjectProducts){
          if(sortedKeys[i] === getObjectProducts[key]){
            result.push(key);
          }
        }
      }
    }

    
   return result
  }
console.log(top3(['Computer','Cell Phones','Vacuum Cleaner'], [3, 24, 8], [199, 299, 399])); 
console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]))
console.log(top3([ 'Cell Phones',
  'Vacuum Cleaner',
  'Computer',
  'Printer',
  'TVs',
  'Laptops',
  'Tablets',
  'Chargers',
  'Speakers',
  'Games',
  'Music CDs',
  'Radios',
  'Drones',
  'Scooter',
  'Keyboards',
  'Mouses' ],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
  [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ]
))
// Cell Phones,  Vacuum Cleaner, Computer