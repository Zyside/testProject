import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: object;
  users: any;
  constructor() { }

  getUsers() {
   this.users = [
      {
        "_id": "5c35cd619a43410219512a43",
        "guid": "61533c00-baea-410c-81be-424d59cfd19c",
        "isActive": false,
        "balance": "$3,828.67",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Kimberly Chavez",
        "gender": "female",
        "company": "VORATAK",
        "email": "kimberlychavez@voratak.com",
        "phone": "+1 (927) 495-3329",
        "address": "850 Croton Loop, Saticoy, California, 5303",
        "about": "Duis pariatur sit elit proident ut eiusmod sint laborum et ad duis aliquip in. Aute quis eu elit ex do est magna consectetur mollit deserunt exercitation ipsum pariatur ad. Mollit consectetur ullamco aliquip quis qui amet ea aliquip. Labore aliqua veniam id nulla et sunt proident enim anim. Non cillum pariatur esse labore mollit proident in labore enim. Amet minim dolor dolore laborum nulla.\r\n",
        "registered": "2018-08-27T05:16:47 -03:00",
        "latitude": -12.467538,
        "longitude": 14.314712,
        "tags": [
          "occaecat",
          "mollit",
          "anim",
          "voluptate",
          "dolore",
          "sunt",
          "ea"
        ]
      },
      {
        "_id": "5c35cd61b36a43da3bea4fae",
        "guid": "fff2e2ef-e6ab-4034-9071-84a201c4a631",
        "isActive": true,
        "balance": "$3,684.58",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "name": "Dillard Wilkerson",
        "gender": "male",
        "company": "NAMEBOX",
        "email": "dillardwilkerson@namebox.com",
        "phone": "+1 (840) 510-2244",
        "address": "323 Montague Terrace, Fillmore, Northern Mariana Islands, 4551",
        "about": "Pariatur in id ad nostrud ad incididunt non est. Nisi culpa ullamco eiusmod eiusmod minim eu. Consectetur dolor nostrud qui aliqua.\r\n",
        "registered": "2016-12-01T01:43:31 -02:00",
        "latitude": -62.867176,
        "longitude": 148.912369,
        "tags": [
          "culpa",
          "velit",
          "adipisicing",
          "et",
          "incididunt",
          "culpa",
          "laborum"
        ]
      },
      {
        "_id": "5c35cd617d6ad9306b978de9",
        "guid": "687e94aa-1923-4be0-8fce-8e011b8e9a88",
        "isActive": false,
        "balance": "$3,410.27",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Scott Mann",
        "gender": "male",
        "company": "ORBIFLEX",
        "email": "scottmann@orbiflex.com",
        "phone": "+1 (904) 497-2520",
        "address": "828 Williamsburg Street, Walland, Michigan, 487",
        "about": "Aliqua aliquip quis nostrud aute nostrud ut quis aute mollit. Eu et esse voluptate nulla cupidatat eu ut laborum consequat tempor ad do. Velit occaecat cupidatat laboris ea deserunt.\r\n",
        "registered": "2014-09-18T08:46:45 -03:00",
        "latitude": 26.9417,
        "longitude": 53.353221,
        "tags": [
          "reprehenderit",
          "ut",
          "sit",
          "esse",
          "aliquip",
          "tempor",
          "ipsum"
        ]
      },
      {
        "_id": "5c35cd6180151866672ba858",
        "guid": "bc6b64c5-7ba8-40bf-a273-5bac46ec0683",
        "isActive": false,
        "balance": "$3,116.89",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "green",
        "name": "Britt Page",
        "gender": "male",
        "company": "NURALI",
        "email": "brittpage@nurali.com",
        "phone": "+1 (901) 445-2071",
        "address": "851 Harbor Lane, Robbins, Marshall Islands, 4810",
        "about": "Elit adipisicing eu do ipsum deserunt ea. Sit magna id fugiat exercitation consectetur proident qui est eiusmod consequat dolore. Amet sint ut culpa elit consectetur ex velit ut irure ea proident nisi dolore.\r\n",
        "registered": "2014-05-26T10:15:41 -03:00",
        "latitude": -29.183154,
        "longitude": 8.785211,
        "tags": [
          "est",
          "anim",
          "ipsum",
          "cillum",
          "sunt",
          "nisi",
          "reprehenderit"
        ]
      },
      {
        "_id": "5c35cd61c12c17c55fda4542",
        "guid": "3ed50653-9bd2-4e70-bde3-fdc9f6a8b84f",
        "isActive": false,
        "balance": "$2,265.52",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "brown",
        "name": "Sparks Dunlap",
        "gender": "male",
        "company": "GEEKY",
        "email": "sparksdunlap@geeky.com",
        "phone": "+1 (980) 514-3379",
        "address": "639 Woodside Avenue, Richford, Wyoming, 4044",
        "about": "Aute amet voluptate non ullamco cillum incididunt in ullamco sunt deserunt. Esse pariatur do cillum aute ipsum dolore Lorem aliquip sit cillum est. Anim veniam est eu fugiat elit sit sint consequat. Aliquip enim eu commodo ullamco anim deserunt velit culpa laboris occaecat pariatur. Adipisicing mollit veniam do magna sunt ex. Ad deserunt ad laborum occaecat elit laborum.\r\n",
        "registered": "2016-02-08T12:01:50 -02:00",
        "latitude": 47.880863,
        "longitude": -167.609164,
        "tags": [
          "enim",
          "anim",
          "aute",
          "deserunt",
          "deserunt",
          "aliquip",
          "qui"
        ]
      },
      {
        "_id": "5c35cd61464365fe69900ae1",
        "guid": "b45d0069-d617-476e-8d8a-57ea88aef536",
        "isActive": true,
        "balance": "$2,948.31",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "brown",
        "name": "Kimberley Rodgers",
        "gender": "female",
        "company": "MARKETOID",
        "email": "kimberleyrodgers@marketoid.com",
        "phone": "+1 (898) 574-3357",
        "address": "693 Leonard Street, Dunlo, New Mexico, 2827",
        "about": "Non deserunt minim nulla laborum dolore nisi nisi. Nisi amet eiusmod exercitation ex non nisi culpa. Enim Lorem amet nulla mollit ex id. Esse labore adipisicing sit consectetur amet aliqua irure sint in mollit. Exercitation ullamco et Lorem sunt minim ex dolore eiusmod reprehenderit esse cupidatat tempor sunt adipisicing. Dolore dolore consectetur ipsum voluptate tempor ullamco. Laboris do dolor id ullamco non officia commodo sunt ea cupidatat.\r\n",
        "registered": "2015-05-29T03:42:17 -03:00",
        "latitude": 10.55712,
        "longitude": -177.932461,
        "tags": [
          "veniam",
          "laboris",
          "duis",
          "sunt",
          "aliquip",
          "tempor",
          "duis"
        ]
      },
      {
        "_id": "5c35cd6107046a4583afb099",
        "guid": "26e3d6d2-d068-47e1-8319-70513b2285ba",
        "isActive": true,
        "balance": "$2,757.70",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "brown",
        "name": "Wagner Mcguire",
        "gender": "male",
        "company": "SARASONIC",
        "email": "wagnermcguire@sarasonic.com",
        "phone": "+1 (938) 489-3377",
        "address": "782 Howard Avenue, Navarre, Tennessee, 3713",
        "about": "Nisi pariatur tempor amet proident voluptate. Occaecat ex et et qui commodo nostrud do. Et pariatur cillum amet veniam deserunt laboris enim et eiusmod esse Lorem. In tempor esse dolore sit magna. Irure qui dolore anim exercitation nulla velit qui anim cupidatat ea reprehenderit consectetur. Laboris deserunt excepteur aute proident tempor.\r\n",
        "registered": "2016-10-12T01:27:54 -03:00",
        "latitude": 24.565408,
        "longitude": 171.182071,
        "tags": [
          "proident",
          "ea",
          "officia",
          "cillum",
          "duis",
          "minim",
          "sit"
        ]
      }
    ];
    for (let i = 0; i < this.users.length; i++) {
      const correctUTCString = this.users[i]['registered'].split(' ').join('');
      this.users[i]['registered'] = new Date(correctUTCString);
   }
   return this.users;
  }

  setUser(user) {
    this.user = user;
  }
  getUser() {

    return this.user;
  }
}
