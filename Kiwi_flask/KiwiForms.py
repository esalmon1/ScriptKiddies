from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

#Search Form
class SearchForm(FlaskForm):
    results = StringField('Results', validators=[DataRequired()])
    submit = SubmitField("Submit")
