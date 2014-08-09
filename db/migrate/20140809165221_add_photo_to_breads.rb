class AddPhotoToBreads < ActiveRecord::Migration
  def change
    add_column :breads, :photo, :string
  end
end
