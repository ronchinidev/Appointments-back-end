import Sequelize, {Model} from 'sequelize';

class Appointments extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                canceled_at: Sequelize.DATE,
            },
            {
                sequelize,
            },
        );
        return this;
    }
    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
        this.belongsTo(models.User, {foreignKey: 'provider_id', as: 'provider'});
        //Quando há mais de um relacionamento, o apelido é obrigatório.
    }
}

export default Appointments;
