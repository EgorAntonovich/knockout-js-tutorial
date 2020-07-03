// Class to represent a row in the seat reservation grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function(){
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel(){
    var self = this;

    // Non-editable catalog data - would come from the serve
    self.availableMeals = [
        {mealName: "soup", price: 100},
        {mealName: "cheese", price: 50},
        {mealName: "tee", price: 10},
    ];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bob", self.availableMeals[0])
    ]);

    // Operations
    self.addSeat = function (){
        self.seats.push(new SeatReservation("Egor", self.availableMeals[2])
    )};
}

ko.applyBindings(new ReservationsViewModel());