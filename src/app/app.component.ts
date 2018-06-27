import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  loaded = false;

  constructor(private sanitizer: DomSanitizer) {}

  get animationUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://media.giphy.com/media/jzaZ23z45UxK8/giphy.gif"
    );
  }
}
