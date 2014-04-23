class RecipesController < ApplicationController
def index
  @recipes = Recipe.all
end

def show
  @recipe = Recipe.find(params[:id])

end

def new
  @recipe = Recipe.new
  @ingredients = Ingredient.all
  
end

def edit
  @recipe = Recipe.find(params[:id])
  @ingredients = Ingredient.all
end

def update
  @recipe = Recipe.find(params[:id])
  @recipe.update_attributes(params[:recipe])
  redirect_to recipe_path
end

def destroy
  @recipe = Recipe.find(params[:id])
  @category = @recipe.category
  @recipe.destroy

  redirect_to(recipes_path)
end

end