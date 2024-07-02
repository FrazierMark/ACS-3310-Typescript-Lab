// We need a Kaiju class
// All Kaiju have name, power and type.
// Kaiju should have a describe method that
// prints: name:<name> type:<type> power:<power>

// Type can be: lizard, flying, or ape.
// Use an enum to define the type

// Be sure to include a constructor in the
// Kaiju class that initializes it's properties!

enum KaijuType {
	lizard = 'Lizard',
	flying = 'Flying',
	ape = 'Ape',
}

class Kaiju {
	constructor(
		public name: string,
		public power: number,
		public type: KaijuType
	) {}

	describe() {
		console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`);
	}
}

export { Kaiju, KaijuType };
