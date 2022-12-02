import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  markdownForm: FormGroup;
  richTextForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.markdownForm = this._fb.group({
      title: ["Hello, I am Trung", Validators.required],
      description: [
        "This is a markdown text editor for - http://jira.trungk18.com/"
      ]
    });

    this.richTextForm = this._fb.group({
      title: ["Web Portal Promotion Message", Validators.required],
      description: [
        `<h2>Wednesday Promotion</h2><p><strong style=\"color: rgb(161, 0, 0);\">4X Multiplier</strong></p>`
      ]
    });
  }

  get descriptionRawControl() {
    return this.markdownForm.controls.description as FormControl;
  }

  get descriptionRichControl() {
    return this.richTextForm.controls.description as FormControl;
  }
}
