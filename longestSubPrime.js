const arr = [3, 5, 2, 66, 7, 11, 8];

const findLongestPrime = (arr) => {
  const finalSubArrays = [][arr.length];
  let finalSubArrayFirstIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    for (let j = 2; j < arr[i] / 2; j++) {
      if(arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {

    }
  }
}

const simpleSieve = (maxNumber, primeNumbers) => {
  let prime = [];
  for(let i = 0; i <= maxNumber; i++) {
    prime.push(true);
  }

  prime[0] = false;
  prime[1] = false;
  
  for (let p = 2; p * p <= maxNumber; p++) {
    if(prime[p]) {
      for (let i = p * p; i <= maxNumber; i += p) {
        prime[i] = false;
      }
    }
  }

  for (let i = 0; i <= maxNumber; i++) {
    if(prime[i]) {
      primeNumbers.push(i);
      console.log(`${i} simple is a prime`);
    }
  }
}

const segmentedSieve = (maxNumber) => {
  let limit = Math.floor(Math.sqrt(maxNumber) + 1);
  const primeNumbers = [];
  simpleSieve(limit, primeNumbers);
  let low = limit;
  let high = 2*limit;
  
  while(low < maxNumber) {
    if(high >= maxNumber) {
      high = maxNumber
    }

    let mark = [];
    for (let i = 0; i < limit + 1; i++) {
      mark[i] = true;
    }

    for (let i = 0; i < primeNumbers.length; i++) {
      // Find the minimum number in [low..high] that is
      // a multiple of prime.get(i) (divisible by prime.get(i))
      // For example, if low is 31 and prime.get(i) is 3,
      // we start with 33.
      let loLim = (Math.floor(low/primeNumbers[i])) * primeNumbers[i];
      if(loLim < low) {
        loLim += primeNumbers[i];
      }
      /*  Mark multiples of prime.get(i) in [low..high]:
      We are marking j - low for j, i.e. each number
      in range [low, high] is mapped to [0, high-low]
      so if range is [50, 100]  marking 50 corresponds
      to marking 0, marking 51 corresponds to 1 and
      so on. In this way we need to allocate space only
      for range  */
      for (let j = loLim; j<high; j += primeNumbers[i]) {
        mark[j-low] = false;
      }
    }

    for (let i = low; i < high; i++) {
      if(mark[i-low]) {
        console.log(`${i} is a prime`);
      }
    }
    low = low + limit;
    high = high + limit;
  }
}

const primeNumbers = [];

// simpleSieve(50, primeNumbers);
segmentedSieve(50);
// console.log('finalPrims: ', primeNumbers);