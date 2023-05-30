import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit{
  ngOnInit(): void {
    const banner= document.getElementById('banner');
    banner!.style.backgroundImage = "url('./content/images/banner.jpeg')";
  }
}
