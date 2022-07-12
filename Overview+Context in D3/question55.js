function makegraphs(colname){
const data = [
    {
  "Car": "Chevrolet Chevelle Malibu",
  "MPG": 18,
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight": 3504,
  "Acceleration": 12,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Buick Skylark 320",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 165,
  "Weight": 3693,
  "Acceleration": 11.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Plymouth Satellite",
  "MPG": 18,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 3436,
  "Acceleration": 11,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "AMC Rebel SST",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 150,
  "Weight": 3433,
  "Acceleration": 12,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Ford Torino",
  "MPG": 17,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 140,
  "Weight": 3449,
  "Acceleration": 10.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Ford Galaxie 500",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 429,
  "Horsepower": 198,
  "Weight": 4341,
  "Acceleration": 10,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Chevrolet Impala",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 454,
  "Horsepower": 220,
  "Weight": 4354,
  "Acceleration": 9,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Plymouth Fury iii",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 440,
  "Horsepower": 215,
  "Weight": 4312,
  "Acceleration": 8.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Pontiac Catalina",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 455,
  "Horsepower": 225,
  "Weight": 4425,
  "Acceleration": 10,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "AMC Ambassador DPL",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 390,
  "Horsepower": 190,
  "Weight": 3850,
  "Acceleration": 8.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Citroen DS-21 Pallas",
  "MPG": 0,
  "Cylinders": 4,
  "Displacement": 133,
  "Horsepower": 115,
  "Weight": 3090,
  "Acceleration": 17.5,
  "Model": 70,
  "Origin": "Europe"
},
{
  "Car": "Chevrolet Chevelle Concours (sw)",
  "MPG": 0,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 165,
  "Weight": 4142,
  "Acceleration": 11.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Ford Torino (sw)",
  "MPG": 0,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 153,
  "Weight": 4034,
  "Acceleration": 11,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Plymouth Satellite (sw)",
  "MPG": 0,
  "Cylinders": 8,
  "Displacement": 383,
  "Horsepower": 175,
  "Weight": 4166,
  "Acceleration": 10.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "AMC Rebel SST (sw)",
  "MPG": 0,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 175,
  "Weight": 3850,
  "Acceleration": 11,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Dodge Challenger SE",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 383,
  "Horsepower": 170,
  "Weight": 3563,
  "Acceleration": 10,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Plymouth 'Cuda 340",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 340,
  "Horsepower": 160,
  "Weight": 3609,
  "Acceleration": 8,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Ford Mustang Boss 302",
  "MPG": 0,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 140,
  "Weight": 3353,
  "Acceleration": 8,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Chevrolet Monte Carlo",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 150,
  "Weight": 3761,
  "Acceleration": 9.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Buick Estate Wagon (sw)",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 455,
  "Horsepower": 225,
  "Weight": 3086,
  "Acceleration": 10,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla Mark ii",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 113,
  "Horsepower": 95,
  "Weight": 2372,
  "Acceleration": 15,
  "Model": 70,
  "Origin": "Japan"
},
{
  "Car": "Plymouth Duster",
  "MPG": 22,
  "Cylinders": 6,
  "Displacement": 198,
  "Horsepower": 95,
  "Weight": 2833,
  "Acceleration": 15.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "AMC Hornet",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 199,
  "Horsepower": 97,
  "Weight": 2774,
  "Acceleration": 15.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Ford Maverick",
  "MPG": 21,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 85,
  "Weight": 2587,
  "Acceleration": 16,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Datsun PL510",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 88,
  "Weight": 2130,
  "Acceleration": 14.5,
  "Model": 70,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen 1131 Deluxe Sedan",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 46,
  "Weight": 1835,
  "Acceleration": 20.5,
  "Model": 70,
  "Origin": "Europe"
},
{
  "Car": "Peugeot 504",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 110,
  "Horsepower": 87,
  "Weight": 2672,
  "Acceleration": 17.5,
  "Model": 70,
  "Origin": "Europe"
},
{
  "Car": "Audi 100 LS",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 90,
  "Weight": 2430,
  "Acceleration": 14.5,
  "Model": 70,
  "Origin": "Europe"
},
{
  "Car": "Saab 99e",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 104,
  "Horsepower": 95,
  "Weight": 2375,
  "Acceleration": 17.5,
  "Model": 70,
  "Origin": "Europe"
},
{
  "Car": "BMW 2002",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 113,
  "Weight": 2234,
  "Acceleration": 12.5,
  "Model": 70,
  "Origin": "Europe"
},
{
  "Car": "AMC Gremlin",
  "MPG": 21,
  "Cylinders": 6,
  "Displacement": 199,
  "Horsepower": 90,
  "Weight": 2648,
  "Acceleration": 15,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Ford F250",
  "MPG": 10,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 215,
  "Weight": 4615,
  "Acceleration": 14,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Chevy C20",
  "MPG": 10,
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 200,
  "Weight": 4376,
  "Acceleration": 15,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Dodge D200",
  "MPG": 11,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 210,
  "Weight": 4382,
  "Acceleration": 13.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Hi 1200D",
  "MPG": 9,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 193,
  "Weight": 4732,
  "Acceleration": 18.5,
  "Model": 70,
  "Origin": "US"
},
{
  "Car": "Datsun PL510",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 88,
  "Weight": 2130,
  "Acceleration": 14.5,
  "Model": 71,
  "Origin": "Japan"
},
{
  "Car": "Chevrolet Vega 2300",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 90,
  "Weight": 2264,
  "Acceleration": 15.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 113,
  "Horsepower": 95,
  "Weight": 2228,
  "Acceleration": 14,
  "Model": 71,
  "Origin": "Japan"
},
{
  "Car": "Ford Pinto",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 0,
  "Weight": 2046,
  "Acceleration": 19,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Volkswagen Super Beetle 117",
  "MPG": 0,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 48,
  "Weight": 1978,
  "Acceleration": 20,
  "Model": 71,
  "Origin": "Europe"
},
{
  "Car": "AMC Gremlin",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 100,
  "Weight": 2634,
  "Acceleration": 13,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Plymouth Satellite Custom",
  "MPG": 16,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 105,
  "Weight": 3439,
  "Acceleration": 15.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Chevrolet Chevelle Malibu",
  "MPG": 17,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 100,
  "Weight": 3329,
  "Acceleration": 15.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Ford Torino 500",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 88,
  "Weight": 3302,
  "Acceleration": 15.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "AMC Matador",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 100,
  "Weight": 3288,
  "Acceleration": 15.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Chevrolet Impala",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 165,
  "Weight": 4209,
  "Acceleration": 12,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Pontiac Catalina Brougham",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 175,
  "Weight": 4464,
  "Acceleration": 11.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Ford Galaxie 500",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 153,
  "Weight": 4154,
  "Acceleration": 13.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Plymouth Fury iii",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4096,
  "Acceleration": 13,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Dodge Monaco (sw)",
  "MPG": 12,
  "Cylinders": 8,
  "Displacement": 383,
  "Horsepower": 180,
  "Weight": 4955,
  "Acceleration": 11.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Ford Country Squire (sw)",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 170,
  "Weight": 4746,
  "Acceleration": 12,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Pontiac Safari (sw)",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 175,
  "Weight": 5140,
  "Acceleration": 12,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "AMC Hornet Sportabout (sw)",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 258,
  "Horsepower": 110,
  "Weight": 2962,
  "Acceleration": 13.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Chevrolet Vega (sw)",
  "MPG": 22,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 72,
  "Weight": 2408,
  "Acceleration": 19,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Pontiac Firebird",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 100,
  "Weight": 3282,
  "Acceleration": 15,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Ford Mustang",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 88,
  "Weight": 3139,
  "Acceleration": 14.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Mercury Capri 2000",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 86,
  "Weight": 2220,
  "Acceleration": 14,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Opel 1900",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 116,
  "Horsepower": 90,
  "Weight": 2123,
  "Acceleration": 14,
  "Model": 71,
  "Origin": "Europe"
},
{
  "Car": "Peugeot 304",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 70,
  "Weight": 2074,
  "Acceleration": 19.5,
  "Model": 71,
  "Origin": "Europe"
},
{
  "Car": "Fiat 124B",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 88,
  "Horsepower": 76,
  "Weight": 2065,
  "Acceleration": 14.5,
  "Model": 71,
  "Origin": "Europe"
},
{
  "Car": "Toyota Corolla 1200",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 71,
  "Horsepower": 65,
  "Weight": 1773,
  "Acceleration": 19,
  "Model": 71,
  "Origin": "Japan"
},
{
  "Car": "Datsun 1200",
  "MPG": 35,
  "Cylinders": 4,
  "Displacement": 72,
  "Horsepower": 69,
  "Weight": 1613,
  "Acceleration": 18,
  "Model": 71,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen Model 111",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 60,
  "Weight": 1834,
  "Acceleration": 19,
  "Model": 71,
  "Origin": "Europe"
},
{
  "Car": "Plymouth Cricket",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 70,
  "Weight": 1955,
  "Acceleration": 20.5,
  "Model": 71,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla Hardtop",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 113,
  "Horsepower": 95,
  "Weight": 2278,
  "Acceleration": 15.5,
  "Model": 72,
  "Origin": "Japan"
},
{
  "Car": "Dodge Colt Hardtop",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 97.5,
  "Horsepower": 80,
  "Weight": 2126,
  "Acceleration": 17,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Volkswagen Type 3",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 54,
  "Weight": 2254,
  "Acceleration": 23.5,
  "Model": 72,
  "Origin": "Europe"
},
{
  "Car": "Chevrolet Vega",
  "MPG": 20,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 90,
  "Weight": 2408,
  "Acceleration": 19.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Ford Pinto Runabout",
  "MPG": 21,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 86,
  "Weight": 2226,
  "Acceleration": 16.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Chevrolet Impala",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 165,
  "Weight": 4274,
  "Acceleration": 12,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Pontiac Catalina",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 175,
  "Weight": 4385,
  "Acceleration": 12,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Plymouth Fury III",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4135,
  "Acceleration": 13.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Ford Galaxie 500",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 153,
  "Weight": 4129,
  "Acceleration": 13,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "AMC Ambassador SST",
  "MPG": 17,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 150,
  "Weight": 3672,
  "Acceleration": 11.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Mercury Marquis",
  "MPG": 11,
  "Cylinders": 8,
  "Displacement": 429,
  "Horsepower": 208,
  "Weight": 4633,
  "Acceleration": 11,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Buick LeSabre Custom",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 155,
  "Weight": 4502,
  "Acceleration": 13.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Delta 88 Royale",
  "MPG": 12,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 160,
  "Weight": 4456,
  "Acceleration": 13.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Chrysler Newport Royal",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 190,
  "Weight": 4422,
  "Acceleration": 12.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Mazda RX2 Coupe",
  "MPG": 19,
  "Cylinders": 3,
  "Displacement": 70,
  "Horsepower": 97,
  "Weight": 2330,
  "Acceleration": 13.5,
  "Model": 72,
  "Origin": "Japan"
},
{
  "Car": "AMC Matador (sw)",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 150,
  "Weight": 3892,
  "Acceleration": 12.5,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Chevrolet Chevelle Concours (sw)",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight": 4098,
  "Acceleration": 14,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Ford Gran Torino (sw)",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 140,
  "Weight": 4294,
  "Acceleration": 16,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Plymouth Satellite Custom (sw)",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4077,
  "Acceleration": 14,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Volvo 145e (sw)",
  "MPG": 18,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 112,
  "Weight": 2933,
  "Acceleration": 14.5,
  "Model": 72,
  "Origin": "Europe"
},
{
  "Car": "Volkswagen 411 (sw)",
  "MPG": 22,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 76,
  "Weight": 2511,
  "Acceleration": 18,
  "Model": 72,
  "Origin": "Europe"
},
{
  "Car": "Peugeot 504 (sw)",
  "MPG": 21,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 87,
  "Weight": 2979,
  "Acceleration": 19.5,
  "Model": 72,
  "Origin": "Europe"
},
{
  "Car": "Renault 12 (sw)",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 96,
  "Horsepower": 69,
  "Weight": 2189,
  "Acceleration": 18,
  "Model": 72,
  "Origin": "Europe"
},
{
  "Car": "Ford Pinto (sw)",
  "MPG": 22,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 86,
  "Weight": 2395,
  "Acceleration": 16,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Datsun 510 (sw)",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 92,
  "Weight": 2288,
  "Acceleration": 17,
  "Model": 72,
  "Origin": "Japan"
},
{
  "Car": "Toyota Corolla Mark II (sw)",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 97,
  "Weight": 2506,
  "Acceleration": 14.5,
  "Model": 72,
  "Origin": "Japan"
},
{
  "Car": "Dodge Colt (sw)",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 80,
  "Weight": 2164,
  "Acceleration": 15,
  "Model": 72,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla 1600 (sw)",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 88,
  "Weight": 2100,
  "Acceleration": 16.5,
  "Model": 72,
  "Origin": "Japan"
},
{
  "Car": "Buick Century 350",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 175,
  "Weight": 4100,
  "Acceleration": 13,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "AMC Matador",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 150,
  "Weight": 3672,
  "Acceleration": 11.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Chevrolet Malibu",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 145,
  "Weight": 3988,
  "Acceleration": 13,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Ford Gran Torino",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 137,
  "Weight": 4042,
  "Acceleration": 14.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Dodge Coronet Custom",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 3777,
  "Acceleration": 12.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Mercury Marquis Brougham",
  "MPG": 12,
  "Cylinders": 8,
  "Displacement": 429,
  "Horsepower": 198,
  "Weight": 4952,
  "Acceleration": 11.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Chevrolet Caprice Classic",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 150,
  "Weight": 4464,
  "Acceleration": 12,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Ford LTD",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 158,
  "Weight": 4363,
  "Acceleration": 13,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Plymouth Fury Gran Sedan",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4237,
  "Acceleration": 14.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Chrysler New Yorker Brougham",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 440,
  "Horsepower": 215,
  "Weight": 4735,
  "Acceleration": 11,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Buick Electra 225 Custom",
  "MPG": 12,
  "Cylinders": 8,
  "Displacement": 455,
  "Horsepower": 225,
  "Weight": 4951,
  "Acceleration": 11,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "AMC Ambassador Brougham",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 175,
  "Weight": 3821,
  "Acceleration": 11,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Plymouth Valiant",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 105,
  "Weight": 3121,
  "Acceleration": 16.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Chevrolet Nova Custom",
  "MPG": 16,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 100,
  "Weight": 3278,
  "Acceleration": 18,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "AMC Hornet",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 100,
  "Weight": 2945,
  "Acceleration": 16,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Ford Maverick",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 88,
  "Weight": 3021,
  "Acceleration": 16.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Plymouth Duster",
  "MPG": 23,
  "Cylinders": 6,
  "Displacement": 198,
  "Horsepower": 95,
  "Weight": 2904,
  "Acceleration": 16,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Volkswagen Super Beetle",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 46,
  "Weight": 1950,
  "Acceleration": 21,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Chevrolet Impala",
  "MPG": 11,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 150,
  "Weight": 4997,
  "Acceleration": 14,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Ford Country",
  "MPG": 12,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 167,
  "Weight": 4906,
  "Acceleration": 12.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Plymouth Custom Suburb",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 170,
  "Weight": 4654,
  "Acceleration": 13,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Vista Cruiser",
  "MPG": 12,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 180,
  "Weight": 4499,
  "Acceleration": 12.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "AMC Gremlin",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 100,
  "Weight": 2789,
  "Acceleration": 15,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Toyota Camry",
  "MPG": 20,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 88,
  "Weight": 2279,
  "Acceleration": 19,
  "Model": 73,
  "Origin": "Japan"
},
{
  "Car": "Chevrolet Vega",
  "MPG": 21,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 72,
  "Weight": 2401,
  "Acceleration": 19.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Datsun 610",
  "MPG": 22,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 94,
  "Weight": 2379,
  "Acceleration": 16.5,
  "Model": 73,
  "Origin": "Japan"
},
{
  "Car": "Mazda RX3",
  "MPG": 18,
  "Cylinders": 3,
  "Displacement": 70,
  "Horsepower": 90,
  "Weight": 2124,
  "Acceleration": 13.5,
  "Model": 73,
  "Origin": "Japan"
},
{
  "Car": "Ford Pinto",
  "MPG": 19,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 85,
  "Weight": 2310,
  "Acceleration": 18.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Mercury Capri v6",
  "MPG": 21,
  "Cylinders": 6,
  "Displacement": 155,
  "Horsepower": 107,
  "Weight": 2472,
  "Acceleration": 14,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Fiat 124 Sport Coupe",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 90,
  "Weight": 2265,
  "Acceleration": 15.5,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Chevrolet Monte Carlo S",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 145,
  "Weight": 4082,
  "Acceleration": 13,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Pontiac Grand Prix",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 230,
  "Weight": 4278,
  "Acceleration": 9.5,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Fiat 128",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 68,
  "Horsepower": 49,
  "Weight": 1867,
  "Acceleration": 19.5,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Opel Manta",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 116,
  "Horsepower": 75,
  "Weight": 2158,
  "Acceleration": 15.5,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Audi 100LS",
  "MPG": 20,
  "Cylinders": 4,
  "Displacement": 114,
  "Horsepower": 91,
  "Weight": 2582,
  "Acceleration": 14,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Volvo 144ea",
  "MPG": 19,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 112,
  "Weight": 2868,
  "Acceleration": 15.5,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Dodge Dart Custom",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 3399,
  "Acceleration": 11,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Saab 99le",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 110,
  "Weight": 2660,
  "Acceleration": 14,
  "Model": 73,
  "Origin": "Europe"
},
{
  "Car": "Toyota Mark II",
  "MPG": 20,
  "Cylinders": 6,
  "Displacement": 156,
  "Horsepower": 122,
  "Weight": 2807,
  "Acceleration": 13.5,
  "Model": 73,
  "Origin": "Japan"
},
{
  "Car": "Oldsmobile Omega",
  "MPG": 11,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 180,
  "Weight": 3664,
  "Acceleration": 11,
  "Model": 73,
  "Origin": "US"
},
{
  "Car": "Plymouth Duster",
  "MPG": 20,
  "Cylinders": 6,
  "Displacement": 198,
  "Horsepower": 95,
  "Weight": 3102,
  "Acceleration": 16.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Ford Maverick",
  "MPG": 21,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 0,
  "Weight": 2875,
  "Acceleration": 17,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "AMC Hornet",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 100,
  "Weight": 2901,
  "Acceleration": 16,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Chevrolet Nova",
  "MPG": 15,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 100,
  "Weight": 3336,
  "Acceleration": 17,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Datsun B210",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 67,
  "Weight": 1950,
  "Acceleration": 19,
  "Model": 74,
  "Origin": "Japan"
},
{
  "Car": "Ford Pinto",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 80,
  "Weight": 2451,
  "Acceleration": 16.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla 1200",
  "MPG": 32,
  "Cylinders": 4,
  "Displacement": 71,
  "Horsepower": 65,
  "Weight": 1836,
  "Acceleration": 21,
  "Model": 74,
  "Origin": "Japan"
},
{
  "Car": "Chevrolet Vega",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 75,
  "Weight": 2542,
  "Acceleration": 17,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Chevrolet Chevelle Malibu Classic",
  "MPG": 16,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 100,
  "Weight": 3781,
  "Acceleration": 17,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "AMC Matador",
  "MPG": 16,
  "Cylinders": 6,
  "Displacement": 258,
  "Horsepower": 110,
  "Weight": 3632,
  "Acceleration": 18,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Plymouth Satellite Sebring",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 105,
  "Weight": 3613,
  "Acceleration": 16.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Ford Gran Torino",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 140,
  "Weight": 4141,
  "Acceleration": 14,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Buick Century Luxus (sw)",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 150,
  "Weight": 4699,
  "Acceleration": 14.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Dodge Coronet Custom (sw)",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4457,
  "Acceleration": 13.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Ford Gran Torino (sw)",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 140,
  "Weight": 4638,
  "Acceleration": 16,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "AMC Matador (sw)",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 150,
  "Weight": 4257,
  "Acceleration": 15.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Audi Fox",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 83,
  "Weight": 2219,
  "Acceleration": 16.5,
  "Model": 74,
  "Origin": "Europe"
},
{
  "Car": "Volkswagen Dasher",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 67,
  "Weight": 1963,
  "Acceleration": 15.5,
  "Model": 74,
  "Origin": "Europe"
},
{
  "Car": "Opel Manta",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 78,
  "Weight": 2300,
  "Acceleration": 14.5,
  "Model": 74,
  "Origin": "Europe"
},
{
  "Car": "Toyota Corolla",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 76,
  "Horsepower": 52,
  "Weight": 1649,
  "Acceleration": 16.5,
  "Model": 74,
  "Origin": "Japan"
},
{
  "Car": "Datsun 710",
  "MPG": 32,
  "Cylinders": 4,
  "Displacement": 83,
  "Horsepower": 61,
  "Weight": 2003,
  "Acceleration": 19,
  "Model": 74,
  "Origin": "Japan"
},
{
  "Car": "Dodge Colt",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 75,
  "Weight": 2125,
  "Acceleration": 14.5,
  "Model": 74,
  "Origin": "US"
},
{
  "Car": "Fiat 128",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 75,
  "Weight": 2108,
  "Acceleration": 15.5,
  "Model": 74,
  "Origin": "Europe"
},
{
  "Car": "Fiat 124 TC",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 116,
  "Horsepower": 75,
  "Weight": 2246,
  "Acceleration": 14,
  "Model": 74,
  "Origin": "Europe"
},
{
  "Car": "Honda Civic",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 97,
  "Weight": 2489,
  "Acceleration": 15,
  "Model": 74,
  "Origin": "Japan"
},
{
  "Car": "Subaru",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 93,
  "Weight": 2391,
  "Acceleration": 15.5,
  "Model": 74,
  "Origin": "Japan"
},
{
  "Car": "Fiat x1.9",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 67,
  "Weight": 2000,
  "Acceleration": 16,
  "Model": 74,
  "Origin": "Europe"
},
{
  "Car": "Plymouth Valiant Custom",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 95,
  "Weight": 3264,
  "Acceleration": 16,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Chevrolet Nova",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 105,
  "Weight": 3459,
  "Acceleration": 16,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Mercury Monarch",
  "MPG": 15,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 72,
  "Weight": 3432,
  "Acceleration": 21,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Ford Maverick",
  "MPG": 15,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 72,
  "Weight": 3158,
  "Acceleration": 19.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Pontiac Catalina",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 170,
  "Weight": 4668,
  "Acceleration": 11.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Chevrolet Bel Air",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 145,
  "Weight": 4440,
  "Acceleration": 14,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Plymouth Grand Fury",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4498,
  "Acceleration": 14.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Ford LTD",
  "MPG": 14,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 148,
  "Weight": 4657,
  "Acceleration": 13.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Buick Century",
  "MPG": 17,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 110,
  "Weight": 3907,
  "Acceleration": 21,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Chevrolete Chevelle Malibu",
  "MPG": 16,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 105,
  "Weight": 3897,
  "Acceleration": 18.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "AMC Matador",
  "MPG": 15,
  "Cylinders": 6,
  "Displacement": 258,
  "Horsepower": 110,
  "Weight": 3730,
  "Acceleration": 19,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Plymouth Fury",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 95,
  "Weight": 3785,
  "Acceleration": 19,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Buick Skyhawk",
  "MPG": 21,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 110,
  "Weight": 3039,
  "Acceleration": 15,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Chevrolet Monza 2+2",
  "MPG": 20,
  "Cylinders": 8,
  "Displacement": 262,
  "Horsepower": 110,
  "Weight": 3221,
  "Acceleration": 13.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Ford Mustang II",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 129,
  "Weight": 3169,
  "Acceleration": 12,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 75,
  "Weight": 2171,
  "Acceleration": 16,
  "Model": 75,
  "Origin": "Japan"
},
{
  "Car": "Ford Pinto",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 83,
  "Weight": 2639,
  "Acceleration": 17,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "AMC Gremlin",
  "MPG": 20,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 100,
  "Weight": 2914,
  "Acceleration": 16,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Pontiac Astro",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 78,
  "Weight": 2592,
  "Acceleration": 18.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 134,
  "Horsepower": 96,
  "Weight": 2702,
  "Acceleration": 13.5,
  "Model": 75,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen Dasher",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 71,
  "Weight": 2223,
  "Acceleration": 16.5,
  "Model": 75,
  "Origin": "Europe"
},
{
  "Car": "Datsun 710",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 97,
  "Weight": 2545,
  "Acceleration": 17,
  "Model": 75,
  "Origin": "Japan"
},
{
  "Car": "Ford Pinto",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 171,
  "Horsepower": 97,
  "Weight": 2984,
  "Acceleration": 14.5,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 70,
  "Weight": 1937,
  "Acceleration": 14,
  "Model": 75,
  "Origin": "Europe"
},
{
  "Car": "AMC Pacer",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 90,
  "Weight": 3211,
  "Acceleration": 17,
  "Model": 75,
  "Origin": "US"
},
{
  "Car": "Audi 100LS",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 115,
  "Horsepower": 95,
  "Weight": 2694,
  "Acceleration": 15,
  "Model": 75,
  "Origin": "Europe"
},
{
  "Car": "Peugeot 504",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 88,
  "Weight": 2957,
  "Acceleration": 17,
  "Model": 75,
  "Origin": "Europe"
},
{
  "Car": "Volvo 244DL",
  "MPG": 22,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 98,
  "Weight": 2945,
  "Acceleration": 14.5,
  "Model": 75,
  "Origin": "Europe"
},
{
  "Car": "Saab 99LE",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 115,
  "Weight": 2671,
  "Acceleration": 13.5,
  "Model": 75,
  "Origin": "Europe"
},
{
  "Car": "Honda Civic CVCC",
  "MPG": 33,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 53,
  "Weight": 1795,
  "Acceleration": 17.5,
  "Model": 75,
  "Origin": "Japan"
},
{
  "Car": "Fiat 131",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 86,
  "Weight": 2464,
  "Acceleration": 15.5,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Opel 1900",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 116,
  "Horsepower": 81,
  "Weight": 2220,
  "Acceleration": 16.9,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Capri ii",
  "MPG": 25,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 92,
  "Weight": 2572,
  "Acceleration": 14.9,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Dodge Colt",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 79,
  "Weight": 2255,
  "Acceleration": 17.7,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Renault 12tl",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 101,
  "Horsepower": 83,
  "Weight": 2202,
  "Acceleration": 15.3,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Chevrolet Chevelle Malibu Classic",
  "MPG": 17.5,
  "Cylinders": 8,
  "Displacement": 305,
  "Horsepower": 140,
  "Weight": 4215,
  "Acceleration": 13,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Dodge Coronet Brougham",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 4190,
  "Acceleration": 13,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "AMC Matador",
  "MPG": 15.5,
  "Cylinders": 8,
  "Displacement": 304,
  "Horsepower": 120,
  "Weight": 3962,
  "Acceleration": 13.9,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Ford Gran Torino",
  "MPG": 14.5,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 152,
  "Weight": 4215,
  "Acceleration": 12.8,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Plymouth Valiant",
  "MPG": 22,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 100,
  "Weight": 3233,
  "Acceleration": 15.4,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Chevrolet Nova",
  "MPG": 22,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 105,
  "Weight": 3353,
  "Acceleration": 14.5,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Ford Maverick",
  "MPG": 24,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 81,
  "Weight": 3012,
  "Acceleration": 17.6,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "AMC Hornet",
  "MPG": 22.5,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 90,
  "Weight": 3085,
  "Acceleration": 17.6,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Chevrolet Chevette",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 52,
  "Weight": 2035,
  "Acceleration": 22.2,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Chevrolet Woody",
  "MPG": 24.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 60,
  "Weight": 2164,
  "Acceleration": 22.1,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 70,
  "Weight": 1937,
  "Acceleration": 14.2,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Honda Civic",
  "MPG": 33,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 53,
  "Weight": 1795,
  "Acceleration": 17.4,
  "Model": 76,
  "Origin": "Japan"
},
{
  "Car": "Dodge Aspen SE",
  "MPG": 20,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 100,
  "Weight": 3651,
  "Acceleration": 17.7,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Ford Grenada ghia",
  "MPG": 18,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 78,
  "Weight": 3574,
  "Acceleration": 21,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Pontiac Ventura SJ",
  "MPG": 18.5,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 110,
  "Weight": 3645,
  "Acceleration": 16.2,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "AMC Pacer d/l",
  "MPG": 17.5,
  "Cylinders": 6,
  "Displacement": 258,
  "Horsepower": 95,
  "Weight": 3193,
  "Acceleration": 17.8,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit",
  "MPG": 29.5,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 71,
  "Weight": 1825,
  "Acceleration": 12.2,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Datsun B-210",
  "MPG": 32,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 70,
  "Weight": 1990,
  "Acceleration": 17,
  "Model": 76,
  "Origin": "Japan"
},
{
  "Car": "Toyota Corolla",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 75,
  "Weight": 2155,
  "Acceleration": 16.4,
  "Model": 76,
  "Origin": "Japan"
},
{
  "Car": "Ford Pinto",
  "MPG": 26.5,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 72,
  "Weight": 2565,
  "Acceleration": 13.6,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Volvo 245",
  "MPG": 20,
  "Cylinders": 4,
  "Displacement": 130,
  "Horsepower": 102,
  "Weight": 3150,
  "Acceleration": 15.7,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Plymouth Volare Premier v8",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 3940,
  "Acceleration": 13.2,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Peugeot 504",
  "MPG": 19,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 88,
  "Weight": 3270,
  "Acceleration": 21.9,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Toyota Mark II",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 156,
  "Horsepower": 108,
  "Weight": 2930,
  "Acceleration": 15.5,
  "Model": 76,
  "Origin": "Japan"
},
{
  "Car": "Mercedes-Benz 280s",
  "MPG": 16.5,
  "Cylinders": 6,
  "Displacement": 168,
  "Horsepower": 120,
  "Weight": 3820,
  "Acceleration": 16.7,
  "Model": 76,
  "Origin": "Europe"
},
{
  "Car": "Cadillac Seville",
  "MPG": 16.5,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 180,
  "Weight": 4380,
  "Acceleration": 12.1,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Chevrolet C10",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 145,
  "Weight": 4055,
  "Acceleration": 12,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Ford F108",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 130,
  "Weight": 3870,
  "Acceleration": 15,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Dodge D100",
  "MPG": 13,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 150,
  "Weight": 3755,
  "Acceleration": 14,
  "Model": 76,
  "Origin": "US"
},
{
  "Car": "Honda Accord CVCC",
  "MPG": 31.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 68,
  "Weight": 2045,
  "Acceleration": 18.5,
  "Model": 77,
  "Origin": "Japan"
},
{
  "Car": "Buick Opel Isuzu Deluxe",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 111,
  "Horsepower": 80,
  "Weight": 2155,
  "Acceleration": 14.8,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Renault 5 GTL",
  "MPG": 36,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 58,
  "Weight": 1825,
  "Acceleration": 18.6,
  "Model": 77,
  "Origin": "Europe"
},
{
  "Car": "Plymouth Arrow GS",
  "MPG": 25.5,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 96,
  "Weight": 2300,
  "Acceleration": 15.5,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Datsun F-10 Hatchback",
  "MPG": 33.5,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 70,
  "Weight": 1945,
  "Acceleration": 16.8,
  "Model": 77,
  "Origin": "Japan"
},
{
  "Car": "Chevrolet Caprice Classic",
  "MPG": 17.5,
  "Cylinders": 8,
  "Displacement": 305,
  "Horsepower": 145,
  "Weight": 3880,
  "Acceleration": 12.5,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Cutlass Supreme",
  "MPG": 17,
  "Cylinders": 8,
  "Displacement": 260,
  "Horsepower": 110,
  "Weight": 4060,
  "Acceleration": 19,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Dodge Monaco Brougham",
  "MPG": 15.5,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 145,
  "Weight": 4140,
  "Acceleration": 13.7,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Mercury Cougar Brougham",
  "MPG": 15,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 130,
  "Weight": 4295,
  "Acceleration": 14.9,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Chevrolet Concours",
  "MPG": 17.5,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 110,
  "Weight": 3520,
  "Acceleration": 16.4,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Buick Skylark",
  "MPG": 20.5,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 105,
  "Weight": 3425,
  "Acceleration": 16.9,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Plymouth Volare Custom",
  "MPG": 19,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 100,
  "Weight": 3630,
  "Acceleration": 17.7,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Ford Grenada",
  "MPG": 18.5,
  "Cylinders": 6,
  "Displacement": 250,
  "Horsepower": 98,
  "Weight": 3525,
  "Acceleration": 19,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Pontiac Grand Prix LJ",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 180,
  "Weight": 4220,
  "Acceleration": 11.1,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Chevrolet Monte Carlo Landau",
  "MPG": 15.5,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 170,
  "Weight": 4165,
  "Acceleration": 11.4,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Chrysler Cordoba",
  "MPG": 15.5,
  "Cylinders": 8,
  "Displacement": 400,
  "Horsepower": 190,
  "Weight": 4325,
  "Acceleration": 12.2,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Ford Thunderbird",
  "MPG": 16,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 149,
  "Weight": 4335,
  "Acceleration": 14.5,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit Custom",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 78,
  "Weight": 1940,
  "Acceleration": 14.5,
  "Model": 77,
  "Origin": "Europe"
},
{
  "Car": "Pontiac Sunbird Coupe",
  "MPG": 24.5,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 88,
  "Weight": 2740,
  "Acceleration": 16,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla Liftback",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 75,
  "Weight": 2265,
  "Acceleration": 18.2,
  "Model": 77,
  "Origin": "Japan"
},
{
  "Car": "Ford Mustang II 2+2",
  "MPG": 25.5,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 89,
  "Weight": 2755,
  "Acceleration": 15.8,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Chevrolet Chevette",
  "MPG": 30.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 63,
  "Weight": 2051,
  "Acceleration": 17,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Dodge Colt m/m",
  "MPG": 33.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 83,
  "Weight": 2075,
  "Acceleration": 15.9,
  "Model": 77,
  "Origin": "US"
},
{
  "Car": "Subaru DL",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 67,
  "Weight": 1985,
  "Acceleration": 16.4,
  "Model": 77,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen Dasher",
  "MPG": 30.5,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 78,
  "Weight": 2190,
  "Acceleration": 14.1,
  "Model": 77,
  "Origin": "Europe"
},
{
  "Car": "Datsun 810",
  "MPG": 22,
  "Cylinders": 6,
  "Displacement": 146,
  "Horsepower": 97,
  "Weight": 2815,
  "Acceleration": 14.5,
  "Model": 77,
  "Origin": "Japan"
},
{
  "Car": "BMW 320i",
  "MPG": 21.5,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 110,
  "Weight": 2600,
  "Acceleration": 12.8,
  "Model": 77,
  "Origin": "Europe"
},
{
  "Car": "Mazda RX-4",
  "MPG": 21.5,
  "Cylinders": 3,
  "Displacement": 80,
  "Horsepower": 110,
  "Weight": 2720,
  "Acceleration": 13.5,
  "Model": 77,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen Rabbit Custom Diesel",
  "MPG": 43.1,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 48,
  "Weight": 1985,
  "Acceleration": 21.5,
  "Model": 78,
  "Origin": "Europe"
},
{
  "Car": "Ford Fiesta",
  "MPG": 36.1,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 66,
  "Weight": 1800,
  "Acceleration": 14.4,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Mazda GLC Deluxe",
  "MPG": 32.8,
  "Cylinders": 4,
  "Displacement": 78,
  "Horsepower": 52,
  "Weight": 1985,
  "Acceleration": 19.4,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Datsun B210 GX",
  "MPG": 39.4,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 70,
  "Weight": 2070,
  "Acceleration": 18.6,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Honda Civic CVCC",
  "MPG": 36.1,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 60,
  "Weight": 1800,
  "Acceleration": 16.4,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Oldsmobile Cutlass Salon Brougham",
  "MPG": 19.9,
  "Cylinders": 8,
  "Displacement": 260,
  "Horsepower": 110,
  "Weight": 3365,
  "Acceleration": 15.5,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Dodge Diplomat",
  "MPG": 19.4,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 140,
  "Weight": 3735,
  "Acceleration": 13.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Mercury Monarch ghia",
  "MPG": 20.2,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 139,
  "Weight": 3570,
  "Acceleration": 12.8,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Pontiac Phoenix LJ",
  "MPG": 19.2,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 105,
  "Weight": 3535,
  "Acceleration": 19.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Chevrolet Malibu",
  "MPG": 20.5,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 95,
  "Weight": 3155,
  "Acceleration": 18.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Ford Fairmont (auto)",
  "MPG": 20.2,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 85,
  "Weight": 2965,
  "Acceleration": 15.8,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Ford Fairmont (man)",
  "MPG": 25.1,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 88,
  "Weight": 2720,
  "Acceleration": 15.4,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Plymouth Volare",
  "MPG": 20.5,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 100,
  "Weight": 3430,
  "Acceleration": 17.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "AMC Concord",
  "MPG": 19.4,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 90,
  "Weight": 3210,
  "Acceleration": 17.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Buick Century Special",
  "MPG": 20.6,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 105,
  "Weight": 3380,
  "Acceleration": 15.8,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Mercury Zephyr",
  "MPG": 20.8,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 85,
  "Weight": 3070,
  "Acceleration": 16.7,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Dodge Aspen",
  "MPG": 18.6,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 110,
  "Weight": 3620,
  "Acceleration": 18.7,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "AMC Concord d/l",
  "MPG": 18.1,
  "Cylinders": 6,
  "Displacement": 258,
  "Horsepower": 120,
  "Weight": 3410,
  "Acceleration": 15.1,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Chevrolet Monte Carlo Landau",
  "MPG": 19.2,
  "Cylinders": 8,
  "Displacement": 305,
  "Horsepower": 145,
  "Weight": 3425,
  "Acceleration": 13.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Buick Regal Sport Coupe (turbo)",
  "MPG": 17.7,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 165,
  "Weight": 3445,
  "Acceleration": 13.4,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Ford Futura",
  "MPG": 18.1,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 139,
  "Weight": 3205,
  "Acceleration": 11.2,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Dodge Magnum XE",
  "MPG": 17.5,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 140,
  "Weight": 4080,
  "Acceleration": 13.7,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Chevrolet Chevette",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 68,
  "Weight": 2155,
  "Acceleration": 16.5,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Toyota Corolla",
  "MPG": 27.5,
  "Cylinders": 4,
  "Displacement": 134,
  "Horsepower": 95,
  "Weight": 2560,
  "Acceleration": 14.2,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Datsun 510",
  "MPG": 27.2,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 97,
  "Weight": 2300,
  "Acceleration": 14.7,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Dodge Omni",
  "MPG": 30.9,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 75,
  "Weight": 2230,
  "Acceleration": 14.5,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Toyota Celica GT Liftback",
  "MPG": 21.1,
  "Cylinders": 4,
  "Displacement": 134,
  "Horsepower": 95,
  "Weight": 2515,
  "Acceleration": 14.8,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Plymouth Sapporo",
  "MPG": 23.2,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 105,
  "Weight": 2745,
  "Acceleration": 16.7,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Starfire SX",
  "MPG": 23.8,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 85,
  "Weight": 2855,
  "Acceleration": 17.6,
  "Model": 78,
  "Origin": "US"
},
{
  "Car": "Datsun 200-SX",
  "MPG": 23.9,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 97,
  "Weight": 2405,
  "Acceleration": 14.9,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Audi 5000",
  "MPG": 20.3,
  "Cylinders": 5,
  "Displacement": 131,
  "Horsepower": 103,
  "Weight": 2830,
  "Acceleration": 15.9,
  "Model": 78,
  "Origin": "Europe"
},
{
  "Car": "Volvo 264gl",
  "MPG": 17,
  "Cylinders": 6,
  "Displacement": 163,
  "Horsepower": 125,
  "Weight": 3140,
  "Acceleration": 13.6,
  "Model": 78,
  "Origin": "Europe"
},
{
  "Car": "Saab 99gle",
  "MPG": 21.6,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 115,
  "Weight": 2795,
  "Acceleration": 15.7,
  "Model": 78,
  "Origin": "Europe"
},
{
  "Car": "Peugeot 604sl",
  "MPG": 16.2,
  "Cylinders": 6,
  "Displacement": 163,
  "Horsepower": 133,
  "Weight": 3410,
  "Acceleration": 15.8,
  "Model": 78,
  "Origin": "Europe"
},
{
  "Car": "Volkswagen Scirocco",
  "MPG": 31.5,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 71,
  "Weight": 1990,
  "Acceleration": 14.9,
  "Model": 78,
  "Origin": "Europe"
},
{
  "Car": "Honda Accord LX",
  "MPG": 29.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 68,
  "Weight": 2135,
  "Acceleration": 16.6,
  "Model": 78,
  "Origin": "Japan"
},
{
  "Car": "Pontiac Lemans V6",
  "MPG": 21.5,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 115,
  "Weight": 3245,
  "Acceleration": 15.4,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Mercury Zephyr 6",
  "MPG": 19.8,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 85,
  "Weight": 2990,
  "Acceleration": 18.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Ford Fairmont 4",
  "MPG": 22.3,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 88,
  "Weight": 2890,
  "Acceleration": 17.3,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "AMC Concord DL 6",
  "MPG": 20.2,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 90,
  "Weight": 3265,
  "Acceleration": 18.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Dodge Aspen 6",
  "MPG": 20.6,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 110,
  "Weight": 3360,
  "Acceleration": 16.6,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Chevrolet Caprice Classic",
  "MPG": 17,
  "Cylinders": 8,
  "Displacement": 305,
  "Horsepower": 130,
  "Weight": 3840,
  "Acceleration": 15.4,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Ford LTD Landau",
  "MPG": 17.6,
  "Cylinders": 8,
  "Displacement": 302,
  "Horsepower": 129,
  "Weight": 3725,
  "Acceleration": 13.4,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Mercury Grand Marquis",
  "MPG": 16.5,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 138,
  "Weight": 3955,
  "Acceleration": 13.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Dodge St. Regis",
  "MPG": 18.2,
  "Cylinders": 8,
  "Displacement": 318,
  "Horsepower": 135,
  "Weight": 3830,
  "Acceleration": 15.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Buick Estate Wagon (sw)",
  "MPG": 16.9,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 155,
  "Weight": 4360,
  "Acceleration": 14.9,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Ford Country Squire (sw)",
  "MPG": 15.5,
  "Cylinders": 8,
  "Displacement": 351,
  "Horsepower": 142,
  "Weight": 4054,
  "Acceleration": 14.3,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Chevrolet Malibu Classic (sw)",
  "MPG": 19.2,
  "Cylinders": 8,
  "Displacement": 267,
  "Horsepower": 125,
  "Weight": 3605,
  "Acceleration": 15,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Chrysler Lebaron Town @ Country (sw)",
  "MPG": 18.5,
  "Cylinders": 8,
  "Displacement": 360,
  "Horsepower": 150,
  "Weight": 3940,
  "Acceleration": 13,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit Custom",
  "MPG": 31.9,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 71,
  "Weight": 1925,
  "Acceleration": 14,
  "Model": 79,
  "Origin": "Europe"
},
{
  "Car": "Mazda GLC Deluxe",
  "MPG": 34.1,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 65,
  "Weight": 1975,
  "Acceleration": 15.2,
  "Model": 79,
  "Origin": "Japan"
},
{
  "Car": "Dodge Colt Hatchback Custom",
  "MPG": 35.7,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 80,
  "Weight": 1915,
  "Acceleration": 14.4,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "AMC Spirit DL",
  "MPG": 27.4,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 80,
  "Weight": 2670,
  "Acceleration": 15,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Mercedes Benz 300d",
  "MPG": 25.4,
  "Cylinders": 5,
  "Displacement": 183,
  "Horsepower": 77,
  "Weight": 3530,
  "Acceleration": 20.1,
  "Model": 79,
  "Origin": "Europe"
},
{
  "Car": "Cadillac Eldorado",
  "MPG": 23,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 125,
  "Weight": 3900,
  "Acceleration": 17.4,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Peugeot 504",
  "MPG": 27.2,
  "Cylinders": 4,
  "Displacement": 141,
  "Horsepower": 71,
  "Weight": 3190,
  "Acceleration": 24.8,
  "Model": 79,
  "Origin": "Europe"
},
{
  "Car": "Oldsmobile Cutlass Salon Brougham",
  "MPG": 23.9,
  "Cylinders": 8,
  "Displacement": 260,
  "Horsepower": 90,
  "Weight": 3420,
  "Acceleration": 22.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Plymouth Horizon",
  "MPG": 34.2,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 70,
  "Weight": 2200,
  "Acceleration": 13.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Plymouth Horizon TC3",
  "MPG": 34.5,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 70,
  "Weight": 2150,
  "Acceleration": 14.9,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Datsun 210",
  "MPG": 31.8,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 65,
  "Weight": 2020,
  "Acceleration": 19.2,
  "Model": 79,
  "Origin": "Japan"
},
{
  "Car": "Fiat Strada Custom",
  "MPG": 37.3,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 69,
  "Weight": 2130,
  "Acceleration": 14.7,
  "Model": 79,
  "Origin": "Europe"
},
{
  "Car": "Buick Skylark Limited",
  "MPG": 28.4,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight": 2670,
  "Acceleration": 16,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Chevrolet Citation",
  "MPG": 28.8,
  "Cylinders": 6,
  "Displacement": 173,
  "Horsepower": 115,
  "Weight": 2595,
  "Acceleration": 11.3,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Omega Brougham",
  "MPG": 26.8,
  "Cylinders": 6,
  "Displacement": 173,
  "Horsepower": 115,
  "Weight": 2700,
  "Acceleration": 12.9,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Pontiac Phoenix",
  "MPG": 33.5,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight": 2556,
  "Acceleration": 13.2,
  "Model": 79,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit",
  "MPG": 41.5,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 76,
  "Weight": 2144,
  "Acceleration": 14.7,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Toyota Corolla Tercel",
  "MPG": 38.1,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 60,
  "Weight": 1968,
  "Acceleration": 18.8,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Chevrolet Chevette",
  "MPG": 32.1,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 70,
  "Weight": 2120,
  "Acceleration": 15.5,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "Datsun 310",
  "MPG": 37.2,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 65,
  "Weight": 2019,
  "Acceleration": 16.4,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Chevrolet Citation",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight": 2678,
  "Acceleration": 16.5,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "Ford Fairmont",
  "MPG": 26.4,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 88,
  "Weight": 2870,
  "Acceleration": 18.1,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "AMC Concord",
  "MPG": 24.3,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight": 3003,
  "Acceleration": 20.1,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "Dodge Aspen",
  "MPG": 19.1,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 90,
  "Weight": 3381,
  "Acceleration": 18.7,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "Audi 4000",
  "MPG": 34.3,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 78,
  "Weight": 2188,
  "Acceleration": 15.8,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Toyota Corolla Liftback",
  "MPG": 29.8,
  "Cylinders": 4,
  "Displacement": 134,
  "Horsepower": 90,
  "Weight": 2711,
  "Acceleration": 15.5,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Mazda 626",
  "MPG": 31.3,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 75,
  "Weight": 2542,
  "Acceleration": 17.5,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Datsun 510 Hatchback",
  "MPG": 37,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 92,
  "Weight": 2434,
  "Acceleration": 15,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Toyota Corolla",
  "MPG": 32.2,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 75,
  "Weight": 2265,
  "Acceleration": 15.2,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Mazda GLC",
  "MPG": 46.6,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 65,
  "Weight": 2110,
  "Acceleration": 17.9,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Dodge Colt",
  "MPG": 27.9,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 105,
  "Weight": 2800,
  "Acceleration": 14.4,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "Datsun 210",
  "MPG": 40.8,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 65,
  "Weight": 2110,
  "Acceleration": 19.2,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen Rabbit C (Diesel)",
  "MPG": 44.3,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 48,
  "Weight": 2085,
  "Acceleration": 21.7,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Volkswagen Dasher (diesel)",
  "MPG": 43.4,
  "Cylinders": 4,
  "Displacement": 90,
  "Horsepower": 48,
  "Weight": 2335,
  "Acceleration": 23.7,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Audi 5000s (diesel)",
  "MPG": 36.4,
  "Cylinders": 5,
  "Displacement": 121,
  "Horsepower": 67,
  "Weight": 2950,
  "Acceleration": 19.9,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Mercedes-Benz 240d",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 146,
  "Horsepower": 67,
  "Weight": 3250,
  "Acceleration": 21.8,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Honda Civic 1500 gl",
  "MPG": 44.6,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight": 1850,
  "Acceleration": 13.8,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Renault Lecar Deluxe",
  "MPG": 40.9,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 0,
  "Weight": 1835,
  "Acceleration": 17.3,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Subaru DL",
  "MPG": 33.8,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 67,
  "Weight": 2145,
  "Acceleration": 18,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Volkswagen Rabbit",
  "MPG": 29.8,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 62,
  "Weight": 1845,
  "Acceleration": 15.3,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Datsun 280-ZX",
  "MPG": 32.7,
  "Cylinders": 6,
  "Displacement": 168,
  "Horsepower": 132,
  "Weight": 2910,
  "Acceleration": 11.4,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Mazda RX-7 GS",
  "MPG": 23.7,
  "Cylinders": 3,
  "Displacement": 70,
  "Horsepower": 100,
  "Weight": 2420,
  "Acceleration": 12.5,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Triumph TR7 Coupe",
  "MPG": 35,
  "Cylinders": 4,
  "Displacement": 122,
  "Horsepower": 88,
  "Weight": 2500,
  "Acceleration": 15.1,
  "Model": 80,
  "Origin": "Europe"
},
{
  "Car": "Ford Mustang Cobra",
  "MPG": 23.6,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 0,
  "Weight": 2905,
  "Acceleration": 14.3,
  "Model": 80,
  "Origin": "US"
},
{
  "Car": "Honda Accord",
  "MPG": 32.4,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 72,
  "Weight": 2290,
  "Acceleration": 17,
  "Model": 80,
  "Origin": "Japan"
},
{
  "Car": "Plymouth Reliant",
  "MPG": 27.2,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight": 2490,
  "Acceleration": 15.7,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Buick Skylark",
  "MPG": 26.6,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 84,
  "Weight": 2635,
  "Acceleration": 16.4,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Dodge Aries Wagon (sw)",
  "MPG": 25.8,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 92,
  "Weight": 2620,
  "Acceleration": 14.4,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Chevrolet Citation",
  "MPG": 23.5,
  "Cylinders": 6,
  "Displacement": 173,
  "Horsepower": 110,
  "Weight": 2725,
  "Acceleration": 12.6,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Plymouth Reliant",
  "MPG": 30,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight": 2385,
  "Acceleration": 12.9,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Toyota Starlet",
  "MPG": 39.1,
  "Cylinders": 4,
  "Displacement": 79,
  "Horsepower": 58,
  "Weight": 1755,
  "Acceleration": 16.9,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Plymouth Champ",
  "MPG": 39,
  "Cylinders": 4,
  "Displacement": 86,
  "Horsepower": 64,
  "Weight": 1875,
  "Acceleration": 16.4,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Honda Civic 1300",
  "MPG": 35.1,
  "Cylinders": 4,
  "Displacement": 81,
  "Horsepower": 60,
  "Weight": 1760,
  "Acceleration": 16.1,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Subaru",
  "MPG": 32.3,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 67,
  "Weight": 2065,
  "Acceleration": 17.8,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Datsun 210 MPG",
  "MPG": 37,
  "Cylinders": 4,
  "Displacement": 85,
  "Horsepower": 65,
  "Weight": 1975,
  "Acceleration": 19.4,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Toyota Tercel",
  "MPG": 37.7,
  "Cylinders": 4,
  "Displacement": 89,
  "Horsepower": 62,
  "Weight": 2050,
  "Acceleration": 17.3,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Mazda GLC 4",
  "MPG": 34.1,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 68,
  "Weight": 1985,
  "Acceleration": 16,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Plymouth Horizon 4",
  "MPG": 34.7,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 63,
  "Weight": 2215,
  "Acceleration": 14.9,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Ford Escort 4W",
  "MPG": 34.4,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 65,
  "Weight": 2045,
  "Acceleration": 16.2,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Ford Escort 2H",
  "MPG": 29.9,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 65,
  "Weight": 2380,
  "Acceleration": 20.7,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Volkswagen Jetta",
  "MPG": 33,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 74,
  "Weight": 2190,
  "Acceleration": 14.2,
  "Model": 81,
  "Origin": "Europe"
},
{
  "Car": "Renault 18i",
  "MPG": 34.5,
  "Cylinders": 4,
  "Displacement": 100,
  "Horsepower": 0,
  "Weight": 2320,
  "Acceleration": 15.8,
  "Model": 81,
  "Origin": "Europe"
},
{
  "Car": "Honda Prelude",
  "MPG": 33.7,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 75,
  "Weight": 2210,
  "Acceleration": 14.4,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Toyota Corolla",
  "MPG": 32.4,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 75,
  "Weight": 2350,
  "Acceleration": 16.8,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Datsun 200SX",
  "MPG": 32.9,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 100,
  "Weight": 2615,
  "Acceleration": 14.8,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Mazda 626",
  "MPG": 31.6,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 74,
  "Weight": 2635,
  "Acceleration": 18.3,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Peugeot 505s Turbo Diesel",
  "MPG": 28.1,
  "Cylinders": 4,
  "Displacement": 141,
  "Horsepower": 80,
  "Weight": 3230,
  "Acceleration": 20.4,
  "Model": 81,
  "Origin": "Europe"
},
{
  "Car": "Saab 900s",
  "MPG": 0,
  "Cylinders": 4,
  "Displacement": 121,
  "Horsepower": 110,
  "Weight": 2800,
  "Acceleration": 15.4,
  "Model": 81,
  "Origin": "Europe"
},
{
  "Car": "Volvo Diesel",
  "MPG": 30.7,
  "Cylinders": 6,
  "Displacement": 145,
  "Horsepower": 76,
  "Weight": 3160,
  "Acceleration": 19.6,
  "Model": 81,
  "Origin": "Europe"
},
{
  "Car": "Toyota Cressida",
  "MPG": 25.4,
  "Cylinders": 6,
  "Displacement": 168,
  "Horsepower": 116,
  "Weight": 2900,
  "Acceleration": 12.6,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Datsun 810 Maxima",
  "MPG": 24.2,
  "Cylinders": 6,
  "Displacement": 146,
  "Horsepower": 120,
  "Weight": 2930,
  "Acceleration": 13.8,
  "Model": 81,
  "Origin": "Japan"
},
{
  "Car": "Buick Century",
  "MPG": 22.4,
  "Cylinders": 6,
  "Displacement": 231,
  "Horsepower": 110,
  "Weight": 3415,
  "Acceleration": 15.8,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Cutlass LS",
  "MPG": 26.6,
  "Cylinders": 8,
  "Displacement": 350,
  "Horsepower": 105,
  "Weight": 3725,
  "Acceleration": 19,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Ford Grenada gl",
  "MPG": 20.2,
  "Cylinders": 6,
  "Displacement": 200,
  "Horsepower": 88,
  "Weight": 3060,
  "Acceleration": 17.1,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Chrysler Lebaron Salon",
  "MPG": 17.6,
  "Cylinders": 6,
  "Displacement": 225,
  "Horsepower": 85,
  "Weight": 3465,
  "Acceleration": 16.6,
  "Model": 81,
  "Origin": "US"
},
{
  "Car": "Chevrolet Cavalier",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 88,
  "Weight": 2605,
  "Acceleration": 19.6,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Chevrolet Cavalier Wagon",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 88,
  "Weight": 2640,
  "Acceleration": 18.6,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Chevrolet Cavalier 2-door",
  "MPG": 34,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 88,
  "Weight": 2395,
  "Acceleration": 18,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Pontiac J2000 SE Hatchback",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 112,
  "Horsepower": 85,
  "Weight": 2575,
  "Acceleration": 16.2,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Dodge Aries SE",
  "MPG": 29,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight": 2525,
  "Acceleration": 16,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Pontiac Phoenix",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight": 2735,
  "Acceleration": 18,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Ford Fairmont Futura",
  "MPG": 24,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 92,
  "Weight": 2865,
  "Acceleration": 16.4,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "AMC Concord DL",
  "MPG": 23,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 0,
  "Weight": 3035,
  "Acceleration": 20.5,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Volkswagen Rabbit l",
  "MPG": 36,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 74,
  "Weight": 1980,
  "Acceleration": 15.3,
  "Model": 82,
  "Origin": "Europe"
},
{
  "Car": "Mazda GLC Custom l",
  "MPG": 37,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 68,
  "Weight": 2025,
  "Acceleration": 18.2,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Mazda GLC Custom",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 68,
  "Weight": 1970,
  "Acceleration": 17.6,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Plymouth Horizon Miser",
  "MPG": 38,
  "Cylinders": 4,
  "Displacement": 105,
  "Horsepower": 63,
  "Weight": 2125,
  "Acceleration": 14.7,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Mercury Lynx l",
  "MPG": 36,
  "Cylinders": 4,
  "Displacement": 98,
  "Horsepower": 70,
  "Weight": 2125,
  "Acceleration": 17.3,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Nissan Stanza XE",
  "MPG": 36,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 88,
  "Weight": 2160,
  "Acceleration": 14.5,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Honda Accord",
  "MPG": 36,
  "Cylinders": 4,
  "Displacement": 107,
  "Horsepower": 75,
  "Weight": 2205,
  "Acceleration": 14.5,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Toyota Corolla",
  "MPG": 34,
  "Cylinders": 4,
  "Displacement": 108,
  "Horsepower": 70,
  "Weight": 2245,
  "Acceleration": 16.9,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Honda Civic",
  "MPG": 38,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight": 1965,
  "Acceleration": 15,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Honda Civic (auto)",
  "MPG": 32,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight": 1965,
  "Acceleration": 15.7,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Datsun 310 GX",
  "MPG": 38,
  "Cylinders": 4,
  "Displacement": 91,
  "Horsepower": 67,
  "Weight": 1995,
  "Acceleration": 16.2,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Buick Century Limited",
  "MPG": 25,
  "Cylinders": 6,
  "Displacement": 181,
  "Horsepower": 110,
  "Weight": 2945,
  "Acceleration": 16.4,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Oldsmobile Cutlass Ciera (diesel)",
  "MPG": 38,
  "Cylinders": 6,
  "Displacement": 262,
  "Horsepower": 85,
  "Weight": 3015,
  "Acceleration": 17,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Chrysler Lebaron Medallion",
  "MPG": 26,
  "Cylinders": 4,
  "Displacement": 156,
  "Horsepower": 92,
  "Weight": 2585,
  "Acceleration": 14.5,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Ford Grenada l",
  "MPG": 22,
  "Cylinders": 6,
  "Displacement": 232,
  "Horsepower": 112,
  "Weight": 2835,
  "Acceleration": 14.7,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Toyota Celica GT",
  "MPG": 32,
  "Cylinders": 4,
  "Displacement": 144,
  "Horsepower": 96,
  "Weight": 2665,
  "Acceleration": 13.9,
  "Model": 82,
  "Origin": "Japan"
},
{
  "Car": "Dodge Charger 2.2",
  "MPG": 36,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight": 2370,
  "Acceleration": 13,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Chevrolet Camaro",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 151,
  "Horsepower": 90,
  "Weight": 2950,
  "Acceleration": 17.3,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Ford Mustang GL",
  "MPG": 27,
  "Cylinders": 4,
  "Displacement": 140,
  "Horsepower": 86,
  "Weight": 2790,
  "Acceleration": 15.6,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Volkswagen Pickup",
  "MPG": 44,
  "Cylinders": 4,
  "Displacement": 97,
  "Horsepower": 52,
  "Weight": 2130,
  "Acceleration": 24.6,
  "Model": 82,
  "Origin": "Europe"
},
{
  "Car": "Dodge Rampage",
  "MPG": 32,
  "Cylinders": 4,
  "Displacement": 135,
  "Horsepower": 84,
  "Weight": 2295,
  "Acceleration": 11.6,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Ford Ranger",
  "MPG": 28,
  "Cylinders": 4,
  "Displacement": 120,
  "Horsepower": 79,
  "Weight": 2625,
  "Acceleration": 18.6,
  "Model": 82,
  "Origin": "US"
},
{
  "Car": "Chevy S-10",
  "MPG": 31,
  "Cylinders": 4,
  "Displacement": 119,
  "Horsepower": 82,
  "Weight": 2720,
  "Acceleration": 19.4,
  "Model": 82,
  "Origin": "US"
}
];

d3.selectAll("svg > *").remove(); 
var svg = d3.select("svg"),
  margin = {
    top: 10,
    right: 35,
    bottom: 10,
    left: 100
  },
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom-20;

  
  var g = svg.append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d[colname])]).nice()
    .range([margin.left * 2, width])
    console.log(x(0))
  
  var y = d3.scaleBand()
    .domain(data.map(d => d.Car))
    .range([height, 0])
    .padding(0.1)

    console.log(y.bandwidth())

  var xaxis = g =>g
  .attr("transform",`translate(${margin.left-20},${315*2+50})`)
  .call(d3.axisBottom(x).tickSizeOuter(0));
  
  
  var yAxis = g => g
    .attr("transform", `translate(${margin.left*2+50},0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0))


//     g.append("circle")
//   .attr("cx", 10)
//         .attr("cy",10);

  
  g.append("g").selectAll(".bar")
    .data(data).enter().append("rect")
    .attr("fill", "steelblue")
    .attr("class", "bar")
    .attr("x", x(0)+80)
    .attr("y", d => y(d.Car))
    .attr("width", d => x(d[colname]))
    .attr("height", y.bandwidth());

    g.append("g")
    .attr("class", "y-axis")
    .call(yAxis)
    
    g.append("g")
    .attr("class","x-axis")
    .call(xaxis);

    // === Brush ===

var xB = d3.scaleLinear()
.domain([0, d3.max(data, d => d[colname])])
.range([0, margin.left]);

var yB = d3.scaleBand()
  .domain(data.map(d => d.Car))
  .range([height, 0])
  .padding(0.1);
  var brush = d3.brushY()
  .extent([
    [0, 0],
    [margin.left, height]
  ])
  .on("start brush", brushed)


var yAxisB = g => g
  .call(d3.axisLeft(yB).tickSizeOuter(0))

  g.append("g")
  .attr("class", "brush")
  .call(brush)
  .call(brush.move, [5,100]);

  var fisheye = d3.fisheye.circular()
    .radius(200)
    .distortion(2);

  g.append("g").selectAll(".brushBar")
  .data(data).enter().append("rect")
  .attr("fill", "steelblue")
  .attr("class", "brushBar")
  .attr("pointer-events", "none")
  .attr("x", xB(0))
  .attr("y", d => yB(d.Car))
  .attr("width", d => xB(d[colname]) - xB(0))
  .attr("height", yB.bandwidth());
  
  ;

//   g.append("g")
//   .call(yAxisB);

  // === Brush & Zoom ===

var bExtent = [
    [10, 10],
    [width, height]
  ]
  
//   var zoom = d3.zoom()
//     .scaleExtent([1, 100])
//     .translateExtent(bExtent)
//     .extent(bExtent)
//     .on("zoom", zoomed)
  
//   g.append("rect")
//     .attr("class", "zoom")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 

 
  function brushed() {

    if (d3.event.sourceEvent &&
      d3.event.sourceEvent.type === "zoom") return;
  
    var s = d3.event.selection,
      nD = [];
  
    yB.domain().forEach((d) => {
      var pos = yB(d) + yB.bandwidth() / 2;
      if (pos > s[0] && pos < s[1]) {
        nD.push(d);
      }
    });
  
    y.domain(nD);
  
    g.selectAll(".y-axis").call(yAxis);
  
    
    g.selectAll(".bar")
      .attr("y", d => y(d.Car))
      .style("opacity", d => y(d.Car) ? 1 : 0)
      .attr("height", y.bandwidth());

  }

}

makegraphs("MPG");