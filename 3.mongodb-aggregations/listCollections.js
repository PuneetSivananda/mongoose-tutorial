db = connect('mongodb://localhost:27017/mydb');
console.log(db.persons.count())
