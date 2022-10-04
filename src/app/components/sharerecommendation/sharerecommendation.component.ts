import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharerecommendation',
  templateUrl: './sharerecommendation.component.html',
  styleUrls: ['./sharerecommendation.component.scss']
})
export class SharerecommendationComponent implements OnInit {
  emoji = [
    { img: "emoji-love.svg", name: "Loved it", text: "❤️" },
    { img: "emoji-good.png", name: "Good", text: "😁" },
    { img: "emoji-outstanding.svg", name: "Perfect", text: "💯" },
    { img: "emoji-average.png", name: "Average", text: "🙂" },
    { img: "emoji-mustTry.png", name: "Must try", text: "🙌" },
    { img: "emoji-satisfactory.png", name: "Satisfied", text: "😊" },
    { img: "emoji-awesome.png", name: "Awesome", text: "😍" }
  ];
  say = "";
  commentSet: string[] = [];
  comments: string[] = [];
  emojiSet: string = "";
  statusBar = 0;
  storeReference = {
    id: "123", by: "", name: "Fit Foods", cb: 0
  }

  constructor() {
    setTimeout(() => {
      this.statusBar = 1;
      this.comments = [
        "Experienced doctors",
        "Friendly staff",
        "Advanced technology",
        "Comforting environment",
        "Satisfactory experience",
        "Sterile & hygienic",
        "Easy scheduling",
        "Value for money"
      ]
      this.execute();
    }, 4000);
  }

  ngOnInit(): void {
  }

  execute() {

  }

  openDialog() {
    // if (!this.emojiSet || this.commentSet.length == 0) {
    //   if (!this.emojiSet) {
    //     alert("Please pick an emoji");
    //   }
    //   else {
    //     alert("please pick atleast one Highlight");
    //   }
    // } else {
    //   const mess = {
    //     emoji: this.emojiSet,
    //     name: this.emoji[this.emoji.findIndex(x => x.text == this.emojiSet)].name,
    //     comments: this.commentSet,
    //     say: this.say,
    //     code: this.refrCode,
    //     shareUrl: this.shareUrl,
    //     //mine:{uid:, by:, name: },
    //     storeReference: { id: this.storeReference.id, by: this.storeReference.by, name: this.storeReference.name, cb: this.storeReference.cb },
    //     journey: this.journey
    //   }
    //   const bsRef = this.bottomSheet.open(StoreActionComponent, {
    //     data: mess, panelClass: "shareScreen", disableClose: true //hasBackdrop: false,
    //   });
    //   bsRef.afterDismissed().subscribe(ref => {
    //     console.log(ref)
    //     if (!ref || !ref.success) {
    //     } else {
    //       //this.openSteps(ref.id);

    //       if (ref.type == "Redeem" && ref.journey == "POS") {
    //         this.redeem(ref.tranzID);
    //       }
    //       if (ref.journey == "B2U") {
    //         this.auth.resource.router.navigate(["/thank-you/" + this.storeID])
    //       }
    //       if (ref.type == "Redeem" && ref.journey == "D2U") {
    //         this.auth.resource.router.navigate(["/redeem/" + this.payID])
    //       }
    //     }
    //   })
    // }
  }

  getWidth() {
    var state = this.statusBar;
    var stateMax = 2;
    //state -= 1;
    return (state / stateMax) * 100 + "%";
  }

  newComment(com: string) {
    if (this.commentSet.length >= 3) {
      alert("You can only choose upto 3 comments.");
    } else {
      this.commentSet.push(com)
    }
  }

  AddRemove(x: string) {
    if (!this.commentSet.includes(x)) {
      this.newComment(x);
      console.log("index of  = "+ this.commentSet)

    }
    else {
      console.log("x is "+x)
      console.log("index of  = " + this.commentSet.indexOf(x));
      this.commentSet.splice(this.commentSet.indexOf(x),1);
    }
  }
}
