printjson(
    db.people.insert(
        {
            "sex": "Male",
            "first_name": "Mateusz",
            "last_name": "Łuniewski",
            "job": "Fullstack Developer",
            "email": "s21505@pjwstk.edu.pl",
            "location": {
                "city": "Warsaw",
                "address": {
                    "streetname": "Grzyma",
                    "streetnumber": "18"
                }
            },
            "description": "Opis",
            "height": "183",
            "weight": "80",
            "birth_date": "1997-08-04T12:12:12Z",
            "nationality": "Poland",
            "credit": [
                {
                    "type": "millenium",
                    "number": "12345678912345678",
                    "currency": "PLN",
                    "balance": "100000"
                }
            ]
        }
    )
)