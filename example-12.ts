
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

enum Direction {
	'North',
	'South',
	'East',
	'West'
}

// Should having a heading property type Direction

class MapPosition {

	constructor(public heading: Direction) {
		this.heading = heading
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		// set the direction on your property 
		// Print the new direction
		this.heading = newDirection
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `You are heading ${this.heading}`
	}
}

const location = new MapPosition(Direction.North)
console.log(location.describe())
// Might output:
// "You are heading north"
location.move(Direction.East)


export default MapPosition
