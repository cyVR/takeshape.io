import ko from "knockout";

var viewModel = function(){
  var model = {
    selected: ko.observable('modeler'),
      setSelected: function (id) {
    return function() {
      model.selected(id);
    }
  },
    className: function(id) {
      return ko.computed(function() {
        return model.selected() === id ? 'slide is-visible' : 'slide';
      });
    }
  };
  return model
}





//var viewModel2 = function(){
//
//  self = this
//
//   this.selected = ko.observable();
//
//   this.setSelected = function(id) {
//    return function() {
//      self.selected(id)
//    };
//  };
//
//  this.className = function(id){
//    console.log(this)
//    return ko.computed(function() {
//      return self.selected() === id ? 'slide is-visible' : 'slide';
//    });
//  };
//
//};



ko.applyBindings(new viewModel(), document.getElementsByClassName('ko')[0]);
ko.applyBindings(new viewModel(), document.getElementsByClassName('ko')[1]);
ko.applyBindings(new viewModel(), document.getElementsByClassName('ko')[2]);




