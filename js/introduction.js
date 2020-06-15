function AppViewModel(){
    this.firstName = ko.observable("Egor");
    this.secondName = ko.observable("Antonovich");
    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.secondName();
    }, this);

    this.capitalizeLastName = function () {
        var currentVal = this.secondName();
        this.secondName(currentVal.toUpperCase());
    };

    this.makeLowerCase = function () {
        var currentVal = this.secondName();
        this.secondName(currentVal.toLowerCase());
    };
}

ko.applyBindings(new AppViewModel());