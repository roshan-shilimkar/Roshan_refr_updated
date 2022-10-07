import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-newproductlist',
  templateUrl: './newproductlist.component.html',
  styleUrls: ['./newproductlist.component.scss']
})
export class NewproductlistComponent implements OnInit {
  highlights = false;
  phone: string = '9167452128';
  openedAccordianLists: any = [];
  deserts = false;
  showAddToCard: boolean = false;
  iMinStore = false;
  storeTyp = '';
  makeChanges = false;
  show = false;
  about_store = false;
  viewTyp = '';
  isReadMore = true;
  imagesLoaded: string[] = ['123'];
  friend = 'Aditya';
  searchTHEM = '';
  // products: any[] = [];
  proCat: string[] = ["Sexual wellness","Women's health"];
  selectedCamp: string = '';
  campaignList: any[] = [];
  storeCat = 'Televisions & Large Appliances';
  mine: any = {
    acBalC: '1000',
  };
  setJourney = {
    journey: 'F2F',
  };
  auth: any = {
    myCart: [{ prodName: 'asdasdads' }, { prodName: 'asdasdads' }],
    myLoc: {
      locality: 'Mumbai',
      postal_code: '400097',
    },
  };

  products: any[] = 
    [
      {
          "cost": 748,
          "id": "04V3Dl0d7VBIntHZzWG2",
          "content": true,
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 615000000
          },
          "warranty": true,
          "title": "AADAR STP O-02",
          "sold": 0,
          "price": 998,
          "upd": {
              "seconds": 1664361894,
              "nanoseconds": 536000000
          },
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F04V3Dl0d7VBIntHZzWG21664361793076?alt=media&token=b815d650-2179-44a6-9bc6-12d616897017",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F04V3Dl0d7VBIntHZzWG21664361843964?alt=media&token=0082e774-6535-4ec2-83f5-b385b5b66dbd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F04V3Dl0d7VBIntHZzWG21664361850277?alt=media&token=c8b97e9d-11f1-4c8e-9cfa-09afed0e6d3c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F04V3Dl0d7VBIntHZzWG21664361856145?alt=media&token=95961b61-83a7-407d-a909-e4a79f3f8647",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F04V3Dl0d7VBIntHZzWG21664361872519?alt=media&token=36b9f007-61f4-45b6-ae5d-a6a69755ba12",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F04V3Dl0d7VBIntHZzWG21664361892116?alt=media&token=67bb4541-86c9-4a47-a641-964acd5b713d"
          ],
          "reqBurn": false,
          "category": "Sexual wellness",
          "burn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "quota": 0,
          "description": "Description:\r\nAadar Straight Up oil made with Vedic Pak Vidhi. A rejuvenator and stamina booster for male function. It also helps regain muscular flexibility and firmness to enrich your confidence.\r\n\r\nUsage: \r\nApply a few drops of oil to your parts. Gently massage for few minutes. Use daily in morning and night for best results \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):36\r\nDosage: Oil\r\nPack size: 60 ml\r\nIngredients: Lavang, Babchi\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "variants": [],
          "code": 30049011
      },
      {
          "burn": false,
          "cost": 449,
          "content": true,
          "category": "Women's health",
          "sold": 0,
          "description": "Description:\r\nGood Period is a fusion of authentic various ayurvedic herbs such as Shatavari, Ashoka, Turmeric, and Manjistha that helps you with hormonal imbalance, and PCOS and regularizes menstrual cycles. Helps With Period Pain and Cramps: A natural detoxifier, Good Period helps purify the blood, and regularise the excessive flow of blood. It also has anti-inflammatory and antispasmodic properties, which help you, and provide relief from agonizing period pain, cramps, weakness, and mood swings.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning with breakfast, and two capsules in the evening with dinner. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Women’s health\r\nShelf Life (months):18\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Shatavari | Ashoka | Manjistha | Turmeric\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features:\r\nFor Hormone Balance, PCOS, Period Pain relief, and Mood Swings",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 235000000
          },
          "reqBurn": false,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367038762?alt=media&token=bc562417-44cb-49c8-8895-249170428ae3",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367068818?alt=media&token=c3a300d4-b0f6-4ee0-8946-b60d1edb4966",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367077532?alt=media&token=ed0f9646-5c7e-412e-a017-c1d820966f50",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367083421?alt=media&token=915ffc15-3ea2-4f18-ac1b-0ec25fcacdfd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367091615?alt=media&token=5c4f1f78-286e-4059-b980-c3cfbd875a47",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367100124?alt=media&token=abe48a96-bb90-4afc-82ae-13137cf24a7a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F0PvC0lIwMfPzM5R87xCJ1664367106552?alt=media&token=ccb7e87b-6c05-4289-b8d0-06785baf53e5"
          ],
          "price": 630,
          "quota": 0,
          "warranty": true,
          "variants": [],
          "title": "AADAR GP C-01",
          "code": 30049011,
          "upd": {
              "seconds": 1664367111,
              "nanoseconds": 585000000
          },
          "id": "0PvC0lIwMfPzM5R87xCJ",
          "sid": "mSRzQ2KDA7UYugq53pO5"
      },
      {
          "reqBurn": false,
          "description": "Description:\r\nPower Build is an ayurvedic formula crafted to fuel your muscles and gain power naturally. It also increases physical performance and boosts energy with the goodness of nature and Ayurveda. MUSCLE RECOVERY: It’s a combination of the 7 most essential herbs such as Safed Musli, Shatavari, Gokhru, etc. which help in increasing muscle mass and help in muscle recovery, and has no side effects.\r\n\r\nUsage: \r\nOne capsule with water (or milk), every day in the morning after breakfast. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Mass & Weight Gainers\r\nShelf Life (months): 36\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: ashwagandha,shatavari,vidarikand,liquorice,safed musli,gohkru,pippali,excipients\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nHelps in Muscle Recovery and Improves Performance",
          "burn": false,
          "id": "8or3AA18rao4bCN1PZYN",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367364533?alt=media&token=40f29738-5a56-4730-a7ef-a0c932eb6564",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367371202?alt=media&token=e3ceafec-2ea5-4d6a-8ac6-989ba9ea1c4f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367381058?alt=media&token=0ec75df2-1c18-4747-ae20-f4bd8117207b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367387667?alt=media&token=68c063ce-faa4-421e-9da6-506537c0ad34",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367395074?alt=media&token=b493022d-a287-408c-a47f-df52e3a74dcb",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367401301?alt=media&token=823351a8-a05f-40ff-bc06-068b92515c09",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F8or3AA18rao4bCN1PZYN1664367407729?alt=media&token=fffc9b65-0d4c-4bba-8bb2-d64d97a009bf"
          ],
          "content": true,
          "cost": 375,
          "code": 30049011,
          "price": 500,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "upd": {
              "seconds": 1664367413,
              "nanoseconds": 51000000
          },
          "sold": 0,
          "warranty": true,
          "category": "Mass & Weight Gainers",
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 267000000
          },
          "title": "AADAR PBUILD C-01",
          "variants": [],
          "quota": 0
      },
      {
          "category": "Sexual wellness",
          "cost": 799,
          "upd": {
              "seconds": 1664367552,
              "nanoseconds": 689000000
          },
          "variants": [],
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F9jEWjwquwNYOBy6w37Vy1664367519036?alt=media&token=61e1716e-8f82-4499-b2a5-17b447aeb88b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F9jEWjwquwNYOBy6w37Vy1664367526724?alt=media&token=d76b206f-fe21-4d23-88cf-ea72220c3e73",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F9jEWjwquwNYOBy6w37Vy1664367532376?alt=media&token=5e917504-93d2-4f3f-8ee3-69e6498d443b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F9jEWjwquwNYOBy6w37Vy1664367537878?alt=media&token=76a76b8b-4155-4dfd-ac97-a6b82cf5fc4b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F9jEWjwquwNYOBy6w37Vy1664367542752?alt=media&token=41838d00-43dc-4a6b-8293-c00ad9274a04",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2F9jEWjwquwNYOBy6w37Vy1664367548619?alt=media&token=21a9da32-0988-4fef-bbc4-ca5106ab8e67"
          ],
          "title": "AADAR PFM C-02",
          "content": true,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "price": 1400,
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 600000000
          },
          "quota": 0,
          "sold": 0,
          "warranty": true,
          "description": "Description:\r\nImagine a burst of energy. And a boost in stamina & confidence. That’s AADAR PerforMANce for you. A perfect blend of Ayurvedic herbs like Safed Musli, Ashwagandha, Kaunch, and Kali Musli. A habit, that improves vitality and physical strength.\r\nSafed & Kali Musli + Ashwagandha + Koch Beej = Performance: An authentic combination of herbs straight from the ancient scripture to help men improve Stamina and performance.\r\nRestores Energy & Boosts Strength: A rejuvenator and stamina booster for men, it helps increase energy to overcome tiredness and fatigue. It also helps boost stamina & confidence, which in return, helps improve your physical strength and power.\r\nIncreases Stamina, Improves Strength: Performance helps provide strength, endurance, and will. It not only helps boost stamina but also helps strengthen the vital muscles.\r\n\r\nUsage: \r\nFor the first 15 days, two capsules with water, every day in the morning with breakfast and two capsules in the evening with dinner. After 15 days, take one capsule in the morning and one capsule in the evening. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 36\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Safed Musli, Kaunch, Aswagandha, Kali Musli\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nAyurvedic Strength Booster, Stamina and Vitality for Men",
          "reqBurn": false,
          "burn": false,
          "id": "9jEWjwquwNYOBy6w37Vy",
          "code": 30049011
      },
      {
          "warranty": true,
          "upd": {
              "seconds": 1664287057,
              "nanoseconds": 305000000
          },
          "description": "Description:\r\nPower Build is an ayurvedic formula crafted to fuel your muscles and gain power naturally. It also increases physical performance and boosts energy with the goodness of nature and Ayurveda. MUSCLE RECOVERY: It’s a combination of the 7 most essential herbs such as Safed Musli, Shatavari, Gokhru, etc. which help in increasing muscle mass and help in muscle recovery, and has no side effects.\r\n\r\nUsage:\r\nOne capsule with water (or milk), every day in the morning after breakfast. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Mass & Weight Gainers\r\nShelf Life (months):36\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: ashwagandha,shatavari,vidarikand,liquorice,safed musli,gohkru,pippali,excipients\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nHelps in Muscle Recovery and Improves Performance",
          "id": "BuyzbKotgkOIXzoBytrz",
          "quota": 0,
          "title": "AADAR PBUILD C-02",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287014158?alt=media&token=7ebc4784-dbc0-4b4d-a8ef-1a8e913aa6b5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287020399?alt=media&token=fae3effa-4324-4392-ac46-d5bb0907531f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287025982?alt=media&token=a5bd57e9-ad17-419d-a710-78ce2aa7449e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287031336?alt=media&token=e834d635-7c48-473a-bf14-ef5257abde7f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287035975?alt=media&token=d5e2fe03-8cd4-46bc-afdd-2c8504682d20",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287040586?alt=media&token=12c642e2-a53a-4d71-9748-2cfbc7ef89d9",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FBuyzbKotgkOIXzoBytrz1664287048849?alt=media&token=fc86fafa-2fbc-4153-af00-747e27cc6897"
          ],
          "cost": 725,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "price": 1000,
          "category": "Mass & Weight Gainers",
          "code": 30049011,
          "reqBurn": false,
          "variants": [],
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 289000000
          },
          "sold": 0,
          "burn": false,
          "content": true,
          "sid": "mSRzQ2KDA7UYugq53pO5"
      },
      {
          "quota": 0,
          "price": 900,
          "code": 30049011,
          "cost": 675,
          "description": "Description:\r\nStraight up Capsule for Strength where it matters the most. A rejuvenator and stamina booster for male function. It helps increase strength and toughness by improving blood flow . It also helps regain muscular flexibility and firmness to enrich your confidence.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning after breakfast, and two capsules in the evening after dinner for the first 15 -30 days. After a month, the dosage can be reduced to two capsules per day. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):35\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Chota Gokhru, Ashwagandha, Babchi, Palash, Safed Behmen, Ginseng, Kaunch, Fenugreek, Yashad Bhasma.\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nHelps real strength for Men",
          "variants": [],
          "id": "CPSXP9F0z62q9XbykFyr",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sold": 0,
          "upd": {
              "seconds": 1664362099,
              "nanoseconds": 206000000
          },
          "category": "Sexual wellness",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "title": "AADAR STP C-01",
          "burn": false,
          "warranty": true,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362046189?alt=media&token=81babb00-372a-46a6-9fb7-7452bbd90150",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362051611?alt=media&token=14271445-842f-41dd-ad62-12772ea678dc",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362061400?alt=media&token=74d7417e-049a-4613-9759-0a675c075c21",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362073325?alt=media&token=7ae013f1-608d-4034-9beb-b0e629bf1446",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362079513?alt=media&token=a0aa435b-1c25-4442-ac54-44225c33ac1f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362086887?alt=media&token=d2c4759c-3f50-44c2-8646-06cf36a7ca5d",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FCPSXP9F0z62q9XbykFyr1664362097130?alt=media&token=f6cf8018-3f71-4fbf-8b32-60dcb64fe0ff"
          ],
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 79000000
          },
          "reqBurn": false,
          "content": true
      },
      {
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sold": 0,
          "title": "AADAR ORTHOS O-02",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367283046?alt=media&token=e4b65f4b-d4b9-471e-a4c6-6f978ddae1ca",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367288756?alt=media&token=f748c756-7383-41ae-a80b-7597a65447c1",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367293560?alt=media&token=0cdfd81d-df83-4888-9881-d3c50ce7de8a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367299128?alt=media&token=6311d3a9-1ce8-4ac1-902b-d7d7e4473048",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367307450?alt=media&token=9b102998-6778-481c-a22b-0c30b8e7e511",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367315189?alt=media&token=d563d820-7523-4414-803e-043fe8ba501d",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FE5Ctv5rw7hB0AXBHa2Vw1664367322251?alt=media&token=5930f8b1-e9a1-41c7-911d-2ea2cd043697"
          ],
          "quota": 0,
          "id": "E5Ctv5rw7hB0AXBHa2Vw",
          "price": 780,
          "reqBurn": false,
          "description": "Description:\r\nOrtho Sure oil for Muscle and Joint pain relief. A perfect combination of ayurvedic herbs that helps for complete cure and care. Alleviates pain, swelling, stiffness, and spasms strengthen joints and joint mobility, and is helpful in other age-related disorders such as diabetes, blood pressure, and Vata imbalance.\r\n\r\nUsage:\r\nApply a few drops daily to the affected area. Massage gently and leave it for some time. Apply warm compression for better absorption. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Joint and Muscle Pain\r\nShelf Life (months): 36\r\nDosage: Oil\r\nPack size: 200 ml\r\nIngredients: Hadjod, Shallaki, Nilgiri, Cinnamon, Tamalpatra, Nirgundi, Clove, Sesame, Mahanarayan oil, Jyotishmati\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nJoint & Muscle Pain Relief",
          "upd": {
              "seconds": 1664367325,
              "nanoseconds": 484000000
          },
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 179000000
          },
          "cost": 699,
          "code": 30049011,
          "content": true,
          "variants": [],
          "warranty": true,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "burn": false,
          "category": "Joint & Muscle Pain Relief"
      },
      {
          "burn": false,
          "price": 300,
          "variants": [],
          "cost": 285,
          "quota": 0,
          "warranty": true,
          "sold": 0,
          "content": true,
          "code": 30049011,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367600385?alt=media&token=f97597f3-d371-44a3-896a-af5f95f16267",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367608567?alt=media&token=39ee64cc-61d2-4e3a-bb34-59ae5e4ead7f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367614211?alt=media&token=3f453971-59c5-4937-befd-2a9d73e05de0",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367620318?alt=media&token=52be1398-4ad8-45e7-bc07-3dbd82a17e78",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367628065?alt=media&token=aff18c18-78a1-45fa-ae3d-76c2af3d5f54",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367633430?alt=media&token=1c2a190d-bc45-4a9e-bb5d-b5739faf33ee",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEnW18hzGruZaXJOI6hGN1664367641897?alt=media&token=31a3df30-bdeb-47d1-a6bc-87109e91281b"
          ],
          "description": "Description:\r\nImagine a burst of energy. And a boost in stamina & confidence. That’s AADAR PerforMANce for you. A perfect blend of Ayurvedic herbs like Safed Musli, Ashwagandha, Kaunch, and Kali Musli. A habit, that improves vitality and physical strength.\r\nSafed & Kali Musli + Ashwagandha + Koch Beej = Performance: An authentic combination of herbs straight from the ancient scripture to help men improve Stamina and performance.\r\nRestores Energy & Boosts Strength: A rejuvenator and stamina booster for men, it helps increase energy to overcome tiredness and fatigue. It also helps boost stamina & confidence, which in return, helps improve your physical strength and power.\r\nIncreases Stamina, Improves Strength: Performance helps provide strength, endurance, and will. It not only helps boost stamina but also helps strengthen the vital muscles.\r\n\r\nUsage:\r\nApply a few drops. Gently massage for a few minutes. Use every day at night for better stamina and blood circulation. For better results, use it along with AADAR Performance capsules. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 36\r\nDosage: Oil\r\nPack size: 30 ml\r\nIngredients: Shilajit, Black Seed, Jaiphal, and Ashwagandha\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nAyurvedic Strength Booster, Stamina and Vitality for Men",
          "upd": {
              "seconds": 1664367644,
              "nanoseconds": 391000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "id": "EnW18hzGruZaXJOI6hGN",
          "category": "Sexual wellness",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "title": "AADAR PFM O-01",
          "reqBurn": false,
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 738000000
          }
      },
      {
          "sold": 0,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368926478?alt=media&token=6620e5af-c475-4906-a24d-88bde78e62f7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368935337?alt=media&token=2a21faf5-8c24-4ec6-a35a-7aeeaaee4d36",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368940283?alt=media&token=514f26cc-3a5b-4d32-8ce4-72f704b7abd7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368944802?alt=media&token=30289b0f-2e0d-48f0-b317-da5c4262cbe2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368949810?alt=media&token=477a2f28-a671-44b1-bf21-582a16eb745f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368955777?alt=media&token=fca06e77-b130-4de6-8045-2350f05842b6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FEv1xR1umozxIUVUup2oO1664368960685?alt=media&token=03ba9140-140f-467b-952a-141e31fdbea1"
          ],
          "id": "Ev1xR1umozxIUVUup2oO",
          "code": 30049011,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "variants": [],
          "burn": false,
          "content": true,
          "category": "Digestion & Nausea",
          "warranty": true,
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 761000000
          },
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "price": 600,
          "quota": 0,
          "description": "Description:\r\nRe-Lax Pro works as a natural laxative for your constipation and gastric troubles and offers fast relief. Daily use of it improves digestion, facilitates regular bowel movements, and keeps your gut healthy. Re-Lax Pro is a unique blend of herbal ingredients, such as Senna, Trivrut, Harad, Ajwain, and Kala Namak. While Senna leaves and Harad helps in relief from constipation, Trivrut helps with gastric troubles.\r\n\r\nUsage:\r\nTwo capsules with warm water, every day, before going to bed. Living a healthy life is a matter of discipline. \r\nDosage: Capsule\r\nPack size:120 Capsules\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Digestion & Nausea\r\nShelf Life (months):36\r\nIngredients: Senna leaves, Harad, and Ajwain\r\nCounty of Origin: India\r\nManufacturer Name :S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nConstipation Relief and Gastric Troubles | Helps in Indigestion and Regulates Bowel Movement",
          "title": "AADAR RELAX PRO C-02",
          "cost": 499,
          "upd": {
              "seconds": 1664368976,
              "nanoseconds": 689000000
          },
          "reqBurn": false
      },
      {
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368213220?alt=media&token=bac8d74b-a6db-4cd3-971e-90f8eaa0b36a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368219086?alt=media&token=9163c3e2-6a58-4cb1-a3e6-b4a020c2bd62",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368227481?alt=media&token=fc0d02ae-2938-466e-8e06-d2304c709b48",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368238350?alt=media&token=fb358b0f-150b-4aca-ba97-5366804c7292",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368246759?alt=media&token=bb2cf15f-4027-4e86-b9db-649a03cc0241",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368251619?alt=media&token=cf7250ff-81ff-4f9a-8dab-7f2b776f7d26",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIPjUDz56ZIAfHsO2LHt1664368256839?alt=media&token=c3742b63-8901-4280-b8be-4f3dfe9a347a"
          ],
          "quota": 0,
          "price": 120,
          "id": "HIPjUDz56ZIAfHsO2LHt",
          "content": true,
          "category": "Digestion",
          "upd": {
              "seconds": 1664368258,
              "nanoseconds": 966000000
          },
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 358000000
          },
          "code": 30049011,
          "title": "AADAR RELAX P-01",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sold": 0,
          "description": "Description:\r\nFacing digestive problems? Just Re-Lax. Formulated with hand-picked herbs like Senna Patti, Harad, and Ajwain, AADAR Re-Lax is an Ayurvedic approach to constipation and helps in regulating bowel movements in the body. The natural blend helps provide effective relief from constipation and promotes good digestion. A 5000-year-old solution for 21st-century digestive troubles.\r\n\r\nUsage:\r\nThe ideal dosage of Re-Lax powder is 1 teaspoon per day before bedtime, with normal water. In case of chronic constipation, the dosage can be increased to 2 teaspoons. \r\nProduct Category: Ayurveda\r\nProduct Sub Category: Digestion\r\nShelf Life (months):24\r\nDosage: Powder\r\nPack size: 90 gram\r\nIngredients: Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), and Sanchal\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nRe-Lax is a perfect blend of herbs such as Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), and Sanchal. Works as a natural laxative that cleanses the body and aids bowel movements. Safe for regular use and doesn’t cause dependence or build a habit. It is an ayurvedic solution for constipation and gastric discomforts. Clinically researched ayurvedic formulation, it doesn’t contain any additives or preservatives and thus has no side effects. ",
          "burn": false,
          "reqBurn": false,
          "variants": [],
          "cost": 115,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "warranty": true
      },
      {
          "burn": false,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 479000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "variants": [],
          "description": "Description:\r\nAn Ayurvedic Detox For Your Body, Aadar Jeevani Is Packed With A Unique Blend Of Aloe Vera, Neem, And Harad That Helps Support Natural Blood Glucose Levels And Manage Healthy Glucose Levels In The Body. An Effective Formulation That Not Only Helps Improve Glycaemic Control But Also Acts As A Natural Detox To The Body.\r\n\r\nUsage:\r\n1-2 Teaspoons Daily Before Breakfast, With Warm Water \r\n\r\nKey Features:\r\nJeevani Powder Is 100% Natural And Safe, With No Additives Or Preservatives, And Thus Do Not Have Any Adverse Effects. Goodness Of Pure Herbs: The Perfect Blend Of Aloe Vera, Neem, And Harde (Haritaki). Support Natural Blood Glucose Levels And Helps In Weight Management. Fdca Approved\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Diabetes\r\nShelf Life (Months):24\r\nDosage: Powder\r\nPack Size: 300 Gram\r\nIngredients: Aloe Vera, Neem, And Harde (Haritaki)\r\nCounty Of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.Ltd",
          "warranty": true,
          "upd": {
              "seconds": 1664286718,
              "nanoseconds": 648000000
          },
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "cost": 360,
          "reqBurn": false,
          "sold": 0,
          "title": "AADAR JEEVANI P-02",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286671310?alt=media&token=af0ebbf0-d2ae-4ed6-8415-a71dbfcb67b5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286681098?alt=media&token=0bff9d46-dc60-44a8-8ef9-3d78cdb6cc1e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286688343?alt=media&token=fd478bb7-d774-424d-81fd-84d79da13d57",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286693815?alt=media&token=8ad5f790-8ac8-496b-ba0a-f15fc65f1eb6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286699121?alt=media&token=232f73f0-0547-4c9c-b0a1-80d87f522e08",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286704279?alt=media&token=eb4838a8-22eb-471d-9b52-8f3b19c8042e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHIWuQpNuimpspfxI8GRD1664286709856?alt=media&token=8de0810c-2011-4da5-b565-045c2ad228b9"
          ],
          "price": 450,
          "content": true,
          "id": "HIWuQpNuimpspfxI8GRD",
          "code": 30049011,
          "category": "Diabetes",
          "quota": 0
      },
      {
          "cost": 450,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 740000000
          },
          "sold": 0,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "warranty": true,
          "category": "Vitamins & Mineral supplements",
          "price": 610,
          "title": "AADAR NO3 C-01",
          "content": true,
          "description": "Description:\r\nNatural Omega 3 is rich in antioxidants and Omega 3, 6, 9. Its antioxidant properties help remove free radicals and improve the overall functioning of the body. It also helps improve immunity and lipid metabolism and fight bad cholesterol. \r\nNothing’s Fishy about It: Unlike other sources of Omega 3 based on fish oil, Natural Omega 3 is a fusion of various all-natural and pure vegetarian ingredients such as Flaxseeds, Arjuna, Walnut, and Cinnamon. \r\nHelps with Maintenance of Vital Organs: Omega 3 fatty acids play an important role in the good functioning of vital organs like the brain, heart, and eyes, and also contribute to the normal functioning of blood vessels.\r\n\r\nUsage:\r\nOne capsule with water, every day in the morning with breakfast, and one capsule in the evening with dinner. Living a healthy life is a matter of discipline. And making AADAR Natural Omega 3 a part of your routine helps you get your overall functioning of the body in order. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Vitamins & Mineral supplements\r\nShelf Life (months):24\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Flaxseed, Arjuna, Walnut, Cinnamon\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nVegan Omega-3 and Immunity Supplement for Men and Women\r\n",
          "variants": [],
          "code": 30049011,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286801504?alt=media&token=42202132-bde0-4034-943a-226f2eba14de",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286808562?alt=media&token=59ba7b28-0d5c-4cb5-9348-2ae57eb43d33",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286814110?alt=media&token=71bde4f8-6da9-4126-b7cd-a6f384255cad",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286819116?alt=media&token=857a5a48-833c-4c0d-9027-f931b351c49b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286825848?alt=media&token=36b9e0b8-1847-4267-8999-921196585db5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286831244?alt=media&token=4dd0f34a-95e4-4944-971c-b2e9a1beb08f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FHL23FHGXY7WNFhFsvUjA1664286836578?alt=media&token=85d8e635-d427-47be-bd16-c4944dca5fef"
          ],
          "reqBurn": false,
          "burn": false,
          "quota": 0,
          "upd": {
              "seconds": 1664286845,
              "nanoseconds": 472000000
          },
          "id": "HL23FHGXY7WNFhFsvUjA"
      },
      {
          "code": 30049011,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 194000000
          },
          "category": "Hair care",
          "title": "AADAR GHERBS O-01",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "variants": [],
          "id": "Lq6QXoRbGf5Qz0RdjO7V",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "price": 430,
          "reqBurn": false,
          "content": true,
          "quota": 0,
          "sold": 0,
          "description": "Description:\r\nGood Herbs hair oil is an age-old ayurvedic blend of 6 rare herbs infused with 4 essential oils in a 36-hour long ayurvedic process. The process is completed after it reaches the desired consistency of miscibility of herbs, appearance, smell, and effectiveness.\r\nUsage:\r\nApply it properly and massage the scalp for a few minutes. Let it stay for a few hours before you wash your hair. Use it at least 3 times a week. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Hair care\r\nShelf Life (months): 36\r\nDosage: Oil\r\nPack size: 100 ml\r\nIngredients: Red Onion, Bhringraj, Hibiscus, Virgin Coconut\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nHair fall and Damage Control | Supports Hair Growth\r\n",
          "warranty": true,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366901851?alt=media&token=d6b9e59a-dd54-4831-afb7-3168fb3dc0c6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366907856?alt=media&token=a67d10b3-d93b-401a-ab4a-285662af6fa7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366913044?alt=media&token=744fde40-00e4-4686-98f1-ebeef61cf1ea",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366921817?alt=media&token=102305fc-c695-437d-a0eb-8440a5f8c96d",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366930277?alt=media&token=b2284c8a-8f2d-461e-9e6b-15c888c297ac",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366936870?alt=media&token=9a23d657-a386-46c9-8999-2444d433cd49",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366941662?alt=media&token=4f1e54a5-bd96-4afe-8508-536317f815a7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FLq6QXoRbGf5Qz0RdjO7V1664366947036?alt=media&token=5f216213-68fd-4016-8718-22a64d2989c3"
          ],
          "upd": {
              "seconds": 1664366949,
              "nanoseconds": 585000000
          },
          "burn": false,
          "cost": 375
      },
      {
          "burn": false,
          "sold": 0,
          "id": "MjGEKnrn8AhoO6jkUVbJ",
          "warranty": true,
          "price": 300,
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 680000000
          },
          "cost": 270,
          "upd": {
              "seconds": 1664368896,
              "nanoseconds": 521000000
          },
          "quota": 0,
          "title": "AADAR RELAXPRO C-01",
          "code": 30049011,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "variants": [],
          "category": "Digestion & Nausea",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "reqBurn": false,
          "content": true,
          "description": "Description:\r\nRe-lax pro works as a natural laxative for your constipation and gastric troubles and offers a fast relief. A daily use of it improves digestion, facilitates regular bowel movements and keep your gut healthy.re-lax pro is a unique blend of herbal ingredients, such as senna, trivrut, harad, ajwain and kala namak. While senna leaves and harad helps in relief from constipation, trivrut helps with gastric troubles.\r\n\r\nUsage:\r\ntwo capsules with warm water, every day, before going to bed. Living a healthy life is a matter of discipline. \r\n\r\nSpecification:\r\nProduct category: ayurveda\r\nProduct sub category: digestion & nausea\r\nShelf life (months):36\r\nDosage: capsule\r\nPack size: 60 capsules\r\nIngredients: senna leaves, harad and ajwain\r\nCounty of origin: India\r\nManufacturer name: S.G.M.L.S.S.S.M.Ltd\r\n\r\nKey Features:\r\nConstipation relief and gastric troubles | helps in indigestion and regulates bowel movement",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368862353?alt=media&token=6438689e-dd0f-420f-a60c-0396e8039b62",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368868106?alt=media&token=e764580c-82e4-4332-b411-54f79804e149",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368873516?alt=media&token=6aa37feb-c4e9-447b-bc48-037d8fa0e66e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368879054?alt=media&token=2a179289-fcbf-44c1-9c8d-7df45e58e008",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368885056?alt=media&token=cfa84d2b-de6a-483f-bd01-e675f9db99e2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368889858?alt=media&token=0df54ec3-4c38-488a-adfb-0221db0aabe8",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FMjGEKnrn8AhoO6jkUVbJ1664368894015?alt=media&token=9ec75821-d786-4474-8445-2f7f2db39150"
          ]
      },
      {
          "content": true,
          "category": "Sexual wellness",
          "burn": false,
          "title": "AADAR PFM O-02",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "code": 30049011,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367677212?alt=media&token=4d858d37-1774-4b63-a1d6-d4347ad784b3",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367683883?alt=media&token=2f2a42d4-2303-465a-95df-e943e9ebf9c7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367691864?alt=media&token=551f506c-e533-4023-a4b7-239be9e50b01",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367698130?alt=media&token=4d547a78-92ae-486c-878b-e5d21490593c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367703335?alt=media&token=55349ee7-e2b9-4e8b-87e1-b1ab7ea07d4f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367709108?alt=media&token=e0588fb8-95df-4de8-b8e6-06a1cd37ff34",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FPFas3d47rWOyTfc06AdJ1664367714099?alt=media&token=696eb9b5-04a4-4987-9598-ecdf8dc97473"
          ],
          "quota": 0,
          "price": 600,
          "reqBurn": false,
          "upd": {
              "seconds": 1664367717,
              "nanoseconds": 481000000
          },
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 814000000
          },
          "description": "Description:\r\nImagine a burst of energy. And a boost in stamina & confidence. That’s AADAR PerforMANce for you. A perfect blend of Ayurvedic herbs like Safed Musli, Ashwagandha, Kaunch, and Kali Musli. A habit, that improves vitality and physical strength.\r\nSafed & Kali Musli + Ashwagandha + Koch Beej = Performance: An authentic combination of herbs straight from the ancient scripture to help men improve Stamina and performance.\r\nRestores Energy & Boosts Strength: A rejuvenator and stamina booster for men, it helps increase energy to overcome tiredness and fatigue. It also helps boost stamina & confidence, which in return, helps improve your physical strength and power.\r\nIncreases Stamina, Improves Strength: Performance helps provide strength, endurance, and will. It not only helps boost stamina but also helps strengthen the vital muscles.\r\n\r\nUsage:\r\nApply a few drops. Gently massage for a few minutes. Use every day at night for better stamina and blood circulation. For better results, use it along with AADAR Performance capsules. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 36\r\nDosage: Oil\r\nPack size: 60 ml\r\nIngredients: Shilajit, Black Seed, Jaiphal, and Ashwagandha\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features:\r\nAyurvedic Strength Booster, Stamina and Vitality for Men",
          "warranty": true,
          "variants": [],
          "sold": 0,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "id": "PFas3d47rWOyTfc06AdJ",
          "cost": 550
      },
      {
          "id": "SXL6gScPJWnX2PJD28mS",
          "upd": {
              "seconds": 1664286130,
              "nanoseconds": 342000000
          },
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 272000000
          },
          "code": 30049011,
          "title": "AADAR IMPRPO C-01",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286080612?alt=media&token=94622713-601b-4edb-9487-39f71745814a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286088459?alt=media&token=b8efcc37-dd25-4ed4-a2d3-ab1c5c10c410",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286094570?alt=media&token=41ef201f-792b-4b68-a5d9-9c5011c72e8e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286101236?alt=media&token=7c15020a-05df-4aee-a9ab-8e9102393b64",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286107403?alt=media&token=a9e637df-0ca0-4b02-a1ba-a3229cec06e2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286113814?alt=media&token=c5070577-2ed6-4935-8a30-0db066be4c6e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FSXL6gScPJWnX2PJD28mS1664286121383?alt=media&token=20fbb19b-f6f7-497b-91fa-708c5190d27d"
          ],
          "description": "Description:\r\nImmunity Pro is a powerful herbal immunity booster for men and women specially designed for you in an easily consumable form. The benefits of various herbs help improve the body’s resistance power and strength.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Immunity Booster\r\nShelf Life (months): 18\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Amla, Giloy, Ashwagandha, Bhringraj\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nImmunity Pro is a powerful herbal immunity booster for men and women specially designed for you in an easily consumable form.",
          "sold": 0,
          "burn": false,
          "cost": 499,
          "quota": 0,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "price": 749,
          "variants": [],
          "content": true,
          "warranty": true,
          "category": "Immunity Booster",
          "reqBurn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12"
      },
      {
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sold": 0,
          "description": "Description:\r\nA perfect combination of ayurvedic herbs that helps for complete cure and care. Alleviates pain, swelling, stiffness, and spasms strengthen joints and joint mobility, and is helpful in other age-related disorders such as diabetes, blood pressure, and Vata imbalance.\r\n\r\nUsage:\r\nOne capsule with water, every day in the morning after breakfast and one capsule in the evening after dinner for the first 15 -30 days. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Joint & Muscle Pain Relief\r\nShelf Life (months):35\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: shallaki, harsingr, nirgundi, giloy, hadjod, moringa, rasna, turmeric, nagarmotha, kuchla, saunth\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nImproves blood supply to the bones, soothes the joints, and helps treat levels of synovial fluid. It reduces the formation of Ama (Toxic remains) that accumulates in joints and causes stiffness and pain.",
          "upd": {
              "seconds": 1664286938,
              "nanoseconds": 780000000
          },
          "id": "UHfKSGtMJU5wP5obEjsY",
          "cost": 449,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 895000000
          },
          "code": 30049011,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286884532?alt=media&token=9eb06f1e-df31-40ae-9185-f52d00f33040",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286892572?alt=media&token=a349b086-744d-4820-985a-6301b3b71d0c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286898883?alt=media&token=50ae8311-2051-4099-99a6-2a0d80985fad",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286906086?alt=media&token=67e72801-7c5e-4aba-88cc-553a935c726c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286914031?alt=media&token=bb62f756-f717-4027-abda-98a087c358a5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286919224?alt=media&token=6c4c7776-4c0c-4f9f-91ff-90a40aeb599c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FUHfKSGtMJU5wP5obEjsY1664286930408?alt=media&token=84b03f96-cbde-4a3e-a280-9f04f39d632e"
          ],
          "category": "Joint & Muscle Pain Relief",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "reqBurn": false,
          "title": "AADAR ORTHOS C-01",
          "price": 599,
          "burn": false,
          "quota": 0,
          "variants": [],
          "content": true,
          "warranty": true
      },
      {
          "cost": 299,
          "category": "Sexual wellness",
          "description": "Description:\r\nEndure Oil is made with Vedic Pak Vidhi .It may help in increasing energy levels, molecules present in Jivanti, Kababchini and Akarkara optimize various male hormones for overall support to the physical strength and performance.\r\n\r\nUsage: \r\nApply a few drops on the private part. Gently massage for few minutes. Use daily in morning and night for best results \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):18\r\nDosage: Oil\r\nIngredients: Shilajit, Musli\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "burn": false,
          "content": true,
          "sold": 0,
          "upd": {
              "seconds": 1664279204,
              "nanoseconds": 938000000
          },
          "banners": [],
          "price": 399,
          "id": "UzvfvrZOxADbfdlpFssf",
          "warranty": true,
          "quota": 0,
          "code": 30049011,
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 938000000
          },
          "reqBurn": false,
          "title": "AADAR ENDURE O-01",
          "variants": [],
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12"
      },
      {
          "burn": false,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286463230?alt=media&token=1924fc4f-75cd-4886-af4a-6c0b928d2f04",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286469838?alt=media&token=a57abf1f-76c2-40af-9abb-f3e3fcc171dd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286478153?alt=media&token=8ff59acb-cc07-4e88-97fd-471b79b115d6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286485170?alt=media&token=8acd20a3-cd19-4f38-a506-ec2c21148b16",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286492365?alt=media&token=258e4bd8-90cf-45eb-a042-62baa6414744",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286499461?alt=media&token=217e3053-2b78-4e99-a577-cd1eb26e0010",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FWQBAaZztKJFTcAK1Tupv1664286511454?alt=media&token=5f44cb66-092d-480b-a4bf-b9e0f22e101f"
          ],
          "sold": 0,
          "content": true,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 329000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "cost": 140,
          "variants": [],
          "upd": {
              "seconds": 1664286520,
              "nanoseconds": 234000000
          },
          "category": "Diabetes",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "title": "AADAR JEEVANI P-01",
          "code": 30049011,
          "warranty": true,
          "description": "Description:\r\nAn Ayurvedic detox for your body, AADAR Jeevani is packed with a unique blend of Aloe Vera, Neem, and Harad that helps support natural blood glucose levels and manage healthy glucose levels in the body. An effective formulation that not only helps improve glycaemic control but also acts as a natural detox to the body.\r\n\r\nUsage: \r\n1-2 teaspoons daily before breakfast, with warm water \r\n\r\nKey Features: \r\nJeevani Powder is 100% natural and safe, with no additives or preservatives, and thus does not have any adverse effects. The goodness of Pure Herbs: The perfect blend of Aloe Vera, Neem, and Harde (Haritaki). Support natural blood glucose levels and helps in weight management. FDCA Approved\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Diabetes\r\nShelf Life (months):24\r\nDosage: Powder\r\nPack size: 100 Gram\r\nIngredients: Aloe Vera, Neem, and Harde (Haritaki)\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "price": 150,
          "id": "WQBAaZztKJFTcAK1Tupv",
          "quota": 0,
          "reqBurn": false
      },
      {
          "description": "Description:\r\nAadar Extra time oil made with Vedic Pak Vidhi. The natural ingredients of extra time oil help you feel stronger & more passionate. We commit to meticulously crafting our products with natural ingredients. The ingredients present in Extra time are ayurvedic herbs classically recommended for rejuvenating male health.\r\n\r\nUsage:\r\nApply a few drops on the private part. Gently massage for few minutes. Use daily in morning and night for best results \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):18\r\nDosage: Oil\r\nPack size: 30 ml\r\nIngredients: Jaiphal, Gokhru\r\nCounty of Origin :India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "sold": 0,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "title": "AADAR EXT O-01",
          "cost": 374,
          "price": 499,
          "reqBurn": false,
          "warranty": true,
          "code": 30049011,
          "variants": [],
          "category": "Sexual wellness",
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 705000000
          },
          "upd": {
              "seconds": 1664279204,
              "nanoseconds": 705000000
          },
          "banners": [],
          "quota": 0,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "content": true,
          "burn": false,
          "id": "YMouBlpvGPo9S0Inepud"
      },
      {
          "warranty": true,
          "upd": {
              "seconds": 1664285921,
              "nanoseconds": 710000000
          },
          "category": "Joint & Muscle Pain Relief",
          "price": 390,
          "variants": [],
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285869525?alt=media&token=4c8420b8-b326-470f-9354-a7f8a7820c76",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285877970?alt=media&token=0b233169-b7d6-45b7-8675-262bb209bc22",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285891150?alt=media&token=32341ce3-21f3-477f-8094-50912ebed264",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285896792?alt=media&token=17f64591-0292-4524-9411-f9c4a881003f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285903488?alt=media&token=11610a47-68f0-4364-bfe6-db89f27a2cfd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285908009?alt=media&token=33340c7b-8a03-4216-8a28-b540210a0e4b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fa7aHR2uBcXS1was7Df1d1664285913566?alt=media&token=32b56916-d4e0-44c7-8621-d36919fe2783"
          ],
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 85000000
          },
          "sold": 0,
          "cost": 350,
          "reqBurn": false,
          "id": "a7aHR2uBcXS1was7Df1d",
          "content": true,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "title": "AADAR ORTHOS O-01",
          "code": 30049011,
          "quota": 0,
          "burn": false,
          "description": "Description:\r\nOrtho Sure oil for Muscle and Joint pain relief. A perfect combination of ayurvedic herbs that helps for complete cure and care. Alleviates pain, swelling, stiffness, and spasms strengthen joints and joint mobility, and is helpful in other age-related disorders such as diabetes, blood pressure, and Vata imbalance.\r\n\r\nUsage:\r\nApply a few drops daily to the affected area. Massage gently and leave it for some time. Apply warm compression for better absorption. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Joint and Muscle Pain\r\nShelf Life (months):36\r\nDosage: Oil\r\nPack size: 100 ml\r\nIngredients: Hadjod, Shallaki, Nilgiri, Cinnamon, Tamalpatra, Nirgundi, Clove, Sesame, Mahanarayan oil, Jyotishmati\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nJoint & Muscle Pain Relief"
      },
      {
          "sold": 0,
          "title": "AADAR PFM C-01",
          "warranty": true,
          "reqBurn": false,
          "upd": {
              "seconds": 1664367478,
              "nanoseconds": 805000000
          },
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 502000000
          },
          "quota": 0,
          "category": "Sexual wellness",
          "description": "Description:\r\nImagine a burst of energy. And a boost in stamina & confidence. That’s AADAR PerforMANce for you. A perfect blend of Ayurvedic herbs like Safed Musli, Ashwagandha, Kaunch, and Kali Musli. A habit, that improves vitality and physical strength.\r\nSafed & Kali Musli + Ashwagandha + Koch Beej = Performance: An authentic combination of herbs straight from the ancient scripture to help men improve Stamina and performance.\r\nRestores Energy & Boosts Strength: A rejuvenator and stamina booster for men, it helps increase energy to overcome tiredness and fatigue. It also helps boost stamina & confidence, which in return, helps improve your physical strength and power.\r\nIncreases Stamina, Improves Strength: Performance helps provide strength, endurance, and will. It not only helps boost stamina but also helps strengthen the vital muscles.\r\n\r\nUsage:\r\nFor the first 15 days, Two capsules with water, every day in the morning with breakfast and two capsules in the evening with dinner. After 15 days, take one capsule in the morning and one capsule in the evening. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):36\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Safed Musli, Kaunch, Aswagandha, Kali Musli\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nAyurvedic Strength Booster, Stamina and Vitality for Men",
          "price": 700,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "content": true,
          "code": 30049011,
          "id": "aAdrOYQQQsVsPii6FRpM",
          "cost": 480,
          "burn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaAdrOYQQQsVsPii6FRpM1664367447700?alt=media&token=bd7ad443-2a18-41e7-9641-9e6eef93652b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaAdrOYQQQsVsPii6FRpM1664367453451?alt=media&token=f6715fd4-b5c6-4cd4-b5b6-ec6884ce50ef",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaAdrOYQQQsVsPii6FRpM1664367458554?alt=media&token=6e73f25a-aa0a-434a-a3d4-6e912a2ba262",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaAdrOYQQQsVsPii6FRpM1664367463754?alt=media&token=d7af0eee-a079-491b-a907-faee8c397439",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaAdrOYQQQsVsPii6FRpM1664367470011?alt=media&token=dffc98b2-ff3f-4761-aef3-9c212781a598",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaAdrOYQQQsVsPii6FRpM1664367476334?alt=media&token=a67ff8e1-f4e8-4b89-984e-e343e1efa108"
          ],
          "variants": []
      },
      {
          "burn": false,
          "category": "Sexual wellness",
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 183000000
          },
          "variants": [],
          "warranty": true,
          "cost": 1350,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "content": true,
          "reqBurn": false,
          "upd": {
              "seconds": 1664362000,
              "nanoseconds": 854000000
          },
          "code": 30049011,
          "quota": 0,
          "price": 1800,
          "title": "AADAR STP C-02",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaLADU70DHXwwhUgPJAjf1664361955421?alt=media&token=41026532-a75a-41f5-a101-8986519c924c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaLADU70DHXwwhUgPJAjf1664361964038?alt=media&token=a2551495-d265-4e47-b954-b9ea20097e43",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaLADU70DHXwwhUgPJAjf1664361969747?alt=media&token=014d5bda-fd74-4af9-9779-c594b7ee921f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaLADU70DHXwwhUgPJAjf1664361984323?alt=media&token=817e1b83-7ae9-4ca8-a01e-1926d2d5ba8c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaLADU70DHXwwhUgPJAjf1664361990373?alt=media&token=ccf89ff4-0fef-4407-99a8-a6d8739f70e5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FaLADU70DHXwwhUgPJAjf1664361998714?alt=media&token=76832d71-7669-4b88-a0eb-e11a436ba0e5"
          ],
          "description": "Description:\r\nStraight up Capsule for Strength where it matters the most. A rejuvenator and stamina booster for male function. It helps increase strength and toughness by improving blood flow. It also helps regain muscular flexibility and firmness to enrich your confidence.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning after breakfast, and two capsules in the evening after dinner for the first 15 -30 days. After a month, the dosage can be reduced to two capsules per day. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):35\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Chota Gokhru, Ashwagandha, Babchi, Palash, Safed Behemen, Ginseng, Kaunch, Fenugreek, Yashad Bhasma.\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nHelps real strength for Men",
          "id": "aLADU70DHXwwhUgPJAjf",
          "sold": 0,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12"
      },
      {
          "quota": 0,
          "warranty": true,
          "cost": 770,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "reqBurn": false,
          "description": "Description:\r\nThe all-natural Pleasure Capsules for women are formulated with a blend of ayurvedic ingredients like Gokhru, Noni, Kesar, and Ashwagandha that together help boost sexual wellness and strengthen vital organs. The capsules act as a natural rejuvenator and energy booster and help eliminate stress, overcome fatigue and improve energy, performance, and desire. The all-natural capsules help alleviate general fatigue and overall performance. The FSSAI-certified capsules are tested for heavy metals and are free from harmful chemicals.\r\n\r\nUsage:\r\nFor the first 15 days - 2 capsules with water, every day in the morning with breakfast and 2 capsules with water, in the evening with dinner. After 15 days - 1 capsule with water, every day in the morning with breakfast and 1 capsule with water, in the evening with dinner. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 18\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Nutmeg and Mace, Ashwagandha, Gokhru , Safed Musli, Kesar, Kaunch, Vidarikand, Lata Kasturi, Nirgundi, Methi, Ambashthaki, Clove, Noni\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nImproves stamina, Boosts libido and improves performance, Strengthens vital organs, Alleviates general fatigue",
          "category": "Sexual wellness",
          "burn": false,
          "price": 1400,
          "id": "b7P90pSXsCui4ntLR88t",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fb7P90pSXsCui4ntLR88t1664367900230?alt=media&token=1c1d7336-540b-4621-bbc4-d88d2621dacf",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fb7P90pSXsCui4ntLR88t1664367915559?alt=media&token=de252095-25e0-4980-a6d9-fe1b397def1c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fb7P90pSXsCui4ntLR88t1664367927986?alt=media&token=4ba94620-aab0-427c-b471-6c3195539bb6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fb7P90pSXsCui4ntLR88t1664367933689?alt=media&token=0085a588-0cf7-4dee-bb8f-55f17b58f3bf",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fb7P90pSXsCui4ntLR88t1664367940681?alt=media&token=3299c1a5-ad28-455b-bdb3-3fbb08306889",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fb7P90pSXsCui4ntLR88t1664367945706?alt=media&token=3ff95686-0ff9-4989-be93-babb9eff0693"
          ],
          "title": "AADAR PLS C-02",
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 91000000
          },
          "sold": 0,
          "variants": [],
          "upd": {
              "seconds": 1664367949,
              "nanoseconds": 417000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "content": true,
          "code": 30049011
      },
      {
          "title": "AADAR ORTHOS C-02",
          "reqBurn": false,
          "content": true,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "quota": 0,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287123775?alt=media&token=6e2e3508-e1c4-484b-8c66-d953b1ba8cf8",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287129224?alt=media&token=a67c12ab-8bdf-4af9-83ba-5789d58dcdf7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287135004?alt=media&token=af9fc535-2b0e-4649-af69-01f60f680f53",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287141703?alt=media&token=a05ab324-6c1c-47db-ad75-a3a76e881ea0",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287148210?alt=media&token=a2a0e41a-0e31-495b-a4f2-e216f3cb49dc",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287152902?alt=media&token=3d563d36-3ce8-4b8d-b8a0-e0190eb7fb16",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcGSvrdKEn0nmSZbiyPQK1664287158104?alt=media&token=d855725c-f15f-41d4-b682-d4c56f4ab31c"
          ],
          "burn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "cost": 899,
          "category": "Joint & Muscle Pain Relief",
          "code": 30049011,
          "warranty": true,
          "price": 1198,
          "description": "Description:\r\nA Perfect Combination Of Ayurvedic Herbs That Helps For Complete Cure And Care. Alleviates Pain, Swelling, Stiffness, and Spasms, Strengthening Joints And Joint Mobility And Is Helpful In Other Age-Related Disorders Such as Diabetes, Blood Pressure, And Vata Imbalance.\r\n\r\nUsage:\r\nOne Capsule With Water, Every Day In The Morning After Breakfast And One Capsule In The Evening After Dinner For The First 15 -30 Days. \r\n\r\nKey Features: \r\nImproves Blood Supply To The Bones, Soothes The Joints, And Helps Treat Levels Of Synovial Fluid. It Reduces The Formation Of Ama (Toxic Remains) That Accumulates In Joints And Causes Stiffness And Pain.\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Joint & Muscle Pain Relief\r\nShelf Life (Months): 35\r\nDosage: Capsule\r\nPack Size: 120 Capsules\r\nIngredients: Shallaki, Harsingr, Nirgundi, Giloy, Hadjod, Moringa, Rasna, Turmeric, Nagarmotha, Kuchla, Saunth\r\nCounty Of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.Ltd",
          "id": "cGSvrdKEn0nmSZbiyPQK",
          "sold": 0,
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 21000000
          },
          "variants": [],
          "upd": {
              "seconds": 1664287167,
              "nanoseconds": 19000000
          }
      },
      {
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363209860?alt=media&token=b50942ab-7639-4804-9aca-77c2ab19826f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363214616?alt=media&token=894e246f-7f1b-494d-9dd8-f2efa62c5e23",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363222019?alt=media&token=95bb7b17-75af-4fec-883e-e2588cd3f3e5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363226810?alt=media&token=13909c08-5c74-4f91-a4bf-211aa56fca0d",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363231859?alt=media&token=dd8cce63-6392-4d1f-8f94-ef371204ce5c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363236221?alt=media&token=a1ddf95f-d892-4590-82e8-56b53ff7a91e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FcYjb555FPRNEyI7wwoDz1664363240949?alt=media&token=ac5dcca1-cb03-4c80-8508-90d086aa3e2a"
          ],
          "title": "AADAR SPA C-01",
          "id": "cYjb555FPRNEyI7wwoDz",
          "reqBurn": false,
          "upd": {
              "seconds": 1664363243,
              "nanoseconds": 227000000
          },
          "code": 30049011,
          "warranty": true,
          "sold": 0,
          "category": "Chyawanprash",
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 876000000
          },
          "content": true,
          "variants": [],
          "quota": 0,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "cost": 549,
          "burn": false,
          "description": "Description:\r\nStay Proactive Capsule for staying charged all day. Stay PRO active is all about natural, herbal ingredients. There's shilajit and ashwagandha. And all that it does to offer you energy naturally. Offering you great strength and fighting fatigue throughout the day.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Chyawanprash\r\nShelf Life (months): 36\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Ashwagandha, Amla, and Shilajit\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nEnergy Boost and Relief from Stress and Fatigue for Both Men and Women",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "price": 749
      },
      {
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "reqBurn": false,
          "cost": 645,
          "upd": {
              "seconds": 1664367014,
              "nanoseconds": 571000000
          },
          "code": 30049011,
          "price": 860,
          "category": "Hair care",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "quota": 0,
          "variants": [],
          "title": "AADAR GHERBS O-02",
          "warranty": true,
          "id": "dMKFJo4ReWL6teONbB6m",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664366972817?alt=media&token=51f5ca54-b753-4f93-b44a-dcddf642ef90",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664366978146?alt=media&token=5800edb8-907a-4d24-b885-ea94ceaf06ea",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664366985722?alt=media&token=d679419c-b409-4c55-bde7-c3b7dc783dfd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664366990499?alt=media&token=ccd9deb4-6211-46ae-b736-10fdc7230c71",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664366996116?alt=media&token=f641c71b-6825-44f8-b707-38c7119a105a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664367003445?alt=media&token=5e68d3f8-faf0-4da4-8c4c-bb89ff2354cd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664367008055?alt=media&token=83f9c559-fe69-44e8-ac56-69d1c587781e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FdMKFJo4ReWL6teONbB6m1664367012244?alt=media&token=268c64d8-c8c8-4ae2-b4fd-5c6fe5008d35"
          ],
          "content": true,
          "sold": 0,
          "description": "Description:\r\nGood Herbs hair oil is an age-old ayurvedic blend of 6 rare herbs infused with 4 essential oils in a 36-hour long ayurvedic process. The process is completed after it reaches the desired consistency of miscibility of herbs, appearance, smell, and effectiveness.\r\n\r\nUsage:\r\nApply it properly and massage the scalp for a few minutes. Let it stay for a few hours before you wash your hair. Use it at least 3 times a week. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Hair care\r\nShelf Life (months):36\r\nDosage: Oil\r\nPack size:200 ml\r\nIngredients: Red Onion, Bhringraj, Hibiscus, Virgin Coconut\r\nCounty of Origin: India\r\nManufacturer Name :S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nHair Fall and Damage Control | Supports Hair Growth\r\n",
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 211000000
          },
          "burn": false
      },
      {
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "code": 30049011,
          "title": "AADAR EXT O-02",
          "description": "Description:\r\nAadar Extra time oil made with Vedic Pak Vidhi. The natural ingredients of extra time oil help you feel stronger & more passionate. We commit to meticulously crafting our products with natural ingredients. The ingredients present in Extra time are ayurvedic herbs classically recommended for rejuvenating male health.\r\n\r\nUsage: \r\nApply a few drops on the private part. Gently massage for few minutes. Use daily in morning and night for best results \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 18\r\nDosage: Oil\r\nPack size: 60 ml\r\nIngredients: Jaiphal, Gokhru\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "burn": false,
          "id": "h8Lzo9GPzPyXdcwvfsxZ",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "quota": 0,
          "category": "Sexual wellness",
          "warranty": true,
          "sold": 0,
          "cost": 748,
          "banners": [],
          "content": true,
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 861000000
          },
          "reqBurn": false,
          "price": 998,
          "upd": {
              "seconds": 1664279204,
              "nanoseconds": 861000000
          },
          "variants": []
      },
      {
          "title": "AADAR IMPRPO C-02",
          "variants": [],
          "cost": 868,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "category": "Immunity Booster",
          "upd": {
              "seconds": 1664286030,
              "nanoseconds": 673000000
          },
          "sold": 0,
          "burn": false,
          "quota": 0,
          "description": "Description:\r\nImmunity Pro is a powerful herbal immunity booster for men and women specially designed for you in an easily consumable form. With the benefits of various herbs, it helps improve the body’s resistance power, and strength.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning. \r\n\r\nKey features: \r\nImmunity Pro is a powerful herbal immunity booster for men and women specially designed for you in an easily consumable form.\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Immunity Booster\r\nShelf Life (months):18\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Amla, Giloy, Ashwagandha, Bhringraj\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "content": true,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664285985013?alt=media&token=136383f6-88c2-4727-a5d6-9a60573fb757",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664285992643?alt=media&token=bd9d8fa3-2d2a-4d40-9e26-3b3283173e56",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664285998069?alt=media&token=407359a2-80b5-40fe-b529-e6da90dcba72",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664286002723?alt=media&token=1a408c96-3497-4dec-b930-3fb94b12017a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664286011092?alt=media&token=b9fe1cb7-cd86-4cd8-a3d3-35dcbebb1f45",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664286017098?alt=media&token=8ad397ee-a666-4d58-bb2c-0dc2a6ef3d14",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FhDg09TP3NmNs4uKZ4V6J1664286022387?alt=media&token=0d68ed4a-313e-4473-bd52-172b5fa205b1"
          ],
          "warranty": true,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 285000000
          },
          "id": "hDg09TP3NmNs4uKZ4V6J",
          "reqBurn": false,
          "price": 1498,
          "code": 30049011
      },
      {
          "cost": 274,
          "reqBurn": false,
          "sold": 0,
          "code": 30049011,
          "variants": [],
          "warranty": true,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "id": "ioqSk5GNaMPgCPVPuG4z",
          "upd": {
              "seconds": 1664368339,
              "nanoseconds": 623000000
          },
          "burn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "title": "AADAR RELAX P-02",
          "category": "Digestion",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368294368?alt=media&token=8e669aba-5e37-4fc6-9ca5-b9a416d31ef0",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368306357?alt=media&token=0755b14e-8ce7-4278-98f4-abd0255e9283",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368311356?alt=media&token=f3be29c8-a8b1-42ff-9b0b-efac2e3cf32c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368318188?alt=media&token=9c9b28df-b755-4577-818e-e39e7afc0775",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368325410?alt=media&token=141328ce-ce17-45f7-9a41-662e3de3e797",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368330493?alt=media&token=01db948f-0df4-4299-8329-f8c2ad63c30d",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FioqSk5GNaMPgCPVPuG4z1664368336284?alt=media&token=70b06bdf-5c80-4ca2-b1cc-c65747b4fb06"
          ],
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 517000000
          },
          "price": 360,
          "content": true,
          "description": "Description:\r\nFacing Digestive Problems? Just Re-Lax. Formulated With Hand-Picked Herbs Like Senna Patti, Harad, And Ajwain, Aadar Re-Lax Is An Ayurvedic Approach To Constipation And Helps In Regulating Bowel Movements In The Body. The Natural Blend Helps Provide Effective Relief From Constipation And Promotes Good Digestion. A 5000 Years Old Solution For The 21st Century Digestive Troubles.\r\n\r\nUsage: \r\nThe Ideal Dosage Of Re-Lax Powder Is 1 Teaspoon Per Day Before BedTime, With Normal Water. In Case Of Chronic Constipation, The Dosage Can Be Increased To 2 Teaspoons. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Digestion\r\nShelf Life (Months) :24\r\nIngredients: Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), And Sanchal\r\nCounty Of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.Ltd\r\n\r\nKey Features: \r\nRe-Lax Is A Perfect Blend Of Herbs Such As Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), And Sanchal. Works As A Natural Laxative That Cleanses The Body And Aids Bowel Movements. Safe For Regular Use And Doesn’t Cause Dependence Or Build A Habit. It Is An Ayurvedic Solution For Constipation And Gastric Discomforts. Clinically Researched Ayurvedic Formulation, It Doesn’t Contain Any Additives Or Preservatives And Thus Has No Side Effects. ",
          "quota": 0
      },
      {
          "cost": 360,
          "title": "AADAR RELAX C-02",
          "sold": 0,
          "reqBurn": false,
          "description": "Description:\r\nFacing digestive problems? Just Re-Lax. Formulated with hand-picked herbs like Senna Patti, Harad, and Ajwain, AADAR Re-Lax is an Ayurvedic approach to constipation and helps in regulating bowel movements in the body. The natural blend helps provide effective relief from constipation and promotes good digestion. A 5000 years old solution for 21st-century digestive troubles.\r\n\r\nUsage:\r\nThe ideal dosage of Re-Lax is 2 capsules every day just before bedtime, with normal water. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Digestion\r\nShelf Life (months): 36\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Senna Leaves, Ajwain, Harde, Sanchal\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nRe-Lax is a perfect blend of herbs such as Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), and Sanchal. Works as a natural laxative that cleanses the body and aids bowel movements. Safe for regular use and doesn’t cause dependence or build a habit. It is an ayurvedic solution for constipation and gastric discomforts. Clinically researched ayurvedic formulation, it doesn’t contain any additives or preservatives and thus has no side effects. ",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368123264?alt=media&token=c7308be1-6597-4d80-adcd-eb3c06f4d3c3",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368137430?alt=media&token=48c05089-2e54-4093-b03c-a5a271a4026b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368157378?alt=media&token=c3df7ec7-ea7d-494f-8465-27c2ecadb33b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368165197?alt=media&token=3c96ba8b-a382-4e82-8574-be3a7e44e50c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368172279?alt=media&token=374c6466-c9ad-4a8b-8b5e-688a69b43496",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368177737?alt=media&token=ce4838b1-b72d-43f8-b303-bc22a48e487c",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FivUK9N5x0HnXb4nS5xP01664368183270?alt=media&token=dc87fcd5-613b-4a6d-9a2e-ce4b489d7606"
          ],
          "content": true,
          "burn": false,
          "code": 30049011,
          "upd": {
              "seconds": 1664368185,
              "nanoseconds": 821000000
          },
          "variants": [],
          "category": "Digestion",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 274000000
          },
          "quota": 0,
          "warranty": true,
          "price": 480,
          "id": "ivUK9N5x0HnXb4nS5xP0"
      },
      {
          "burn": false,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FlWv7FjZGvE90oZgAh5QY1664367797562?alt=media&token=484e6270-ba43-4e37-b58b-83fe92fba84e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FlWv7FjZGvE90oZgAh5QY1664367804382?alt=media&token=06d4fda3-c8b2-4a23-8f7f-e084520413df",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FlWv7FjZGvE90oZgAh5QY1664367831868?alt=media&token=d1d8be99-e6fb-47f6-a232-1d96d6540173",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FlWv7FjZGvE90oZgAh5QY1664367841922?alt=media&token=61015cbb-a576-4b3a-841d-2a69fba3dad7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FlWv7FjZGvE90oZgAh5QY1664367856015?alt=media&token=a8271070-c4ff-4562-a02b-06502f20bfe0",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FlWv7FjZGvE90oZgAh5QY1664367867312?alt=media&token=5f87e013-ac96-4f46-9217-080dafac8bfc"
          ],
          "warranty": true,
          "title": "AADAR PLS C-01",
          "cost": 419,
          "quota": 0,
          "reqBurn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "price": 700,
          "variants": [],
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "category": "Sexual wellness",
          "id": "lWv7FjZGvE90oZgAh5QY",
          "content": true,
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 999000000
          },
          "code": 30049011,
          "description": "Description:\r\nThe all-natural Pleasure Capsules for women are formulated with a blend of ayurvedic ingredients like Gokhru, Noni, Kesar, and Ashwagandha that together help boost sexual wellness and strengthen vital organs. The capsules act as a natural rejuvenator and energy booster and help eliminate stress, overcome fatigue and improve energy, performance, and desire. The all-natural capsules help alleviate general fatigue and overall performance. The FSSAI-certified capsules are tested for heavy metals and are free from harmful chemicals.\r\n\r\nUsage:\r\nFor the first 15 days - 2 capsules with water, every day in the morning with breakfast and 2 capsules with water, in the evening with dinner. After 15 days - 1 capsule with water, every day in the morning with breakfast and 1 capsule with water, in the evening with dinner. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 18\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Nutmeg and Mace, Ashwagandha, Gokhru , Safed Musli, Kesar, Kaunch, Vidarikand, Lata Kasturi, Nirgundi, Methi, Ambashthaki, Clove, Noni\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nImproves stamina, Boosts libido and improves performance, Strengthens vital organs, Alleviates general fatigue",
          "upd": {
              "seconds": 1664367869,
              "nanoseconds": 841000000
          },
          "sold": 0
      },
      {
          "content": true,
          "variants": [],
          "category": "Weight Loss Supplement",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "burn": false,
          "warranty": true,
          "code": 30049011,
          "title": "AADAR WNM C-01",
          "description": "Description:\r\nWeight No More is a natural way of going about managing weight - filled with the goodness of Garcinia, Triphala, Methi, and Green Tea, and developed on the principles of Ayurveda - in a manner that’s unique only to AADAR. Weight No More stimulates fat burn, curbs calorie intake, and works on everything necessary to help you with your weight. And that too, naturally.\r\n\r\nUsage: \r\nTwo capsules in the morning empty stomach, and Two capsules at night after a meal, with warm water, every day. Living a healthy life is a matter of discipline. And making Weight No More part of your routine helps you stay in great shape. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Weight Loss Supplement\r\nShelf Life (months):36\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: GARCINIA + TRIPHALA + GREEN TEA\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nEnriched with Garcinia Cambogia, Green Tea, Triphala, Fenugreek. The unique blend of these herbal ingredients boosts metabolism naturally. FSSAI Approved & Non-GMO. Tested for Heavy Metals. Zero chemicals & Cruelty-Free (Not Tested on Animals)",
          "price": 1599,
          "id": "mfyOdSNA1dxb6xgsj5sF",
          "upd": {
              "seconds": 1664361715,
              "nanoseconds": 603000000
          },
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361683729?alt=media&token=a1861ef4-3fa3-412c-963a-68137163ffad",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361688443?alt=media&token=f616070c-6cc1-4a93-a914-66e9608c052a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361692441?alt=media&token=5a328260-c7f3-4606-9d44-1a4d9a3658fe",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361698159?alt=media&token=06a8bfdb-05e1-4e4b-8aee-930e2fa585c5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361703541?alt=media&token=5dd9f3de-3b9b-4d05-b995-bde5e73074c3",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361707513?alt=media&token=33d90dc8-5042-42f1-89de-a25d8148a291",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FmfyOdSNA1dxb6xgsj5sF1664361713672?alt=media&token=520efa60-c9fb-4615-aa60-12003dd48abf"
          ],
          "cost": 699,
          "reqBurn": false,
          "sold": 0,
          "quota": 0,
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 280000000
          },
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12"
      },
      {
          "description": "Description:\r\nAadar Straight Up oil made with Vedic Pak Vidhi. A rejuvenator and stamina booster for male function. It also helps regain muscular flexibility and firmness to enrich your confidence.\r\n\r\nUsage:\r\nApply a few drops of oil to your parts. Gently massage for few minutes. Use daily in morning and night for best results \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):36\r\nDosage: Oil\r\nPack size: 30 ml\r\nIngredients: Lavang, Babchi\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "code": 30049011,
          "variants": [],
          "reqBurn": false,
          "upd": {
              "seconds": 1664279204,
              "nanoseconds": 471000000
          },
          "quota": 0,
          "burn": false,
          "cost": 374,
          "id": "n4sUDnFhndnBVKyrZ4lz",
          "content": true,
          "category": "Sexual wellness",
          "sold": 0,
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 471000000
          },
          "title": "AADAR STP O-01",
          "price": 499,
          "banners": [],
          "warranty": true
      },
      {
          "content": true,
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 170000000
          },
          "upd": {
              "seconds": 1664368054,
              "nanoseconds": 187000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "reqBurn": false,
          "category": "Digestion",
          "description": "Description:\r\nFacing digestive problems? Just Re-Lax. Formulated with hand-picked herbs like Senna Patti, Harad and Ajwain, AADAR Re-Lax is an Ayurvedic approach to constipation and helps in regulating bowel movements in the body. The natural blend helps provide effective relief from constipation and promotes good digestion. A 5000 year old solution for 21st-century digestive troubles.\r\n\r\nUsage:\r\nThe ideal dosage of Re-Lax is 2 capsules every day just before bedtime, with normal water. \r\nDosage: Capsule\r\nPack size: 60 Capsules\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Digestion\r\nShelf Life (months):36\r\nIngredients: Senna Leaves, Ajwain, Harde, Sanchal\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nRe-Lax is a perfect blend of herbs such as Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), and Sanchal. Works as a natural laxative that cleanses the body and aids bowel movements. Safe for regular use and doesn’t cause dependence or build a habit. It is an ayurvedic solution for constipation and gastric discomforts. Clinically researched ayurvedic formulation, it doesn’t contain any additives or preservatives and thus has no side effects. ",
          "id": "nIMrmOu65zeBc3s6QVh3",
          "burn": false,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664367973390?alt=media&token=0eeaf59c-a7c1-4530-b9fd-0e99b24c9a0e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664367979080?alt=media&token=5aba9adf-e59d-4509-af49-801f78e6a177",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664367988505?alt=media&token=e33c5709-9679-40c4-bf84-f96f9d0160c4",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664367994838?alt=media&token=40a426e7-fc45-4f04-9096-a943a2bd6b72",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664368013614?alt=media&token=87575b11-69db-41ff-a41c-66a2ef403274",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664368019300?alt=media&token=ac2e6808-bbb7-4331-92f7-721a61e0fe55",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnIMrmOu65zeBc3s6QVh31664368024392?alt=media&token=c5f75a26-7623-489b-be52-90fc22127c33"
          ],
          "sold": 0,
          "cost": 228,
          "title": "AADAR RELAX C-01",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "quota": 0,
          "price": 240,
          "variants": [],
          "code": 30049011,
          "warranty": true
      },
      {
          "quota": 0,
          "burn": false,
          "cost": 1349,
          "reqBurn": false,
          "title": "AADAR ENDURE C-02",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "code": 30049011,
          "category": "Sexual wellness",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 178000000
          },
          "price": 1800,
          "description": "Description:\r\nThe unique and powerful combination of herbs such as Gokhru, Musli, and Shatavari helps to better your endurance levels. Endure Capsule may help in increasing energy levels, molecules present in Jivanti, Kababchini, and Akarkara optimize various male hormones for overall support to physical strength and performance.\r\n\r\nUsage:\r\nConsume two capsules with water, every day in the morning after breakfast and two capsules in the evening after dinner for the first 15 -30 days. After a month, the dosage can be reduced to two capsules per day \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months): 18\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Shatavari, Gokhru, Ashwagandha, Safed Musli, and Amla\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nhelps to overcome the early coming issue and strengthens the delicate part\r\n\r\n",
          "content": true,
          "id": "nyiEcgpAcrWsY5ZRCqfb",
          "sold": 0,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnyiEcgpAcrWsY5ZRCqfb1664366853324?alt=media&token=7c55bcdd-ac31-4bb6-8443-d10866b81ec7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnyiEcgpAcrWsY5ZRCqfb1664366860070?alt=media&token=c43816b6-d830-49e8-bec9-3919aab677a7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnyiEcgpAcrWsY5ZRCqfb1664366864711?alt=media&token=f414e64c-4363-43d2-bfbe-508947c54d26",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnyiEcgpAcrWsY5ZRCqfb1664366870257?alt=media&token=884fd1ed-ea6b-4a56-88b5-bff3b501d0a9",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnyiEcgpAcrWsY5ZRCqfb1664366875029?alt=media&token=152af967-e5ae-4627-b9ce-716b10d74f86",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FnyiEcgpAcrWsY5ZRCqfb1664366880685?alt=media&token=d2983114-1ffd-4136-87b1-f7f8d9694b9b"
          ],
          "warranty": true,
          "variants": [],
          "upd": {
              "seconds": 1664366883,
              "nanoseconds": 396000000
          }
      },
      {
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "description": "Description:\r\nGood Period is a fusion of authentic various ayurvedic herbs such as Shatavari, Ashoka, Turmeric, and Manjistha that helps you with hormonal imbalance, and PCOS and regularizes menstrual cycles.HELPS With Period Pain And Cramps: A natural detoxifier, Good Period helps purify the blood, and regularise the excessive flow of blood. It also has anti-inflammatory and antispasmodic properties, which help you provide relief from agonizing period pain, cramps, weakness, and mood swings.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning with breakfast, and two capsules in the evening with dinner. \r\n\r\nSpecification:\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nKey features: For Hormone Balance, PCOS, Period Pain relief, and Mood Swings\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Women’s health\r\nShelf Life (months):18\r\nIngredients: Shatavari | Ashoka | Manjistha | Turmeric\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "cost": 799,
          "sold": 0,
          "upd": {
              "seconds": 1664367189,
              "nanoseconds": 210000000
          },
          "content": true,
          "warranty": true,
          "price": 1260,
          "burn": false,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 248000000
          },
          "reqBurn": false,
          "title": "AADAR GP C-02",
          "variants": [],
          "id": "oyfIep7vkpc8FaX9FVpW",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367143012?alt=media&token=500ed9ad-c1d2-4fad-acd8-d14e6e83e37f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367150247?alt=media&token=13c83a93-9235-4aa8-82e0-98865203dec2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367156853?alt=media&token=690b81a1-7cb4-4ac2-80fc-f419f4ae6cfd",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367165281?alt=media&token=1e32663d-e1d7-4c73-b521-a1eb0ca3ade2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367171733?alt=media&token=4e8c49cd-0d8b-412a-bebe-a9817d403ad1",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367178249?alt=media&token=acd7d914-3eeb-458f-95ff-c19b781edbf1",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FoyfIep7vkpc8FaX9FVpW1664367185667?alt=media&token=de6a1f0c-1921-4830-a8a5-ea641152cba1"
          ],
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "quota": 0,
          "code": 30049011,
          "category": "Women's health"
      },
      {
          "price": 1000,
          "burn": false,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "quota": 0,
          "id": "p35GuKoYGMuPsQMTNF38",
          "warranty": true,
          "description": "Description:\r\nImagine a burst of energy. And a boost in stamina & confidence. That’s AADAR performance for you. A perfect blend of Ayurvedic herbs like Safed Musli, Ashwagandha, Kaunch, and Kali Musli. A habit, that improves vitality and physical strength.\r\n\r\nUsage:\r\nHow to use Performance capsule: For the first 15 days, two capsules with water, every day in the morning with breakfast and two capsules in the evening with dinner. After 15 days, take one capsule in the morning and one capsule in the evening. One pack contains 60 capsules. How to use Performance oil: Apply a few drops on the private part. Gently massage for a few minutes. Use every day at night for better stamina and blood circulation. For better results, use it along with Performance capsules. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):36\r\nDosage: Oil and capsule\r\nPack size: 60 Capsules & 30 ml\r\nIngredients: SAFED MUSLI, ASHWAGANDHA, GOKSHURA\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features: \r\nEnriched with Safed Musli, Ashwagandha, Shilajit, and Kali Musli. Restores energy and fights fatigue. Boosts & improves performance. Increases vitality and stamina. Improves physical strength. FDCA Approved",
          "content": true,
          "code": 30049011,
          "sin": {
              "seconds": 1664279202,
              "nanoseconds": 900000000
          },
          "category": "Sexual wellness",
          "cost": 599,
          "upd": {
              "seconds": 1664367771,
              "nanoseconds": 521000000
          },
          "variants": [],
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fp35GuKoYGMuPsQMTNF381664367744891?alt=media&token=c034a2ff-0d13-4c57-ac3a-c61d85cfb3ff",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fp35GuKoYGMuPsQMTNF381664367750812?alt=media&token=fbefa58f-bd88-48a4-b0b5-2ca9dccbab64",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fp35GuKoYGMuPsQMTNF381664367758908?alt=media&token=e4d41207-8ebc-42ef-b318-5535133ee6d4",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fp35GuKoYGMuPsQMTNF381664367764657?alt=media&token=141965cf-c12e-480a-ab0e-41e440584134",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fp35GuKoYGMuPsQMTNF381664367769587?alt=media&token=da64ed6f-c31a-44dc-9a0d-52a2db0ab577"
          ],
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "sold": 0,
          "title": "AADAR PFM OC-01",
          "reqBurn": false
      },
      {
          "variants": [],
          "burn": false,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "category": "Diabetes",
          "upd": {
              "seconds": 1664286216,
              "nanoseconds": 613000000
          },
          "warranty": true,
          "price": 340,
          "description": "Description:\r\nAn Ayurvedic detox for your body, AADAR Jeevani is packed with a unique blend of Aloe Vera, Neem, and Harad that helps support natural blood glucose levels and manage healthy glucose levels in the body. An effective formulation that not only helps improve glycaemic control but also acts as a natural detox to the body.\r\n\r\nUsage:\r\nThe ideal dosage is 2 capsules with warm water on an empty stomach in the morning. \r\n\r\nKey features: \r\nJeevani Capsules are 100% natural and safe, with no additives or preservatives, and thus do not have any adverse effects. The goodness of Pure Herbs: The perfect blend of Aloe Vera, Neem, and Harde (Haritaki). Support natural blood glucose levels and helps in weight management. FDCA Approved\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Diabetes\r\nShelf Life (months): 36\r\nDosage: Capsule\r\nIngredieants :Aloe Vera, Neem and Harde (Haritaki)\r\nPack size: 60 Capsules \r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "code": 30049011,
          "cost": 299,
          "reqBurn": false,
          "content": true,
          "title": "AADAR JEEVANI C-01",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sold": 0,
          "id": "pZmrJCM50iAcgUze05jQ",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286174583?alt=media&token=ff5bc5a1-9307-4478-962b-260d516b8be7",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286180183?alt=media&token=d8b01cbe-0cab-4366-8868-99b09ab16c95",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286185530?alt=media&token=c3b98c14-71c4-4dfd-8852-f791836f0ba4",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286190870?alt=media&token=961052ed-f80a-4b23-a97b-8fe0243af420",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286196719?alt=media&token=ec3bf58d-bc33-4530-979e-24d9e1d49e73",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286202180?alt=media&token=b34fd69c-6982-49b7-9979-a0c913d15bc2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FpZmrJCM50iAcgUze05jQ1664286208191?alt=media&token=5b3172e2-f2f8-4662-b044-2fb059b35a79"
          ],
          "quota": 0,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 298000000
          }
      },
      {
          "quota": 0,
          "variants": [],
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "id": "s1AovVO0lrgWrxEWeTLX",
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "content": true,
          "category": "Digestion",
          "code": 30049011,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368379872?alt=media&token=b80e29ae-b20c-422e-aa2d-3bb8697bbccc",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368406335?alt=media&token=d85a0906-5a12-4166-be46-c8ca0ac43247",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368410903?alt=media&token=d50c5d40-d46d-4f5d-8cf2-efb9ff814523",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368812890?alt=media&token=ca156c2f-7c01-4ecd-a12b-6b61e570eec5",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368819378?alt=media&token=10581507-4cc8-4f4f-b9b5-a472a73d099e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368824605?alt=media&token=4c076531-98e8-4ee6-aa3c-dfa5c3e4c241",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fs1AovVO0lrgWrxEWeTLX1664368830800?alt=media&token=7c0c8890-d35f-45f5-997d-930d6c303907"
          ],
          "burn": false,
          "title": "AADAR RELAX P-04",
          "cost": 228,
          "reqBurn": false,
          "sold": 0,
          "warranty": true,
          "description": "Description:\r\nFacing digestive problems? Just Re-Lax. Formulated with hand-picked herbs like Senna Patti, Harad and Ajwain, AADAR Re-Lax is an Ayurvedic approach to constipation and helps in regulating bowel movements in the body. The natural blend helps provide effective relief from constipation and promotes good digestion. A 5000 years old solution for the 21st century digestive troubles.\r\n\r\nUsage:\r\nThe ideal dosage of Re-Lax powder is 1 teaspoon per day before bed time, with normal water. In case of chronic constipation, the dosage can be increased to 2 teaspoons. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Digestion\r\nShelf Life (months): 24\r\nDosage: Powder\r\nPack size: 180 gram\r\nIngredients:Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), and Sanchal\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nRe-Lax is a perfect blend of herbs such as Senna Leaves (Sonamukhi), Ajwain, Harde (Haritaki), and Sanchal. Works as a natural laxative that cleanses the body and aids bowel movements. Safe for regular use and doesn’t cause dependence or build a habit. It is an ayurvedic solution for constipation and gastric discomforts. Clinically researched ayurvedic formulation, it doesn’t contain any additives or preservatives and thus have no side effects. ",
          "price": 240,
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 598000000
          },
          "upd": {
              "seconds": 1664368833,
              "nanoseconds": 611000000
          }
      },
      {
          "title": "AADAR ENDURE C-01",
          "upd": {
              "seconds": 1664366833,
              "nanoseconds": 305000000
          },
          "quota": 0,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 160000000
          },
          "code": 30049011,
          "cost": 675,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtYn4PqKnYyN6GmtzZcA51664366803365?alt=media&token=1e871cfe-8e79-4172-9a6a-53280223cdc6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtYn4PqKnYyN6GmtzZcA51664366808887?alt=media&token=c0fd287c-e606-493f-8422-cbdcacea5d86",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtYn4PqKnYyN6GmtzZcA51664366814700?alt=media&token=e7e9a41f-4b53-46c0-bf52-bd417b78dde6",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtYn4PqKnYyN6GmtzZcA51664366820707?alt=media&token=0fdb34fe-da0a-4a1b-828e-a99621de217d",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtYn4PqKnYyN6GmtzZcA51664366826871?alt=media&token=d1a0b640-418d-4960-9d0c-e734c378f8fe",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtYn4PqKnYyN6GmtzZcA51664366831211?alt=media&token=e14c69f0-adab-452d-bbcc-9cb99aeeb7ac"
          ],
          "burn": false,
          "variants": [],
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "warranty": true,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "reqBurn": false,
          "description": "Description: \r\nThe unique and powerful combination of herbs such as Gokhru, Musli, and Shatavari helps to better your endurance levels. Endure Capsule may help in increasing energy levels, molecules present in Jivanti, Kababchini and Akarkara optimize various male hormones for overall support to the physical strength and performance.\r\n\r\nUsage:\r\nConsume two capsules with water, every day in the morning after breakfast and two capsules in the evening after dinner for the first 15 -30 days. After a month, the dosage can be reduced to two capsules per day \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nSHELF LIFE (months):18\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\nDosage: Capsule\r\nPack size: 60 Capsules\r\nIngredients: Shatavari, Gokhru, Ashwagandha, Safed Musli, and Amla\r\n\r\nKey features:\r\nHelps to overcome the early coming issue and strengthens the delicate part",
          "id": "tYn4PqKnYyN6GmtzZcA5",
          "price": 900,
          "category": "Sexual wellness",
          "sold": 0,
          "content": true
      },
      {
          "warranty": true,
          "quota": 0,
          "variants": [],
          "title": "AADAR NO3 C-02",
          "code": 30049011,
          "upd": {
              "seconds": 1664367254,
              "nanoseconds": 746000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "price": 1220,
          "sold": 0,
          "description": "Description:\r\nNatural Omega 3 is rich in antioxidants and Omega 3, 6, 9. Its antioxidant properties help remove free radicals and improve the overall functioning of the body. It also helps improve immunity and lipid metabolism and fight bad cholesterol.\r\nNothing’s Fishy about It: Unlike other sources of Omega 3 based on fish oil, Natural Omega 3 is a fusion of various all-natural and pure vegetarian ingredients such as Flaxseeds, Arjuna, Walnut, and Cinnamon.\r\nHelps with Maintenance of Vital Organs: Omega 3 fatty acids play an important role in the good functioning of vital organs like the brain, heart, and eyes, and also contribute to the normal functioning of blood vessels.\r\n\r\nUsage: \r\nOne capsule with water, every day in the morning with breakfast, and one capsule in the evening with dinner. Living a healthy life is a matter of discipline. And making AADAR Natural Omega 3 a part of your routine helps you get your overall functioning of the body in order. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Vitamins & Mineral supplements\r\nShelf Life (months):35\r\nIngredients: Flaxseed, Arjuna, Walnut, Cinnamon\r\nDosage: Capsule\r\nPack size: 120 Capsules \r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nVegan Omega-3 and Immunity Supplement for Men and Women",
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "burn": false,
          "content": true,
          "category": "Vitamins & Mineral supplements",
          "reqBurn": false,
          "cost": 849,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367215246?alt=media&token=2c1de073-89a7-46d4-9874-ebc2f1459f07",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367222560?alt=media&token=a4805250-a398-4852-94cc-7a6b6e195e15",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367228568?alt=media&token=5ad4f636-0887-47d1-a536-7ee9094be802",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367234485?alt=media&token=69a4070d-3467-4663-b8d1-5381d449aa5f",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367240007?alt=media&token=c6815826-1046-4dfa-b6e2-2be41e18cbef",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367246290?alt=media&token=498f6b4f-ceab-484e-b070-dc020c6d790b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FtluiNKrcGPUQVbJZZ8OJ1664367251529?alt=media&token=62c111dd-d1bd-4327-92c1-082998258b46"
          ],
          "id": "tluiNKrcGPUQVbJZZ8OJ",
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 817000000
          }
      },
      {
          "variants": [],
          "warranty": true,
          "sin": {
              "seconds": 1664279203,
              "nanoseconds": 958000000
          },
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363071624?alt=media&token=c5c3a8d7-f1dc-4da1-aae7-8bdb0749befc",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363087664?alt=media&token=c9326660-05a1-4058-a8b2-5473e5aa04fc",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363092539?alt=media&token=857426b9-fa11-4b50-949e-ddb3d470a4d9",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363096289?alt=media&token=9f18c956-c2dd-4b53-8da5-7311182d2b21",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363100769?alt=media&token=db7408b2-1559-432b-8da1-6d920dc4ab3a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363107941?alt=media&token=c0e41ff4-ffe9-46e2-8ead-4ba8000681f8",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Ftw6iJ9YLnDdQbgZkAt7g1664363112941?alt=media&token=1b13bc78-2c26-4996-86de-6f5cdb386169"
          ],
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "cost": 999,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "category": "Chyawanprash",
          "id": "tw6iJ9YLnDdQbgZkAt7g",
          "code": 30049011,
          "content": true,
          "description": "Description:\r\nStay Proactive Capsule for staying charged all day. Stay PRO active is all about natural, herbal ingredients. There's shilajit and ashwagandha. And all that it does to offer you energy naturally. Offering you great strength and fighting fatigue throughout the day.\r\n\r\nUsage:\r\nTwo capsules with water, every day in the morning. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Chyawanprash\r\nShelf Life (months):36\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Ashwagandha, Amla, and Shilajit\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD\r\n\r\nKey features: \r\nEnergy Boost and Relief From Stress and Fatigue for Both Men and Women",
          "price": 1498,
          "quota": 0,
          "title": "AADAR SPA C-02",
          "burn": false,
          "reqBurn": false,
          "upd": {
              "seconds": 1664363115,
              "nanoseconds": 237000000
          },
          "sold": 0
      },
      {
          "id": "w9QfmeeilXhsg8EGaElc",
          "title": "AADAR JEEVANI C-02",
          "price": 680,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286262847?alt=media&token=5f9ecf76-fe5d-499d-914b-84a802fbb956",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286269286?alt=media&token=7f5455f2-528d-472b-921d-2a1c28cb8b29",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286274540?alt=media&token=b86f1109-8e9b-48b8-9fa5-5984945b7632",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286280053?alt=media&token=28a640f0-62d2-4208-b84e-41a836b359a2",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286287387?alt=media&token=ca4f56c9-04b7-4c92-adaf-7099e8262707",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286294298?alt=media&token=675cef9d-17d7-4dd4-b582-0dc11d537659",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fw9QfmeeilXhsg8EGaElc1664286300906?alt=media&token=b2b0a961-3d6c-4353-9118-0f8a5040d3fb"
          ],
          "code": 30049011,
          "sold": 0,
          "content": true,
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 315000000
          },
          "warranty": true,
          "reqBurn": false,
          "cost": 450,
          "upd": {
              "seconds": 1664286311,
              "nanoseconds": 272000000
          },
          "quota": 0,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "description": "Description:\r\nAn Ayurvedic detox for your body, AADAR Jeevani is packed with a unique blend of Aloe Vera, Neem, and Harad that helps support natural blood glucose levels and manage healthy glucose levels in the body. An effective formulation that not only helps improve glycaemic control but also acts as a natural detox to the body.\r\n\r\nUsage:\r\nThe ideal dosage is 2 capsules with warm water on an empty stomach in the morning. \r\n\r\nKey features:\r\nJeevani Capsules are 100% natural and safe, with no additives or preservatives, and thus do not have any adverse effects. The goodness of Pure Herbs: The perfect blend of Aloe Vera, Neem, and Harde (Haritaki). Support natural blood glucose levels and helps in weight management. FDCA Approved\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Diabetes\r\nSHELF LIFE (months) :36\r\nDosage: Capsule\r\nPack size: 120 Capsules \r\nIngredients: Aloe Vera, Neem, and Harde (Haritaki)\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "variants": [],
          "burn": false,
          "category": "Diabetes"
      },
      {
          "id": "wAHHAAYOcw6ydOA0ZgwF",
          "title": "AADAR WNM C-02",
          "reqBurn": false,
          "upd": {
              "seconds": 1664361637,
              "nanoseconds": 740000000
          },
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "content": true,
          "description": "Description:\r\nWeight No More is a natural way of going about managing weight - filled with the goodness of Garcinia, Triphala, Methi, and Green Tea, and developed on the principles of Ayurveda - in a manner that’s unique only to AADAR. Weight No More stimulates fat burn, curbs calorie intake, and works on everything necessary to help you with your weight. And that too, naturally.\r\n\r\nUsage: \r\nTwo capsules in the morning empty stomach, and Two capsules at night after a meal, with warm water, every day. Living a healthy life is a matter of discipline. And making Weight No More part of your routine helps you stay in great shape. \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Weight Loss Supplement\r\nShelf Life (months):36\r\nDosage: Capsule\r\nPack size: 120 Capsules\r\nIngredients: Garcinia + Triphala + Green Tea\r\nCounty of Origin: India\r\nManufacturer Name :S.G.M.L.S.S.S.M.LTD\r\n\r\nKey Features:\r\nEnriched with Garcinia Cambogia, Green Tea, Triphala, Fenugreek. The unique blend of these herbal ingredients boost metabolism naturally. FSSAI Approved & Non-GMO. Tested for Heavy Metals. Zero chemicals & Cruelty Free (Not Tested on Animals)",
          "category": "Weight Loss Supplement",
          "code": 30049011,
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361602662?alt=media&token=195480e5-c2ab-4d4e-a83c-861a37a0c34e",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361608208?alt=media&token=eb375830-4e33-4c04-83f5-88865fa6bdce",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361612415?alt=media&token=0f13ff24-6a52-408e-ba76-af6a0740a9af",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361617269?alt=media&token=2d9221d1-604e-491e-8e46-98819283c07b",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361622991?alt=media&token=f679035a-23ea-414f-ae52-517755fd2c8a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361628748?alt=media&token=2a108163-ba23-4ff3-862f-b1bb1c8279c1",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2FwAHHAAYOcw6ydOA0ZgwF1664361636096?alt=media&token=13cb267d-7900-4d4c-abb8-fdeadda7c610"
          ],
          "cost": 1299,
          "variants": [],
          "warranty": true,
          "sold": 0,
          "quota": 0,
          "burn": false,
          "price": 3198,
          "sin": {
              "seconds": 1664279204,
              "nanoseconds": 381000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5"
      },
      {
          "upd": {
              "seconds": 1664286614,
              "nanoseconds": 780000000
          },
          "category": "Diabetes",
          "sold": 0,
          "reqBurn": false,
          "code": 30049011,
          "warranty": true,
          "description": "Description:\r\nAn Ayurvedic detox for your body, AADAR Jeevani is packed with a unique blend of Aloe Vera, Neem, and Harad that helps support natural blood glucose levels and manage healthy glucose levels in the body. An effective formulation that not only helps improve glycaemic control but also acts as a natural detox to the body.\r\n\r\nUsage:\r\n1-2 teaspoons daily before breakfast, with warm water \r\n\r\nKey features: \r\nJeevani Powder is 100% natural and safe, with no additives or preservatives, and thus does not have any adverse effects. The goodness of Pure Herbs: The perfect blend of Aloe Vera, Neem, and Harde (Haritaki). Support natural blood glucose levels and helps in weight management. FDCA Approved\r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Diabetes\r\nShelf Life (months):24\r\nDosage: Powder\r\nPack size:200 Gram\r\nIngredients: Aloe Vera, Neem, and Harde (Haritaki)\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "id": "ws12AUMQAb3DE0mDDgaA",
          "sin": {
              "seconds": 1664279201,
              "nanoseconds": 591000000
          },
          "content": true,
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "title": "AADAR JEEVANI P-04",
          "banners": [
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286566180?alt=media&token=194c5992-0187-489a-90ad-cb5eb76f3b50",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286572233?alt=media&token=de86d562-b45b-4eb6-930e-afdbbe1fe552",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286578394?alt=media&token=4d6297a1-0c0c-4c99-bd5a-ccdb9b26dd08",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286585129?alt=media&token=5f930165-3a27-4647-93ab-09255a0db4ff",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286595206?alt=media&token=a3dde506-f80c-4e37-b862-0f081a40fffe",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286601785?alt=media&token=068eda82-4594-4d46-8c80-200083860e4a",
              "https://firebasestorage.googleapis.com/v0/b/refr/o/store%2Fws12AUMQAb3DE0mDDgaA1664286606569?alt=media&token=9f2366eb-4bc3-4d03-8cde-12315ac66edc"
          ],
          "cost": 250,
          "burn": false,
          "variants": [],
          "price": 300,
          "quota": 0,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12"
      },
      {
          "burn": false,
          "banners": [],
          "sin": {
              "seconds": 1664279205,
              "nanoseconds": 8000000
          },
          "category": "Sexual wellness",
          "title": "AADAR ENDURE O-02",
          "variants": [],
          "content": true,
          "description": "Description:\r\nEndure Oil is made with Vedic Pak Vidhi .It may help in increasing energy levels, molecules present in Jivanti, Kababchini and Akarkara optimize various male hormones for overall support to the physical strength and performance.\r\n\r\nUsage:\r\nApply a few drops on the private part. Gently massage for few minutes. Use daily in morning and night for best results \r\n\r\nSpecification:\r\nProduct Category: Ayurveda\r\nProduct Sub Category: Sexual wellness\r\nShelf Life (months):18\r\nDosage: Oil\r\nPack size: 60 ml\r\nIngredients: Shilajit, Musli\r\nCounty of Origin: India\r\nManufacturer Name: S.G.M.L.S.S.S.M.LTD",
          "code": 30049011,
          "upd": {
              "seconds": 1664279205,
              "nanoseconds": 8000000
          },
          "sid": "mSRzQ2KDA7UYugq53pO5",
          "sold": 0,
          "warranty": true,
          "id": "xJb1KbwNA9cMbhJacGEO",
          "cost": 598,
          "price": 798,
          "by": "bHQOmuzS3PON3XPYe6Q1afLUoI12",
          "quota": 0,
          "reqBurn": false
      }
  
    // {
    //   id: '123',
    //   category: 'Recommended',
    //   burn: false,
    //   reqBurn: false,
    //   title: 'Dal Tadka',
    //   description:
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aspernatur natus? Repudiandae, nobis error autem deleniti recusandae assumenda fugiat alias debitis odio quae, earum iste hic tenetur voluptate ipsa asperiores!',
    //   price: '1002',
    //   cost: '1231',
    //   banners: [
    //     'data:image/jpeg;base64,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',
    //   ],
    // },
    // {
    //   id: '123',
    //   category: 'Recommended',
    //   burn: false,
    //   reqBurn: false,
    //   title: 'Dal Tadka',
    //   description:
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aspernatur natus? Repudiandae, nobis error autem deleniti recusandae assumenda fugiat alias debitis odio quae, earum iste hic tenetur voluptate ipsa asperiores!',
    //   price: '1002',
    //   cost: '1231',
    //   banners: [],
    // },
  ];

  campaign = [
    {
      id: '123445123',
      type: 'percent',
      cbNew: 30,
      min: 1000,
      max: 100000,
      dateS: 1000000,
      dateE: 1231320,
    },
  ];

  currentLocation = {
    area: 'Malad',
    locality: 'Mumbai',
    lat: 17.23123123123,
    lon: 18.23131321321,
  };
  store = {
    logo: '',
    name: 'Fit Foods',
    banner: '',
    banners: ['', ''],
    typeORDER: {
      refund: false,
      phoneHide: false,
    },
    schedule: {
      opensDaily: true,
      openBreak: false,
    },
    about:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aspernatur natus? Repudiandae, nobis error autem deleniti recusandae assumenda fugiat alias debitis odio quae, earum iste hic tenetur voluptate ipsa asperiores!',
    userInfo: {
      soIG: true,
      soFB: true,
      soWA: true,
    },
    loc: '',
  };

  constructor(
    private dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.storeTyp = 'Onli';
    // this.storeTyp = 'Offl';
    // this.storeTyp = 'Both';

    if (this.storeTyp == 'Onli') {
      this.viewTyp = 'Online';
    }
    if (this.storeTyp == 'Offl') {
      this.viewTyp = 'Offline';
    }
    if (this.storeTyp == 'Both') {
      this.viewTyp = 'Offline';
    }
  }

  howRedeem(): void {}

  calculateStartExpiry(fsDateS: any, fsDateE: any) {
    return true;
  }

  getWidth() {
    var state = 0;
    var stateMax = 2;
    //state -= 1;
    return (state / stateMax) * 100 + '%';
  }

  showCat(products:any[], category:string){
    return products.findIndex(z => z.category == category && !z.burn && !z.reqBurn) !== -1;
  }

  get getheight() {
    return window.innerHeight;
  }
  get getwidth() {
    return window.innerWidth;
  }

  openCart() {}

  startAtStoreF2F(a: any) {}

  mapLink(storeName: string, lat: number, lon: number) {
    return (
      'https://maps.google.com/?q=' +
      lat +
      ',' +
      lon +
      '&title=' +
      storeName +
      '&content=' +
      'This is a Refr Club Store'
    );
  }

  storeLoc(location: any) {
    // let isPhone = this.getwidth < 768;
    // let w = isPhone ? this.getwidth + 'px' : '480px';
    // let h = isPhone ? this.getheight + 'px' : '98vh';
    // const refDialog = this.dialog.open(StorelocateComponent, {
    //   width: w,
    //   minWidth: '95vw',
    //   maxWidth: '200px',
    //   // height: '400px',
    //   hasBackdrop: true,
    //   disableClose: false,
    //   panelClass: 'storepage_address', //, autoFocus:false
    // });
    // refDialog.afterClosed().subscribe(() => {});
  }

  productpop(): void {
    // this._bottomSheet.open(StorevarientComponent, {
    //   panelClass: 'wallethowitworks',
    // });
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  getCartItemLength(id: string) {
    // if (!this.auth.myCart.includes(id)) {
    //   return 0;
    // }
    // else {
    //   let x = 0;
    //   for (let i = 0; i < this.auth.myCart.length; i++) {
    //     if (this.auth.myCart[i] == id) { x++ }
    //     if ((i + 1) == this.auth.myCart.length) {
    //       return x;
    //     }
    //   }
    // }
    return 0;
  }

  getSchedule(schedule: any) {
    if (schedule.opensDaily) {
      if (!schedule.openBreak) {
        return 'Daily : ' + schedule.openMonS + ' to ' + schedule.opensDailyE;
      } else {
        const daysO =
          schedule.openMon &&
          schedule.openTue &&
          schedule.openWed &&
          schedule.openThu &&
          schedule.openFri &&
          schedule.openSat
            ? 'Mon-Sat'
            : (schedule.openMon ? 'Mon,' : '') +
              (schedule.openTue ? 'Tue,' : '') +
              (schedule.openWed ? 'Wed,' : '') +
              (schedule.openThu ? 'Thu,' : '') +
              (schedule.openFri ? 'Fri,' : '') +
              (schedule.openSat ? 'Sat,' : '') +
              (schedule.openSun ? 'Sun,' : '') +
              '';
        const daysC =
          '' +
          (!schedule.openMon ? 'Mon,' : '') +
          (!schedule.openTue ? 'Tue,' : '') +
          (!schedule.openWed ? 'Wed,' : '') +
          (!schedule.openThu ? 'Thu,' : '') +
          (!schedule.openFri ? 'Fri,' : '') +
          (!schedule.openSat ? 'Sat,' : '') +
          (!schedule.openSun ? 'Sun,' : '') +
          '';
        return (
          daysO +
          ' : ' +
          schedule.openMonS +
          '-' +
          schedule.openBreakS +
          ' & ' +
          schedule.openBreakE +
          '-' +
          schedule.opensDailyE +
          (daysC ? ' ' + daysC + ' closed' : '')
        );
      }
    } else {
      return 'XXX';
    }
  }

  openBottomSheet(): void {
    // this._bottomSheet.open(RedeemonlineComponent);
    // this._bottomSheet.open(RedeemofflineComponent);
  }

  howitworks() {
    // this._bottomSheet.open(OnoffstorehowitworksComponent, {
    //   panelClass: 'storepage',
    // });
  }

  changeViewTyp(segmentValue: string) {
    this.viewTyp = segmentValue;
  }

  termncondition(): void {
    // this._bottomSheet.open(ShoptermnconditionComponent);
  }

  showAndHideAddToCard(id: any, variants: any, a: boolean, x: any) {
    this.auth.myCart.push(id);
    this.showAddToCard = true;
  }

  showAccordion(value: string) {
    let index = this.openedAccordianLists.indexOf(value);
    if (index === -1) {
      this.openedAccordianLists.push(value);
    } 
    else {
      this.openedAccordianLists.splice(index, 1);
    }
  }
  openDetail(id: string, variants: any, x: any) {}

  checkSearch(title: string) {}

  redeem_cta() {
    // this._bottomSheet.open(RedeemsheetComponent, {
    //   panelClass: 'redeem_cta',
    // });
  }

  totalCost() {}
}
