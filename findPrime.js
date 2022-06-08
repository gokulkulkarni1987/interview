const simpleSieve = (maxNumber, primeNumbers) => {

  const primes = [];
  for(let i = 0; i <= maxNumber; i++) {
    primes[i] = true;
  }
  
  primes[0] = false;
  primes[1] = false;

  for (let p = 2; p * p <= maxNumber; p++) {
    if(primes[p]) {
      for(let i = p * p; i <= maxNumber; i += p) {
        primes[i] = false;
      }
    }
  }

  for(let i = 0; i <= maxNumber; i++) {
    if(primes[i]) {
      primeNumbers[i] = i;
      console.log(`${i} is a prime number`);
    }
  }
}

const segmentedSieve = (maxNumber) => {

  const limit = Math.floor(Math.sqrt(maxNumber));
  const primeNumbers = [];
  simpleSieve(limit, primeNumbers);
  let low = limit;
  let high = low + limit;

  while(low < maxNumber) {
    if(high >= maxNumber) {
      high = maxNumber;
    }

    const mark = [];
    for (let i = 0; i <= limit; i++) {
      mark[i] = true;
    }

    for(let i = 0; i < primeNumbers.length; i++) {
      let loLim = Math.floor(low/primeNumbers[i]) * primeNumbers[i];
      if(loLim < low) {
        loLim += primeNumbers[i];
      }

      for(let j = loLim; j < high; j += primeNumbers[i]) {
        mark[j - low] = false;
      }
    }

    for (let i = low; i < high; i++) {
      if(mark[i - low]) {
        console.log(`${i} is prime`);
      }
    }

    low = low + limit;
    high = high + limit;
  }
}

segmentedSieve(50);