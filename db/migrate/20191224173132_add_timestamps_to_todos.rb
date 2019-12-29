class AddTimestampsToTodos < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :created_at, :datetime
    add_column :todos, :updated_at, :datetime
  end
end
