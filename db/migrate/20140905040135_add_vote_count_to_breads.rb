class AddVoteCountToBreads < ActiveRecord::Migration
  def change
    add_column :breads, :votes_count, :integer, default: 0
  end
end
