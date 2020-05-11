//task3
	const object1 = {
		name: 'Boris',
		weight: 15
	}

	const object2 = {
		name: 'Boris',
		weight: 15
	}

	const object3 = {
		name: 'Rex',
		weight: 20,
	}

    // Реализуйте функцию isEquivalent
	function isEquivalent(obj1, obj2){
		let arr1 = [],
				arr2 = [] 

		for(let prop in obj1)	arr1.push(obj1[prop])

		for(let prop in obj2) arr2.push(obj2[prop])

		if(arr1.length != arr2.length) return false

		for(let i = 0; i < arr1.length; i++){
			if(arr1[i] != arr2[i]) return false
		}

		return true
	}

	console.log(isEquivalent(object1, object3))
