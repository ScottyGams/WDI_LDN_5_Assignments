require 'pry'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'pg'
require 'YahooFinance'


require_relative 'models/db_base'

require_relative 'models/category'

require_relative 'models/portfolio'

require_relative 'models/stock'

require_relative 'controllers/categories_controller'

require_relative 'controllers/portfolios_controller'

require_relative 'controllers/stocks_controller'

get '/' do
	erb :home
end

get '/categories' do
	erb :index
end



#binding.pry