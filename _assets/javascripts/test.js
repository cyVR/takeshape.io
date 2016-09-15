import ko from "knockout";

var viewModel = {

  img1 : {
  class: ko.observable('shown'),
  },

  img2 : {
    class: ko.observable('hidden'),
  },

  img3 : {
    class: ko.observable('hidden'),
  },

  switchImg : function (img) {
    var arr = [viewModel.img1, viewModel.img2, viewModel.img3]

    for (var i=0; i<3; i++) {
      arr[i].class('hidden')
    }
    img.class('shown');

  }


};


ko.applyBindings(viewModel);

