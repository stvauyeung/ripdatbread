class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :value
      t.references :user
      t.references :bread
      t.timestamps
    end
  end
end
