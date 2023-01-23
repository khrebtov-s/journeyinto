import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';
import { jIWebsite } from '@src/app/route-names';

interface StepInterface {
  title?: string;
  body?: string;
  asset?: string;
}

@Component({
  selector: 'takethetour-dialog',
  templateUrl: './takethetour-dialog.component.html',
  styleUrls: ['./takethetour-dialog.component.scss']
})
export class TakethetourDialogComponent implements OnInit {
  learnMoreLink = `<p class="text-display-6 learn-more-link">
      <a href="${jIWebsite}" target="_blank">Learn more</a>
    </p>`;
  numberSteps = 5;
  steps: StepInterface[] = [
    {
      body: `<p class="text-display-2">Journey Into is a bridge between live yoga classes and self practice.</p>
      <img src="/assets/img/takethetour/step-1.png">`
    },
    {
      body: `<p class="text-display-2">Students; Receive your teacher’s weekly audio and video classes to guide you in
        your self practice.</p> 
        <img src="/assets/img/takethetour/step-2.png">
        <p class="text-display-3">Practice with your teacher, whenever you want, wherever you are.</p>
        ${this.learnMoreLink}`
    },
    {
      body: `<p class="text-display-2">Teachers; Record and share weekly video and audio classes with your students.</p>
      <img src="/assets/img/takethetour/step-3.png">
        <p class="text-display-3">Grow your business, strengthen your community and create an extra revenue stream.</p>
        ${this.learnMoreLink}`
    },
    {
      body: `<p class="text-display-2">Our posture glossary is a resource for teachers and students. Teachers can add 
        the relevant poses to their class to support their students’ practice.</p>
        <img src="/assets/img/takethetour/step-4.png">
        ${this.learnMoreLink}`
    }
  ];
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(
    public dialogRef: MatDialogRef<TakethetourDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  swipe(eType, stepper: MatStepper) {
    const isNotFirstStep = stepper.selectedIndex > 0;
    const isNotLastStep = stepper.selectedIndex !== stepper._steps.length - 1;

    if (eType === this.SWIPE_ACTION.LEFT && isNotLastStep) {
      stepper.next();
    } else if (eType === this.SWIPE_ACTION.RIGHT && isNotFirstStep) {
      stepper.previous();
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
