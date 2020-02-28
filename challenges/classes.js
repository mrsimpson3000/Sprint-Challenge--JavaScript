// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(attributes) {
    this.newLength = attributes.length,
      this.newWidth = attributes.width,
      this.newHeight = attributes.height
  }
  volume() {
    return this.newLength * this.newWidth * this.newHeight;
  }
  surfaceArea() {
    return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
  }
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.