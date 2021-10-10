class Car {
    constructor(name, price, image) {
      this.name = name;
      this.price = price;
      this.image = image;
    }
  }

    class CarLot {
        constructor() {
        this.cars = [];
        }
        addCar(car) {
        this.cars.push(car);
        }
        getCars() {
        return this.cars;
        }
    }
    const carLot = new CarLot();
    carLot.addCar(new Car("Tokunbo 2016 Mercedes Benz GLE43", "₦33,000,000", "assets/img/car--1.webp"));
    carLot.addCar(new Car("Tokunbo 2012 Toyota Camry XLE", "₦5,500,000", "assets/img/car--2.webp"));
    carLot.addCar(new Car("Foreign Used 2015 Mercedes Benz GLK350", "₦11,000,000", "assets/img/car--3.webp"));
    carLot.addCar(new Car("Tokunbo Lexus RX350 2018 model", "₦23,000,000", "assets/img/car--4.webp"));
    carLot.addCar(new Car("Toyota Corolla 2010 White", "₦3,500,000", "assets/img/car--5.webp"));
    carLot.addCar(new Car("Foreign Used 2007 Lexus IS250", "₦4,600,000", "assets/img/car--6.webp"));
    carLot.addCar(new Car("Tokunbo 2016 Jaguar F-Type", "₦20,000,000", "assets/img/car--7.webp"));
    carLot.addCar(new Car("Tokunbo 2016 Jaguar F-Type", "₦5,200,000", "assets/img/car--8.webp"));
    carLot.addCar(new Car("Foreign Used 2011 Hyundai Sonata", "₦3,700,000", "assets/img/car--9.webp"));
    carLot.addCar(new Car("Neatly Used 2012 Mercedes Benz GLK350", "₦5,600,000", "assets/img/car--10.webp"));
    carLot.addCar(new Car("Tokunbo 2020 Mercedes Benz GLE450", "₦83,000,000", "assets/img/car--11.webp"));
    carLot.addCar(new Car("Tokunbo 2020 Mercedes Benz GLE450", "₦6,700,000", "assets/img/car--12.webp"));

    

carLot.getCars().forEach(car => {
    const carDiv = document.createElement("div");
    carDiv.style.display = "inline-block";
    carDiv.classList.add("col");
    const carName = document.createElement("h4");
    carName.textContent = car.name;
    const carPrice = document.createElement("h5");
    carPrice.textContent = car.price;
    const carImage = document.createElement("img");
    carImage.src = car.image;
    
    carDiv.appendChild(carImage);
    carDiv.appendChild(carName);
    carDiv.appendChild(carPrice);
    document.getElementById("car-container").appendChild(carDiv);
});

