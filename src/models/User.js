module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName:DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  // User.associate = (models) => {
  //   User.hasMany(models.BlogPost,
  //     { foreignKey: 'userId',  // quem que eu tenho que colocar nessa foreignKey? | coluna  referente BlogPost
  //     as: 'blog_posts' // quem eu tenho que colocar no as ? | apelido do meu BlogPost
  //   });
  // }

  return User;
};