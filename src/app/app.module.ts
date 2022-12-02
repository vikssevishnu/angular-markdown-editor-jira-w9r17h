import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MarkdownEditorModule } from "./markdown-editor/markdown-editor.module";
import { RichTextEditorModule } from "./rich-text-editor/rich-text-editor.module";
import { QuillModule } from "ngx-quill";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MarkdownEditorModule,
    RichTextEditorModule,
    QuillModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
