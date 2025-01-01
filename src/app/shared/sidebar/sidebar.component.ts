import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-sidebar",
  imports: [CommonModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
  currentVersion = 'v2';
  isSidebarOpen = false;

  sidebarItems = [
    {
      id: "getting-started",
      title: "Getting Started",
      versions: ["v1", "v2"], // Available in both versions
      items: [
        { title: "Getting Started", versions: ["v1", "v2"], active: true },
        { title: "Installation", versions: ["v2"], active: false },
        { title: "Step-by-step guide", versions: ["v1", "v2"], active: false },
      ],
    },
    {
      id: "general",
      title: "General",
      versions: ["v1", "v2"], // Available in both versions
      items: [
        { title: "Accessibility", versions: ["v1", "v2"] },
        { title: "Colors", versions: ["v2"] },
        { title: "Data Structure", versions: ["v1", "v2"] },
        { title: "Fonts", versions: ["v1", "v2"] },
        { title: "Options", versions: ["v1", "v2"] },
        { title: "Performance", versions: ["v2"] },
      ],
    },
    {
      id: "configuration",
      title: "Sheet Configuration",
      versions: ["v2"], // Only available in v2
      items: [{ title: "Sheet Configuration", versions: ["v2"] }],
    },
    {
      id: "contribute",
      title: "Contribute",
      versions: ["v1", "v2"],
      items: [
        {
          title: "Contribute",
          link: "../../../contribute/contribute.html",
          versions: ["v1", "v2"],
        },
        {
          title: "I Have a Question",
          link: "../../../contribute/contribute.html#have-a-question-section",
          versions: ["v1", "v2"],
        },
        {
          title: "I Want to Report Issues",
          link: "../../../contribute/contribute.html#want-to-report-issues-section",
          versions: ["v1"],
        },
        {
          title: "I Want to Submit Code",
          link: "../../../contribute/contribute.html#want-to-submit-code-section",
          versions: ["v1", "v2"],
        },
      ],
    },
  ];
}
