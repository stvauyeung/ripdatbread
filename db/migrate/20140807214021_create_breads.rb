class CreateBreads < ActiveRecord::Migration
  def change
    create_table :breads do |t|
      t.string :name
      t.string :description
      t.references :user
      t.timestamps
    end
  end
end
