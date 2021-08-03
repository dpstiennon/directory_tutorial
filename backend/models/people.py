from backend.db import db
from sqlalchemy import Column


class People(db.Model):
    __tablename__ = 'people'

    name = Column(db.Text)
    address = Column(db.Text)
    email = Column(db.Text)
    id = Column(db.Integer, primary_key=True)
    deleted = Column(db.Boolean)
    account_id = Column('fk_account_id',
                        db.Integer,
                        db.ForeignKey('accounts.id'),
                        nullable=True,
                        )
    account = db.relationship('Accounts', lazy=False)

    def to_json(self):
        return dict(
            name=self.name,
            id=self.id,
            address=self.address,
            email=self.email,
            deleted=self.deleted
        )
