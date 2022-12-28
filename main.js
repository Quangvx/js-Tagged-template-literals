// function heightlight([first,...strings],...values) {

//   return values.reduce( function(initialValue, currentValue) 
// { return [...initialValue ,` <span> ${currentValue}</span>`, strings.shift() ] },
//    [first] ).join(' ')
  
//   }
  
//   var brand = 'F8';
//    var course = 'Javascript';


  
//   const html = `Học lập trình ${course} tại ${brand} !`;
  
//   console.log(html);

  function heightlight([first, …strings],…values) {

    return values.reduce( function(initialValue, currentValue)
   { return [ …initialValue , <span> ${currentValue}</span>, strings.shift() ] },
   [first] ).join(’ ')
    
    }
    
    var brand = ‘F8’; var course = ‘Javascript’;
    
    const html = heightlightHọc lập trình ${course} tại ${brand} !;
    
    console.log(html);

  // 