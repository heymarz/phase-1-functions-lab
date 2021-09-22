function distanceFromHqInBlocks (blocks){
    let hq = 42;
    if (blocks > hq)
        {return blocks - hq;
        }
    else if (blocks < hq){
        return hq - blocks;
    } 
}

function distanceFromHqInFeet(feet){
    let hq = 42;
    if (feet > hq) {
        return ((feet - hq)*264);
        }
    else if (feet < hq) {
        return ((hq - feet)* 264);
    } 
}

function distanceTravelledInFeet(x, y) {
    if (x > y) {
        return ((x - y) * 264);
    }
    else if (y> x) {
        return ((y - x) * 264);
    }
}

function calculatesFarePrice(start, destination) {
    // clean up cb in easy to read variable
 let distanceInFeet = distanceTravelledInFeet(start, destination);
  // free if less than 400 test case
  if (distanceInFeet <= 400) {
    return 0;
  // 2 cents if between 400 and 2000 test case  
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return 0.02 * (distanceInFeet - 400);
  // 25 bucks if over 2000 but under 2500 test case  
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25;
  // over 2500 test case
  } else {
    return "cannot travel that far";
  }
}
