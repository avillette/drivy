'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


//exercise1
var i = 0;
for(i=0;i<cars.length;i++)
{
    console.log(cars[i].id);
}

function DateDiff(d1,d2){
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    var WNbJours = date2.getTime() - date1.getTime();
    return Math.ceil(WNbJours/(1000*60*60*24))+1;
}

function UpdatePrice()
{
    var i = 0;
    var k = 0;
    var priceDay = 0;
    var priceKm = 0;
    var nbJours = 0;
    for(i=0;i<rentals.length;i++)
    {
        for(k=0;k<cars.length;k++)
        {
            if(rentals[i].carId == cars[k].id)
            {
                priceDay = cars[k].pricePerDay;
                priceKm = cars[k].pricePerKm;
            }
        }

        nbJours = DateDiff(rentals[i].pickupDate,rentals[i].returnDate);

        rentals[i].price = nbJours*priceDay + priceKm*rentals[i].distance;


    }
}


function printPrice()
{
    var i = 0;
    for(i=0;i<rentals.length;i++)
    {
        console.log(rentals[i].price);
    }
}

function printDate()
{
    var i = 0;
    for(i=0;i<rentals.length;i++)
    {
        console.log(DateDiff(rentals[i].pickupDate,rentals[i].returnDate));
    }
}



//exercice2

function UpdateNewPrice()
{
    var i = 0;
    var k = 0;
    var priceDay = 0;
    var priceKm = 0;
    var nbJours = 0;
    for(i=0;i<rentals.length;i++)
    {
        for(k=0;k<cars.length;k++)
        {
            if(rentals[i].carId == cars[k].id)
            {
                priceDay = cars[k].pricePerDay;
                priceKm = cars[k].pricePerKm;
            }
        }

        nbJours = DateDiff(rentals[i].pickupDate,rentals[i].returnDate);

        if(nbJours != 1)
        {
            if(nbJours<5)
            {
                rentals[i].price = nbJours*priceDay*0.9 + priceKm*rentals[i].distance;
            }
            if(4<nbJours<11)
            {

                rentals[i].price = nbJours*priceDay*0.7 + priceKm*rentals[i].distance;
            }
            if(10<nbJours)
            {
                rentals[i].price = nbJours*priceDay*0.5 + priceKm*rentals[i].distance;
            }
        }
        else
        {
            rentals[i].price = nbJours*priceDay + priceKm*rentals[i].distance;
        }

    }

}

//exercise 3
function UpdateCommission()
{
    var i = 0;
    var commission = 0;
    for(i=0;i<rentals.length;i++)
    {
        commission = rentals[i].price*0.3;
        rentals[i].commission.insurance = commission*0.5;
        rentals[i].commission.assistance = DateDiff(rentals[i].pickupDate,rentals[i].returnDate);
        rentals[i].commission.drivy = commission - rentals[i].commission.insurance - rentals[i].commission.assistance;
    }
}

function UpdateOption()
{
    var i = 0;
    var suppPrice = 0;
    for(i=0;i<rentals.length;i++)
    {
        if(rentals[i].options.deductibleReduction == true)
        {
            suppPrice = 4*DateDiff(rentals[i].pickupDate,rentals[i].returnDate);
            rentals[i].price += suppPrice;
            rentals[i].commission.drivy += suppPrice;
        }
    }
}










