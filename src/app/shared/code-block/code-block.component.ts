import { CommonModule } from "@angular/common";
import { Component, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-code-block",
  imports: [CommonModule],
  templateUrl: "./code-block.component.html",
  styleUrl: "./code-block.component.css",
})
export class CodeBlockComponent {
  @Input() prefixText: string = "";
  @Input() language: string = "bash";
  @ViewChild("codeElement") codeElement!: ElementRef<HTMLElement>;

  isCopyIcon: boolean = true;
  buttonTitle: string = "Copy";

  copyToClipboard() {
    if (this.codeElement && this.codeElement.nativeElement) {
      const codeContent = this.codeElement.nativeElement.textContent || "";
      navigator.clipboard.writeText(codeContent).then(() => {
          this.isCopyIcon = false;
          this.buttonTitle = 'Copied';
        
        // Reset after 2 seconds
        setTimeout(() => {
          this.isCopyIcon = true;
          this.buttonTitle = "Copy";
        }, 2000);
      });
    }
  }
}
