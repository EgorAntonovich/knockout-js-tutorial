function AppViewModel(){
    this.firstName = ko.observable("Egor");
    this.secondName = ko.observable("Antonovich");
}

ko.applyBindings(new AppViewModel());