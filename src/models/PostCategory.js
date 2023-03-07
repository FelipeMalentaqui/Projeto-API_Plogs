module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) =>  {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', // as 'blogCategories',
      through: PostCategory,
      foreignKey: 'postId',   // a coluna representada na tabela posts_categories
      otherKey: 'categoryId', // e a outra coluna representada na tabela posts_categories
    });

    /*
    Lembre-se: foreignKey sempre se refere ao model em que chamamos belongsToMany,
    enquanto otherKey se refere ao model com o qual estamos criando a associação. 
    */

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};