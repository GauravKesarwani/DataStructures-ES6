'use strict';

/*
  Objects: Vehicle, Level, Parking Lot

  // Qs. Can I assume equal size spots.!! 
  For this implementation I am assuming the same size spots.

*/



const VehicleSize = {
  Large: Symbol('Bus'),
  Medium: Symbol('Car'),
  Small: Symbol('MotorCycle')
}

class Vehicle {
  constructor(vehicleNumber) {
    if (this.constructor === Vehicle) {
      throw new TypeError('Abstract class cannot be instantiated');
    }

    this._vehicleNumber = vehicleNumber;
  }

}

class MotorCycle extends Vehicle {
  constructor(vehicleNumber) {
    super(vehicleNumber);
    this._size = VehicleSize.Small;
  }
}

class Bus extends Vehicle {
  constructor(vehicleNumber) {
    super(vehicleNumber);
    this._size = VehicleSize.Large;
  }
}

class Car extends Vehicle {
   constructor(vehicleNumber) {
    super(vehicleNumber);
    this._size = VehicleSize.Large;
  }
}

// Level

class Level {
  constructor(levelId, capacity) {
    this._levelId = levelId;
    this._capacity = capacity;
    this._availableSpots = 0;
  }

  isSpotAvailable(levelId) {
    if (this._availableSpots < this._capacity) {
      return true;
    }
    return false;
  }

  findAvailableSpots(levelId, vehicleSize) {
    //  some random generator generates a free spot among available spots
    // Depending on the size of vehicle it will depend how many spots the vehicle would need
    return freeSpots;

    // if not available then return -1;
  }

  parkAtAvailableSpot(spotId, vehicleNum) {

  }

  spotFreed() {
    this._availableSpots++;
  }
}

// Main class : Parking Lot
class ParkingLot {
  constructor(levelCount) {
    this.levelCount = levelCount;
  }
}

// Parking Spot
class ParkingSpot {
  constructor(levelId, spotId) {
    this._spotId = spotId;
    this._levelId = levelId;    // to which level this spot belongs. Relationship associated with levelId
    this._isAvailable = true;
  }

  isAvailable() {
    // logic to determine if spot is available
  }

  removeVehicleFromSpot() {
    // Remove vehicle from spot and notify level if the spot is now available
  }
}
