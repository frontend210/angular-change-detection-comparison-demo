import {
  Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef, ElementRef, NgZone
} from '@angular/core';

let _globalCheckCount = 0;

const startTime = (new Date()).getTime();

@Component({
  selector: 'demo-cd-default',
  templateUrl: './demo-cd-default.component.html',
  host: {
    '[class.demo-component]': 'true'
  }
})
export class DemoCdDefaultComponent {
  @Input() public leftBranchDepth: number;
  @Input() public rightBranchDepth: number;
  @Input() public counter: number = 0;

  public internalCounter: number = 0;

  protected _thisCheckCount: number = 0;
  public get thisCheckCount(): number { return ++this._thisCheckCount; }

  public _globalCheckCounts: number[] = [];
  public get globalCheckCounts(): number[] {
    return this._globalCheckCounts = this._globalCheckCounts.concat([++_globalCheckCount]);
  }

  public get time(): number { return (new Date).getTime() - startTime; }

  constructor(
    protected cdRef: ChangeDetectorRef,
    protected elRef: ElementRef,
    protected ngZone: NgZone,
  ) { }

  public ngDoCheck(): void {
    const el: HTMLElement = this.elRef.nativeElement;
    if (!el) { return; }
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        el.classList.remove('during-ngDoCheck');
        requestAnimationFrame(() => {
          el.classList.add('during-ngDoCheck');
          setTimeout(() => {
            requestAnimationFrame(() => {
              el.classList.remove('during-ngDoCheck');
            });
          }, 300);
        });
      });
    });
  }

  public doNothing(): void {
    console.log("doNothing");
  }

  public increaseInternalCounter(): void {
    this.internalCounter++;
  }
}
