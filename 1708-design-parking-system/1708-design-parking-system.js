/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parkingMap = new Map();
    this.parkingMap.set(1, big);
    this.parkingMap.set(2, medium);
    this.parkingMap.set(3, small);
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    //View if carType has left over parking spot
    //If so, "park" car and remove parking from map
    if(this.parkingMap.get(carType) > 0) {
        this.parkingMap.set(carType, this.parkingMap.get(carType)-1);
        return true;
    } else { //return false
        return false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */