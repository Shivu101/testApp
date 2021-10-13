import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('servElement') element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnIt called!');
    // console.log(this.header.nativeElement.nativeElement.textContent);
    console.log('Text Content ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('DoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('Text Content ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInIt');
    // console.log(this.header.nativeElement.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  items = [
    { name: 'Bike', age: 120 },
    { name: 'Bikea', age: 230 },
    { name: 'Bikeb', age: 120 },
    { name: 'Bikc', age: 100 },
    { name: 'Biked', age: 110 },
  ];
  filteredItems = this.items.filter((item) => {
    return item.age > 100;
  });
}
function viewChild(arg0: string) {
  throw new Error('Function not implemented.');
}
