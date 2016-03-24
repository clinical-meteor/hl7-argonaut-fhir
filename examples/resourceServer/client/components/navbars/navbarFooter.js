Template.navbarFooter.events({
  'click .libraryStreamButton': function (evt, tmpl) {
    Router.go('/');
  },
  'click .myLibraryButton': function (evt, tmpl) {
    Router.go('/mylibrary');
  },
  'click .newImageButon': function (evt, tmpl) {
    Session.set("selectedImage", false);
    $('#upsertImageModal').modal("show");
  },
  'click .editImageButton': function (evt, tmpl) {
    $('#upsertImageModal').modal("show");
  },
  'click .previewImageButon': function (evt, tmpl) {
    $('#previewImageModal').modal("show");
  },
  'click .deleteImageButton': function (evt, tmpl) {
    $('#deleteImageModal').modal("show");
  }
});
