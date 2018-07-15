function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(event) {
    return new Handlebars.SafeString(
        '<li>' + event + '</li>');
    });

}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
  displayForm()
})

function displayForm() {
  var recipeForm = document.getElementById("recipe-form")
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  recipeForm.innerHTML = template()
}

function displayEditForm() {
  var recipeForm = document.getElementById("recipe-form")
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template(recipe);
  editForm.innerHTML = html;
}

function createRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value

  }
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var html = template(recipe)
  document.getElementsByTagName("main").innerHTML;
}

function editRecipe() {

}
