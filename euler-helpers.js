function generatePrimeList(max) {
	// Use sieve of eratosthenes
	var sieve = [], i, j, primes = [];
	var primeSum = 0;
	for (i = 2; i <= max; ++i) {
		if (!sieve[i]) {
			// i has not been marked -- it is prime
			primes.push(i);
			for (j = i * 2; j <= max; j += i) {
				sieve[j] = true;
			}
		}
	}	
	return primes;
}

function primeFactorisationNoD(number, primelist) {
	var nod = 1;
	var exponent;
	var remain = number;
 
	for (var i = 0; i < primelist.length; i++) {
		// In case there is a remainder this is a prime factor as well
		// The exponent of that factor is 1
		if (primelist[i] * primelist[i] > number) {
			return nod * 2;
		}
 
		exponent = 1;
		while (remain % primelist[i] == 0) {
			exponent++;
			remain = remain / primelist[i];
		}
		nod *= exponent;
 
		//If there is no remainder, return the count
		if (remain == 1) {
			return nod;
		}
	}
	return nod;
}