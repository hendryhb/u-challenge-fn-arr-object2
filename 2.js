function splitting(str) {
    //your code here

    let heroesArray = [];
    let tempStr = '';
    let separator = ',';

    if (!str) {
        return [];
    }

    for (let i = 0; i <= str.length; i++) {
        let perChar = str[i];
        // console.log(perChar, "<< perChar");

        if (perChar !== separator && perChar !== undefined) {
            tempStr += perChar;
        } else {
            heroesArray.push(tempStr);
            tempStr = '';
        }
    }
    // console.log(heroesArray);
    return heroesArray;
}

// console.log(splitting(''));
// console.log(splitting('Razor-Ranged,Invoker-Ranged'));

function meleeRangedGrouping (str) {
  //your code here
  groupHeroes = splitting(str);
//   console.log(groupHeroes, "<< groupHeroes");
  let ranged = [];
  let melee = []
  let separator = '-';

  if (!str) {
    return [];
    }   
  for (let i = 0; i < groupHeroes.length; i++) {
    let eachHero = groupHeroes[i];
    // console.log(eachHero, "<< eachHero");

    let heroName = '';
    let heroType = '';
    let isSeparatorFound = false;

    for (let j = 0; j < eachHero.length; j++) {
        let eachChar = eachHero[j];
        // console.log(eachChar, "<< eachChar");

        if (isSeparatorFound === false && eachChar !== separator) {
            heroName += eachChar;
            // console.log(heroName, "<< heroName");
        } else if (eachChar === separator) {
            isSeparatorFound = true;
        } else {
            heroType += eachChar;
            // console.log(heroType, "<<heroType");
        }
    }
    // console.log(ranged, "<< ranged");
    if (heroType === 'Ranged') {
        ranged.push(heroName);
    } else if (heroType === 'Melee') {
        melee.push(heroName);
    }
  }  
  return [ranged, melee]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []