function AppViewModel(){
    this.firstName = ko.observable("Egor");
    this.secondName = ko.observable("Antonovich");
    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.secondName();
    }, this);
}

ko.applyBindings(new AppViewModel());